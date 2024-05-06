const form = document.getElementById("form");
const button = document.getElementById("submitbutton");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const ingresesucorreoelectronico = document.getElementById("ingresesucorreoelectronico");
const opciones = document.getElementById("opciones");
const imagen = document.getElementById("imagen");
const comentarios = document.getElementById("comentarios");
const terms = document.getElementById("terms");

const formIsValid = {
    nombre: false,
    apellido: false,
    ingresesucorreoelectronico: false,
    opciones: false,
    imagen: false,
    comentarios: false,
    terms: false,
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    Validate();
});

nombre.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formIsValid.nombre = true;
});

apellido.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formIsValid.apellido = true;
});

ingresesucorreoelectronico.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formIsValid.ingresesucorreoelectronico = true;
});

opciones.addEventListener("change", (e) => {
    if (e.target.value.length > 0) formIsValid.opciones = true;
});

imagen.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        formIsValid.imagen = true;
    } else {
        formIsValid.imagen = false;
    }
});

comentarios.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formIsValid.comentarios = true;
});

terms.addEventListener("change", (e) => {
    formIsValid.terms = e.target.checked;
    e.target.checked ? button.removeAttribute("disabled") : button.setAttribute("disabled", true);
});

const Validate = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex((value) => value == false);
    if (valid == -1) {
        form.submit();
        alert("Formulario enviado con éxito");
    } else {
        alert("Formulario inválido");
    }
};






