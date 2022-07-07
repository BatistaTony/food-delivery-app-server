// import joi from '@hapi/joi'

// const validationLogin = (data: any) => {
//   const schema = {
//     telefone: joi.string().max(12).min(9).required(),
//     senha: joi.string().max(8).min(6).required(),
//   }

//   return joi.validate(data, schema)
// }

// const validationRegister = (data: any) => {
//   const schema = {
//     nome: joi.string().max(25).min(6).required(),
//     telefone: joi.string().max(12).min(9).required(),
//     endereco: joi.string().max(20).min(15).required(),
//     senha: joi.string().max(8).min(6).required(),
//   }

//   return joi.validate(data, schema)
// }

// const validationUpdate = (data: any) => {
//   const schema = {
//     id: joi.string().required(),
//     nome: joi.string().max(25).min(6).required(),
//     telefone: joi.string().max(12).min(9).required(),
//     endereco: joi.string().max(50).min(15).required(),
//     senha: joi.string().max(8).min(6).required(),
//   }

//   return joi.validate(data, schema)
// }

// export { validationLogin, validationUpdate, validationRegister }
