var showInfo = function () {
    console.log("Show Info is invoked");
}
var showAnotherInfo = function () {
    console.log("Show Another Info");
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    console.log(message, sender, callback);
    callback('我收到你的消息了：'+JSON.stringify("request"));
    return true;
});

