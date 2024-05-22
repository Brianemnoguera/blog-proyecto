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
    formIsValid.nombre = /^[a-zA-Z]+$/.test(e.target.value.trim());
});

apellido.addEventListener("change", (e) => {
    formIsValid.apellido = /^[a-zA-Z]+$/.test(e.target.value.trim());
});

ingresesucorreoelectronico.addEventListener("change", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    formIsValid.ingresesucorreoelectronico = emailRegex.test(e.target.value.trim());
});

opciones.addEventListener("change", (e) => {
    formIsValid.opciones = e.target.value.trim().length > 0;
});

imagen.addEventListener("change", (e) => {
    formIsValid.imagen = e.target.files.length > 0;
});

comentarios.addEventListener("change", (e) => {
    formIsValid.comentarios = e.target.value.trim().length > 0;
});

terms.addEventListener("change", (e) => {
    formIsValid.terms = e.target.checked;
    button.disabled = !e.target.checked;
});

const Validate = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.every(value => value === true);
    if (valid) {
        form.submit();
        alert("Formulario enviado con éxito");
    } else {
        alert("Por favor, complete todos los campos correctamente");
    }
};
