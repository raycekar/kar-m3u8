var list = document.getElementById("linkList")
console.log(list)
var node = document.createElement("LI")
node.textContent = "hello"
list.appendChild(node)

chrome.devtools.network.getHAR(
    function(harLog){
        console.log(harLog)
})

