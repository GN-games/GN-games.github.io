} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-98DP5VKS42');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/5");
}

const tabCloak = document.createElement("script");
tabCloak.setAttribute("src", "/js/tab_cloak.js");
document.head.append(tabCloak);
script("Injected script 2/5");

function createScriptTag(options) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    if (options.src) {
      script.src = options.src
      script.onload = resolve
      script.onerror = reject
    } else {
      resolve()
    }

    if (options.inline) {
      script.textContent = options.inline
    }

    if (options.async) {
      script.async = true
    }

    if (options.defer) {
      script.defer = true
    }

    if (options.crossOrigin) {
      script.crossOrigin = options.crossOrigin
    }

    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        script.setAttribute(key, value)
      }
    }

    document.head.appendChild(script)

    if (!options.src) {
      resolve()
    }
  })
}
