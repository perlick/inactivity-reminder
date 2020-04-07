'use strict';

function startMonitor(event) {
  let minutes = document.getElementById('minutes').value;
  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.idle.setDetectionInterval(minutes*60);
  chrome.storage.sync.set({state: "ON"});
  window.close();
}

function stopMonitor(event) {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.storage.sync.set({state: "OFF"});
  window.close();
}

function testMonitor(event) {
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'drink_water128.png',
      title:    'You are idle',
      message:  'Get back to work!',
      buttons: [
        {title: 'Turn off this extension.'}
      ],
      priority: 0});
}

document.getElementById('start').addEventListener('click', startMonitor);
document.getElementById('stop').addEventListener('click', stopMonitor);
document.getElementById('test').addEventListener('click', testMonitor);
