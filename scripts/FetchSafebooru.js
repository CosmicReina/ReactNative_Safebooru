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

    const url = "https://safebooru.org" + path;
    return await fetchPost(url);
}

async function fetchPost(url) {
    const {JSDOM} = require("jsdom");

    const data = await fetch(url);
    const html = await data.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const linkList = document.querySelector(".link-list");

    const liElements = linkList.querySelectorAll("li");
    const liElement = Array.from(liElements).find(li => li.innerHTML.includes("Original image"));
    const aElements = liElement.querySelector("a");
    return aElements.href;
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
    const random = Math.floor(Math.random() * (randomMax));
    console.log(randomMax);
    console.log(random);

    const randomElement = aElements[random];
    return randomElement.href;
}

async function fetchMaxPID(tags) {
    // const {JSDOM} = require("jsdom");
    const { DOMParser } = require("react-native-html-parser");

    const url = "https://safebooru.org/index.php?page=post&s=list"
        + "&tags=" + tags;

    const data = await fetch(url);
    const html = await data.text();

    // const dom = new JSDOM(html);
    let doc = new DOMParser().parseFromString(html, "text/html");
    const pagination = doc.querySelect(".pagination")[0];

    const aElements = pagination.querySelect("a");
    const hrefLast = aElements[aElements.length - 1].getAttribute("href");
    const split = hrefLast.split("pid=");
    return split[split.length - 1];
}

function processTags(tags) {
    return tags.split(" ").join("+");
}

// fetchSafebooru("akiyama_mizuki 1girl").then((url) => {
//     console.log(url);
// });

fetchMaxPID("akiyama_mizuki").then((maxPID) => {
    console.log(maxPID);
});

// export default fetchSafebooru;
