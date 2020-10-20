const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
      });

       //VALIDATE THE DATA
    return schema.validate(data);

    
}

//Login validation
const loginValidation = (data) => {
    const schemaLogin = Joi.object({
      
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
      });

       //VALIDATE THE DATA
    return schemaLogin.validate(data);

    
}




module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;