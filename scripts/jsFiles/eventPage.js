// list of all m3u8 links
var m3u8List = [];

//Listener for requests
chrome.webRequest.onCompleted.addListener(function (data) {
    m3u8List.push(data.url);
}, { urls: ["*://*/*.m3u8"] });

// message listener from popup
chrome.runtime.onMessage.addListener(function (mssg, sender, fun) {
    if(mssg == "CLEARLIST")
        m3u8List = [];
    fun(m3u8List)
});

