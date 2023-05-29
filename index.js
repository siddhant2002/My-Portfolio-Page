const links = document.getElementsByClassName("tab-links");
const contents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) =>{
    for(link of links)
    {
        link.classList.remove("active-links");
    }
    for(content of contents)
    {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
};