const titleTab = document.getElementById("titleTab");
const iconTab = document.getElementById("iconTab");
const abc = document.getElementById("aboutBlankCloaking");
const dip = document.getElementById('dip');
const uv = document.getElementById('uv');

if (localStorage.proxySelect === 'dip') {
  uv.checked = false;
  dip.checked = true;
} else {
  dip.checked = false;
  uv.checked = true;
}

if (localStorage.aboutBlankCloaking === 'true') {
  abc.checked = true;
} else {
  abc.checked = false;
}

function aboutBlankCloaking() {
  if (abc.checked) {
    localStorage.aboutBlankCloaking = 'true';
  } else {
    localStorage.aboutBlankCloaking = 'false';
  }
}

function proxySelect() {
    localStorage.proxySelect = 'ultraviolet';
    uv.checked = true;
    dip.checked = false;
}

function proxySelect2() {
    localStorage.proxySelect = 'dip'
    uv.checked = false;
    dip.checked = true;
}

if ((localStorage.getItem('tabTitle')) != null) {
    document.title = localStorage.getItem('tabTitle');
}

if (localStorage.getItem('tabIcon') != null) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = localStorage.getItem('tabIcon');

    document.getElementsByTagName('head')[0].appendChild(link);
}

document.getElementById("tabTitle").addEventListener("click", function() {

    localStorage.setItem('tabTitle', titleTab.value.trim());

    document.title = titleTab.value.trim();
})

document.getElementById("tabIcon").addEventListener("click", function() {

    localStorage.setItem('tabIcon', iconTab.value.trim());

    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconTab.value.trim();

    document.getElementsByTagName('head')[0].appendChild(link);

})