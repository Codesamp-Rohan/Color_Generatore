const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("container").style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
genNew.addEventListener("click", setBg);
setBg();