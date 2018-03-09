var list = document.getElementById("linkList")

//make call and recieve list of m3u8 links
chrome.runtime.sendMessage("m3u8List", function (data) {
    console.log(data)
    var m3u8List = data;
    for (i = 0; i < m3u8List.length; i++) {
        var node = document.createElement("LI");
        node.textContent = m3u8List[i];
        list.appendChild(node)
    }
})




console.log("here")


