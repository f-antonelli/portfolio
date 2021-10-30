import formValidation from "./js/form_validation.js";
import hamburgerMenu from "./js/menu_burger.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    formValidation(".contact-form");
});