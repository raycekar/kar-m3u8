//var list = document.getElementById("linkList")
//console.log(list)
//var node = document.createElement("LI")
//node.textContent = "hello"
//list.appendChild(node)
//console.log("here")

chrome.webRequest.onCompleted.addListener(function (data) {

    console.log(data.url)

}, { urls: ["*://*/*.m3u8", "*://*/*.ts"] });




