const nav = document.querySelector("#nav");
const abir = document.querySelector("#abrir");
const cerar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})