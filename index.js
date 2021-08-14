var log = args => console.log(...args)

var cake = document.querySelector(".cake")
var fireworks = document.querySelector(".wrap")
var fire = [...document.querySelector(".velas").querySelectorAll(".fuego")]
cake.onclick = e => {
    cake.classList.toggle("off");
    fire.map(f => f.classList.toggle("hidden"))
fireworks.classList.toggle("hidden")

document.querySelector("body").classList.toggle("night")
document.querySelector("#layers").classList.toggle("hidden")
document.querySelector(".spotify").classList.toggle("on")


    // if (cake.classList.contains("off")) {
    //     console.log(e)
    //     fire.map()

    // }
}
console.log(cake)

// <div class="velas">
//     <div class="fuego"></div>
//     <div class="fuego"></div>
//     <div class="fuego"></div>
//     <div class="fuego"></div>
//     <div class="fuego"></div>
//   </div>



