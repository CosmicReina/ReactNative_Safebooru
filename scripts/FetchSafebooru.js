async function fetchSafebooru(tags) {
    tags = tags !== "" ? processTags(tags) : "all";

    let maxPID;
    if (tags !== "") {
        maxPID = await fetchMaxPID(tags);
        maxPID = maxPID > 200000 ? 200000 : maxPID;
    } else {
        maxPID = 200000;
    }

    const step = 42;
    const randomMax = Math.floor(maxPID / step);
    const random = Math.floor(Math.random() * (randomMax + 1));
    const pid = random * step;

    const path = await fetchRandomPost(tags, pid);
}

async function fetchRandomPost(tags, pid) {
    const {JSDOM} = require("jsdom");

    const url = "https://safebooru.org/index.php?page=post&s=list"
        + "&tags=" + tags
        + "&pid=" + pid;

    const data = await fetch(url);
    const html = await data.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const imageList = document.querySelector(".image-list");
    const aElements = imageList.querySelectorAll("a");

    const randomMax = aElements.length;
    const random = Math.floor(Math.random() * (randomMax + 1));

    const randomElement = aElements[random];
    return randomElement.href;
}

async function fetchMaxPID(tags) {
    const {JSDOM} = require("jsdom");

    const url = "https://safebooru.org/index.php?page=post&s=list"
        + "&tags=" + tags;

    const data = await fetch(url);
    const html = await data.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const pagination = document.querySelector(".pagination");

    const aElements = pagination.querySelectorAll("a");
    const hrefLast = aElements[aElements.length - 1].href;
    const split = hrefLast.split("pid=");
    return split[split.length - 1];
}

function processTags(tags) {
    return tags.split(" ").join("+");
}

// fetchSafebooru("akiyama_mizuki").then(() => {});

// fetchRandomPost("akiyama_mizuki+1girl", 100).then(() => {});

// console.log(processTags("akiyama_mizuki 1girl"));