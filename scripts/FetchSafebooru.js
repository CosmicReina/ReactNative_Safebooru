async function fetchMaxPID() {
    const {JSDOM} = require("jsdom");

    const url = "https://safebooru.org/index.php?page=post&s=list&tags=all";
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
