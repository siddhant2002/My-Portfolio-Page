const links = document.getElementsByClassName("tab-links");
const contents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
    for (link of links) {
        link.classList.remove("active-links");
    }
    for (content of contents) {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
};

const menu = document.getElementsByClassName("menu");

open = () => {
    menu.style.right = "0";
}

close = () => {
    menu.style.right = "-200px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbxeBhyUmm1x0ERh5caJyk1p6HSwtNcT_tWoihdQWqS0CYUY3D1lKjP7_t2gKRPuAFOF/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = "";
                },4000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
    })