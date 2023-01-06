/*const apiKey = "";

const endpoint = "https://api.quotable.io/quotes";
fetch(endpoint)
.then(res => res.json())
.then(data => {
    console.log(data)
})*/

document.getElementById("getquote").addEventListener("click", getQuote);
document.getElementById("tagButton").addEventListener("click", getTagQuote);
document.getElementById("userQuote").addEventListener("click", userQuote);
document.getElementById("clear").addEventListener("click", clearButton);

function getQuote() {
    let page = rng(100)+1;
    let itemNumber = rng(20);
    let endpoint = `https://api.quotable.io/quotes?page=${page}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        let displayQuote = document.getElementById("quote");
        let displayAuthor = document.getElementById("author");
        let quote = data.results[itemNumber].content;
        displayQuote.innerText = "'" + quote + "'";
        let author = `-${data.results[itemNumber].author}`;
        displayAuthor.innerText = author;
    })
}

function getTagQuote () {
    let selectedTag = document.getElementById("tag").value;
    let endpoint = `https://api.quotable.io/quotes?tags=${selectedTag}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        let displayQuote = document.getElementById("quote");
        let displayAuthor = document.getElementById("author");
        let resultSize = data.results.length;
        let itemNumber = rng(resultSize);
        let quote = data.results[itemNumber].content;
        displayQuote.innerText = "'" + quote + "'";
        let author = `-${data.results[itemNumber].author}`;
        displayAuthor.innerText = author;
    })
}

function rng (ceiling) {
    return Math.floor(Math.random()*ceiling);
}

function userQuote () {
    let quote = document.querySelector("input").value;
    document.getElementById("yourQuote").innerText = "'" + quote + "'";
}

function clearButton () {
    document.querySelector("input").value = "";
    document.getElementById("yourQuote").innerText = "";
}