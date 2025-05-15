        const container = document.getElementById('container');
        const zoneViewer = document.getElementById('zoneViewer');
        let zoneFrame = document.getElementById('zoneFrame');
        const searchBar = document.getElementById('searchBar');
        const sortOptions = document.getElementById('sortOptions');
        // https://www.jsdelivr.com/tools/purge
        const zonesURL = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json";
        const coverURL = "https://cdn.jsdelivr.net/gh/gn-math/covers@main";
        const htmlURL = "https://cdn.jsdelivr.net/gh/gn-math/html@main";
        let zones = [];
        let popularityData = {};
        async function listZones() {
            try {
                const response = await fetch(zonesURL+"?t="+Date.now());
                const json = await response.json();
                zones = json;
                await fetchPopularity();
                sortZones();
                const search = new URLSearchParams(window.location.search);
                const id = search.get('id');
                if (id) {
                    const zone = zones.find(zone => zone.id + '' == id + '');
                    if (zone) {
                        openZone(zone);
                    }
                }
            } catch (error) {
                container.innerHTML = `Error loading zones: ${error}`;
            }
        }
        async function fetchPopularity() {
            try {
                const response = await fetch("https://data.jsdelivr.com/v1/stats/packages/gh/gn-math/html@main/files?period=year");
                const data = await response.json();
                data.forEach(file => {
                    const idMatch = file.name.match(/\/(\d+)\.html$/);
                    if (idMatch) {
                        const id = parseInt(idMatch[1]);
                        popularityData[id] = file.hits.total;
                    }
                });
            } catch (error) {
                popularityData[0] = 0;
            }
        }

        function sortZones() {
            const sortBy = sortOptions.value;
            if (sortBy === 'name') {
                zones.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortBy === 'id') {
                zones.sort((a, b) => a.id - b.id);
            } else if (sortBy === 'popular') {
                zones.sort((a, b) => (popularityData[b.id] || 0) - (popularityData[a.id] || 0));
            }
            zones.sort((a, b) => (a.id === -1 ? -1 : b.id === -1 ? 1 : 0));
            displayZones(zones);
        }

        function displayZones(zones) {
            container.innerHTML = "";
            zones.forEach(file => {
                const zoneItem = document.createElement("div");
                zoneItem.className = "zone-item";
                zoneItem.onclick = () => openZone(file);
                const img = document.createElement("img");
                img.src = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                zoneItem.appendChild(img);
                const button = document.createElement("button");
                button.textContent = file.name;
                button.onclick = (event) => {
                    event.stopPropagation();
                    openZone(file);
                };
                zoneItem.appendChild(button);
                container.appendChild(zoneItem);
            });
            if (container.innerHTML === "") {
                container.innerHTML = "No zones found.";
            } else {
                document.getElementById("zoneCount").textContent = `Zones Loaded: ${zones.length}`;
            }
        }

        function filterZones() {
            const query = searchBar.value.toLowerCase();
            const filteredZones = zones.filter(zone => zone.name.toLowerCase().includes(query));
            displayZones(filteredZones);
        }

        function openZone(file) {
            if (file.url.startsWith("http")) {
                window.open(file.url, "_blank");
            } else {
                const url = file.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                fetch(url+"?t="+Date.now()).then(response => response.text()).then(html => {
                    if (zoneFrame.contentDocument === null) {
                        zoneFrame = document.createElement("iframe");
                        zoneFrame.id = "zoneFrame";
                        zoneViewer.appendChild(zoneFrame);
                    }
                    zoneFrame.contentDocument.open();
                    zoneFrame.contentDocument.write(html);
                    zoneFrame.contentDocument.close();
                    document.getElementById('zoneName').textContent = file.name;
                    document.getElementById('zoneId').textContent = file.id;
                    document.getElementById('zoneAuthor').textContent = "by " + file.author;
                    if (file.authorLink) {
                        document.getElementById('zoneAuthor').href = file.authorLink;
                    }
                    zoneViewer.style.display = "block";
                }).catch(error => alert("Failed to load zone: " + error));
            }
        }

        function aboutBlank() {
            const newWindow = window.open("about:blank", "_blank");
            let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent).url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
            fetch(zone+"?t="+Date.now()).then(response => response.text()).then(html => {
                if (newWindow) {
                    newWindow.document.open();
                    newWindow.document.write(html);
                    newWindow.document.close();
                }
            })
        }

        function closeZone() {
            zoneViewer.style.display = "none";
            zoneViewer.removeChild(zoneFrame);
        }

        function downloadZone() {
            let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent);
            fetch(zone.url.replace("{HTML_URL}", htmlURL)+"?t="+Date.now()).then(res => res.text()).then(text => {
                const blob = new Blob([text], {
                    type: "text/plain;charset=utf-8"
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = zone.name + ".html";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }

        function fullscreenZone() {
            if (zoneFrame.requestFullscreen) {
                zoneFrame.requestFullscreen();
            } else if (zoneFrame.mozRequestFullScreen) {
                zoneFrame.mozRequestFullScreen();
            } else if (zoneFrame.webkitRequestFullscreen) {
                zoneFrame.webkitRequestFullscreen();
            } else if (zoneFrame.msRequestFullscreen) {
                zoneFrame.msRequestFullscreen();
            }
        }

        function saveData() {
            let data = JSON.stringify(localStorage) + "\n\n|\n\n" + document.cookie;
            const link = document.createElement("a");
            link.href = URL.createObjectURL(new Blob([data], {
                type: "text/plain"
            }));
            link.download = `${Date.now()}.data`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        function loadData(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (e) {
                const content = e.target.result;
                const [localStorageData, cookieData] = content.split("\n\n|\n\n");
                try {
                    const parsedData = JSON.parse(localStorageData);
                    for (let key in parsedData) {
                        localStorage.setItem(key, parsedData[key]);
                    }
                } catch (error) {
                }
                if (cookieData) {
                    const cookies = cookieData.split("; ");
                    cookies.forEach(cookie => {
                        document.cookie = cookie;
                    });
                }
                alert("Data loaded");
            };
            reader.readAsText(file);
        }

        function darkMode() {
            document.body.classList.toggle("dark-mode");
        }

        function cloakIcon(url) {
            const link = document.querySelector("link[rel~='icon']");
            link.rel = "icon";
            if ((url+"").trim().length === 0) {
                link.href = "opa.png";
            } else {
                link.href = url;
            }
            document.head.appendChild(link);
        }
        function cloakName(string) {
            if ((string+"").trim().length === 0) {
                document.title = "Magma";
                return;
            }
            document.title = string;
        }

        function tabCloak() {
            closePopup();
            document.getElementById('popupTitle').textContent = "Tab Cloak";
            const popupBody = document.getElementById('popupBody');
            popupBody.innerHTML = `
                <label for="tab-cloak-textbox" style="font-weight: bold;">Set Tab Title:</label><br>
                <input type="text" id="tab-cloak-textbox" placeholder="Enter new tab name..." oninput="cloakName(this.value)">
                <br><br><br><br>
                <label for="tab-cloak-textbox" style="font-weight: bold;">Set Tab Icon:</label><br>
                <input type="text" id="tab-cloak-textbox" placeholder="Enter new tab icon..." oninput='cloakIcon(this.value)'>
                <br><br><br>
            `;
            popupBody.contentEditable = false;
            document.getElementById('popupOverlay').style.display = "flex";
        }

        const settings = document.getElementById('settings');
        settings.addEventListener('click', () => {
            document.getElementById('popupTitle').textContent = "Settings";
            const popupBody = document.getElementById('popupBody');
            popupBody.innerHTML = `
            <button id="settings-button" onclick="darkMode()">Toggle Dark Mode</button>
            <br><br>
            <button id="settings-button" onclick="tabCloak()">Tab Cloak</button>
            <br>
            `;
            popupBody.contentEditable = false;
            document.getElementById('popupOverlay').style.display = "flex";
        });
        

        function loadPrivacy() {
            document.getElementById('popupTitle').textContent = "Privacy Policy";
            const popupBody = document.getElementById('popupBody');
            popupBody.innerHTML = `
                <div style="max-height: 60vh; overflow-y: auto;">
                    <h2>i copied and remade this website the original website is </h2> <h2><a href="https://gn-math.github.io/" target="_blank">here here here here</a></h2>
                    <h2>i do not own this website.</h2> <h2>its a copy of the original website.</h2>
                    <h2>i do not own the data on this website.</h2>
                    <h2> this is the ad free version of the website.</h2>
                    <h2>the games/zones are not mine.</h2> <h2>they are stored on a github repository that i dont own.</h2>
                </div>
            `;
            popupBody.contentEditable = false;
            document.getElementById('popupOverlay').style.display = "flex";
        }

        function closePopup() {
            document.getElementById('popupOverlay').style.display = "none";
        }
        listZones();
