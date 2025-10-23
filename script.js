const navEntries = performance.getEntriesByType("navigation");
const isReload = navEntries.length > 0 && navEntries[0].type === "reload";


if (isReload) {

    var image1random = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img1").setAttribute("src" , "images/dice" + image1random+".png");

    var image2random = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img2").setAttribute("src" , "images/dice" + image2random+".png");

    if(image1random > image2random) {
        document.querySelector("h1").textContent = "Player 1 Wins! 🏆";
    } else if (image2random > image1random) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🥇";
    } else {
        document.querySelector("h1").textContent = "Draw! 🤝";
    }
}