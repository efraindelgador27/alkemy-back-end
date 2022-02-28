const validator = require('validator');

const validar=(email,pass,confirmPass)=>{
    const V_CONFIG={
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1, 
        minNumbers: 1, 
        minSymbols: 1, 
        returnScore:false,     
    };

    const validateData={
        // "tu contraseña daba tener al menos 10 caracteres, numeros mayusculas minusculas y al menos 1 caracter especial"
        isValidEmail:validator.isEmail(email,{ignore_max_length:false}),
        isSecurePass:validator.isStrongPassword(pass,V_CONFIG),
        isIcualPass:pass===confirmPass
    }

    return validateData;
}

module.exports=validar;
