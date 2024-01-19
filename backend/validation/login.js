const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email est invalide';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email est obligatoire';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Mot de passe doit avoir 6 caractère';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Mot de passe est obligatoire';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}