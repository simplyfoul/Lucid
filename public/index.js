const input = document.getElementById('inputField');
const button = document.getElementById('searchButton');


button.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        if (localStorage.proxySelect === 'dip') {
            if (localStorage.aboutBlankCloaking === 'true') {
                let urle = window.location.origin + `${__DIP$config.prefix + __DIP$config.encodeUrl(url)}`;
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                let iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = urle;
                win.document.body.appendChild(iframe);
            } else {
                location.assign(window.__DIP.config.prefix + window.__DIP.encodeURL(url));
            }
            
        } else {
            if (localStorage.aboutBlankCloaking === 'true') {
                let urle = window.location.origin + `${__uv$config.prefix + __uv$config.encodeUrl(url)}`;
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                let iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = urle;
                win.document.body.appendChild(iframe);
            } else {
                window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
            }
            
        }
        
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};