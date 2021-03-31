'use strict';

function update(bol) {
  const path = {
    path: {
      '16': 'data/icons' + (bol ? '/' : '/disabled/') + '16.png',
      '19': 'data/icons' + (bol ? '/' : '/disabled/') + '19.png',
      '32': 'data/icons' + (bol ? '/' : '/disabled/') + '32.png',
      '38': 'data/icons' + (bol ? '/' : '/disabled/') + '38.png',
      '48': 'data/icons' + (bol ? '/' : '/disabled/') + '48.png',
      '64': 'data/icons' + (bol ? '/' : '/disabled/') + '64.png'
    }
  };
  chrome.browserAction.setIcon(path);
  chrome.browserAction.setTitle({
    title: 'Dark Theme for Google Meet (' + (bol ? 'Enabled' : 'Disabled') + ')'
  });
}

chrome.browserAction.onClicked.addListener(() => {
  chrome.storage.local.get({
    enabled: true
  }, prefs => {
    prefs.enabled = !prefs.enabled;
    chrome.storage.local.set(prefs);
    update(prefs.enabled);
  });
});

chrome.storage.local.get({
  enabled: true
}, prefs => update(prefs.enabled));