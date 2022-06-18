const joi = require('@hapi/joi')

const registerValidation = (data)=>{
    const schema = {
        nome: joi.string().min(7).max(35).required(),
        email: joi.string().min(10).max(35).email().required(),
        senha: joi.string().min(6).max(10).required()
    }

    return joi.validate(data, schema)
}


const loginValidation  = (data) =>{
    const schema = {
        email: joi.string().min(10).max(35).email().required(),
        senha: joi.string().min(6).max(10).required()
    }

    return joi.validate(data, schema)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation