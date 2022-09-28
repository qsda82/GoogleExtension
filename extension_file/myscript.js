//import  html2canvas  from './html2canvas.esm.js';
var showInfo = function () {
    console.log("Show Info is invoked");
}
var showAnotherInfo = function () {
    console.log("Show Another Info");
}

async function useImport() {
    const util = await import("./html2canvas.esm.js")
    //util.hello()
    // 如果是想使用export default出來的
    //util.default.hello()
    util.default.html2canvas(document.querySelector("#captcha")).then(canvas => {
        document.body.appendChild(canvas)
    });
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    
    console.log(message, sender, callback);
    callback('我收到你的消息了：'+JSON.stringify("request"));
    return true;
});

