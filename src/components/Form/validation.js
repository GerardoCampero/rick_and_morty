const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/;

export const validation = (data) => {
    const errors = {};

    if(!regexEmail.test(data.email)) errors.email = 'Debe ingresar un Email';
    if(!data.email) errors.email = 'Este campo es requerido';
    if(data.email.length > 35) errors.email = 'El email no puede tener mas de 35 caracteres';
    if(!regexPassword.test(data.password)) errors.password = 'La contraseña debe tener caracteres, números y tener entre 6 y 10 caracteres';
    // if(data.password.length > 6 || data.password)

    return errors
};