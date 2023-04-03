const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("container").style.backgroundColor = "#" + randomColor;
    document.getElementById("container").style.boxShadow = "0px 0px 40px #" + randomColor + "82";
    color.innerHTML = "#" + randomColor;
    document.getElementById("dot1").style.backgroundColor = "#" + randomColor + "12";
    document.getElementById("dot2").style.backgroundColor = "#" + randomColor + "92";
    document.getElementById("dot3").style.backgroundColor = "#" + randomColor + "52";
    document.getElementById("dot4").style.backgroundColor = "#" + randomColor + "42";
    document.getElementById("dot5").style.backgroundColor = "#" + randomColor + "22";
    document.getElementById("dot6").style.backgroundColor = "#" + randomColor + "92";
}
genNew.addEventListener("click", setBg);
setBg();
