// JavaScript source code

var myHeading = document.querySelector('h1');


readTextFile("file:///1.txt");

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                myHeading.textContent = allText;
            }
        }
    }
    rawFile.send(null);
}

