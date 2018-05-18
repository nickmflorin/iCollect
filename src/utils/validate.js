import { FormError, Errors } from './errors'

export function isEmpty(str) {
    return (!str || 0 === str.length);
}

export function validateString(value, field, strict=false){
    var err = null;
    if(isEmpty(value)){
        err = new FormError(field, 'missing')
    }
    if(strict && err){
        throw err;
    }
    return err;
}

export function validateStrings(data, strict=false){
    let errors = new Errors([]);
    Object.keys(data).forEach(function(field){
        var err = validateString(data[field], field, strict=strict)
        errors.add(err)
    })
    return errors.collect()
}

export function validateEmail(email, strict=false) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var err = null;

    var err = validateString(email, 'email', strict=strict);
    if(!err){
        if(!filter.test(email)){
            err = new FormError('email', 'invalid')
            if(strict && err){
                throw err;
            }
        }
    }
    return err 
}

export function validatePassword(password, strict=false) {
    var err = validateString(password, 'password', strict=strict);
    if(!err){
        if (password.length <= 6){
            err = new FormError('password', 'invalid', message = 'Password must be at least 6 characters')
            if(strict && err){
                throw err;
            }
        }
    }
    return err 
}

export function confirmPassword(c_password, password) {
    var err = null;

    if (c_password !== password){
        err = new FormError('password', 'invalid', message='The passwords do not match.')
    }
    if(strict && err){
        throw err;
    }
    return err 
}

export function validateForm(fields) {
    let errors = new Errors([]);

    Object.keys(fields).forEach((field) => {
        var { type, value } = fields[field];
        if (isEmpty(value)){
            var err = new FormError(field, 'missing')
            errors.add(err)
        }
        else{
            if (type === "email") {
                var err = validateEmail(value)
                errors.add(err)
            }
            else if (type === "password") {
                var err = validatePassword(value)
                errors.add(err)
            }
            else if (type === "confirm_password") {
                var err = confirmPassword(value, fields["password"].value)
                errors.add(err)
            }
        }
    });
    return errors.collect()
}