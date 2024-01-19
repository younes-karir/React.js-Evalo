const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.fname = !isEmpty(data.fname) ? data.fname : '';
    data.lname = !isEmpty(data.lname) ? data.lname : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.fname, { min: 2, max: 30 })) {
        errors.fname = 'Prénom doit comporter entre 2 et 30 caractères';
    }

    if(!Validator.isLength(data.lname, { min: 2, max: 30 })) {
        errors.lname = 'Nom doit comporter entre 2 et 30 caractères';
    }
    
    if(Validator.isEmpty(data.fname)) {
        errors.fname = 'Prénom est obligatoire';
        console.log(data.fname)
    }

    if(Validator.isEmpty(data.lname)) {
        errors.lname = 'Nom est obligatoire';
        console.log(data.lname)
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email est invalide';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email est obligatoire';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Mot de passe doit avoir 6 caractères';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Mot de passe est obligatoire';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Mot de passe (*) doit avoir 6 caractères';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Mdp et la confirmation doivent correspondre';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Mot de passe (*) est obligatoire';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}