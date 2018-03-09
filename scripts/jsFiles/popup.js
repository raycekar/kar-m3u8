var list = document.getElementById("linkList")


var mssgHandler = function (data) {
    var m3u8List = data;
    for (i = 0; i < m3u8List.length; i++) {
        var node = document.createElement("LI");
        node.textContent = m3u8List[i];
        list.appendChild(node)
    }
}

//make call and recieve list of m3u8 links
chrome.runtime.sendMessage("m3u8List", mssgHandler)

//add onclick to clear list
var clearBttn = document.getElementById("clearBttn");
clearBttn.onclick = function () {
    chrome.runtime.sendMessage("CLEARLIST", mssgHandler)
    var node = document.getElementById("linkList")
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}





