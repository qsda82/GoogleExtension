function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

    //chrome.runtime.reload();
    //Add all you functional Logic here
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    },  function(tabs) {  
             
            chrome.tabs.sendMessage(tabs[0].id, {
                "functiontoInvoke": "showInfo"
            });
            
            /*chrome.scripting.executeScript(
              {
                target: {tabId: tabs[0].id},
                files: ['util.js']
              }
            );*/
            
    });
    
}

// 監聽套件被初始安裝或更新時、瀏覽器更新時
chrome.runtime.onInstalled.addListener(() => {
    // 一次性的創建一個右鍵選單項目
    chrome.contextMenus.create({
      // 給予此選單項目的 ID
      "id": "hello",
      // 給予此選單項目顯示的名稱
      "title": "hello",
      // 指定只在圖片上點擊右鍵才會顯示此選單項目
      "contexts": ["editable"]
    })
    
  })


// 監聽當點擊右鍵選單某個項目時
chrome.contextMenus.onClicked.addListener(genericOnClick)



