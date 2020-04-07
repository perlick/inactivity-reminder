'use strict';

chrome.idle.onStateChanged.addListener(function(idleState) {
  chrome.storage.sync.get(['state'], function(item) {
    if(item.state=="ON" && idleState=="idle"){
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
  });
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.set({state: "OFF"});
});
