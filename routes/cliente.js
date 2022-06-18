const router = require('express').Router()
const Cliente   = require('../models/cliente')
const bcrypt  = require('bcryptjs')
const  {validationLogin,  validationRegister, validationUpdate} = require('./validationCliente')
const path = require('path')
const multer = require('multer')



router.get('/get', async (req,res)=>{
    try {
        const allclients= await Cliente.find()
        res.json(allclients)
    } catch (error) {
        res.json(error)
    } 
})


router.post('/register', async (req,res)=>{

    const {error} = validationRegister(req.body)

    if(error){
        res.json({message: error.details[0].message})
    }else{

        const salt  = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(req.body.senha, salt)

        function imgValue(){
            if(!req.body.img){
                return 'user.png'
            }else{
                return req.body.img
            }
        }

        const clienteObj = new Cliente({
            img: imgValue(),
            nome: req.body.nome,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
            senha: hashedpassword
        })

        const telefoneExist = await Cliente.findOne({telefone: req.body.telefone})


        if(telefoneExist){
            res.json({message: 'Número do telefone já existe'})
        }else{
            try {
                const savedCliente = await clienteObj.save()
                res.json({cliente: savedCliente})
            } catch (error) {
                res.json({message: error})
            }
        }

    }

    
})


router.delete('/delete', async (req,res)=>{

    const id = req.body.id

    try {
        const removedCliente = await Cliente.findOneAndRemove({_id: id})
        res.json(removedCliente)
    } catch (error) {
        res.json(error)
    }
})


router.post('/getOne',  async (req,res)=>{
    
    const id = req.body.id

    if(id){
            try {

            const clienteEnc = await Cliente.findOne({_id: id})
            
            if(clienteEnc){
                res.json(clienteEnc)
            }else{
                res.json({message: 'Utilizador não encontrado'})
            }
            
        } catch (error) {
            console.log(error)
        }
    }else{
        res.json({message: 'id vazio'})
    }

    

})


router.patch('/update',  async (req,res)=>{


    const {error}  = validationUpdate(req.body)

    if(error){
        res.json({message: error.details[0].message});
        
    }else{
        

        const user  = {
            id: req.body.id,
            senha: req.body.senha
        }

        const userobj = {
            nome: req.body.nome,
            telefone:req.body.telefone,
            endereco: req.body.endereco
        }

        const userExist = await Cliente.findOne({_id: user.id})

        if(userExist){

            const validaUser = await  bcrypt.compare(user.senha, userExist.senha)

            if(validaUser){

                const updatedUser = await Cliente.findOneAndUpdate({_id: userExist.id}, {nome: userobj.nome, telefone: userobj.telefone, endereco: userobj.endereco} )

                res.json(updatedUser)

            }else{
                res.json({message: 'Não tem permissão para actualizar os dados'})
            }

        }else{
            res.json({message: 'Utilizador não existe'})
        }
 
    }

})


router.post('/login',  async (req,res)=>{
    

    const {error} = validationLogin(req.body)

    if(error){
        res.json({message: error.details[0].message})
    }else{

    

        const cliente = {
            telefone: req.body.telefone,
            senha: req.body.senha
        }

        try {

            const clienteEnc = await Cliente.findOne({telefone: cliente.telefone})

            if(clienteEnc){
            
                const validUser = await bcrypt.compare(cliente.senha, clienteEnc.senha)

                if(validUser){
                    res.json({cliente: clienteEnc})
                } else{
                    res.json({message: 'Utilizador não encontrado'})
                }

            }else{
                res.json({message: 'Utilizador não encontrado'})
            }

        } catch (error) {
            res.json({message: erro})
        }

    }


})

router.post('/uploadPhoto/:userid', async (req,res)=>{
    try {

        const storage = multer.diskStorage({
            destination: '../cliente/public/img/avatar',
            filename: (req,file, cb)=>{

                cb(null, req.params.userid+path.extname(file.originalname))

                try {
                    const updatedCliente  =   Cliente.findOneAndUpdate({_id:req.params.userid}, {img: (req.params.userid+path.extname(file.originalname))})
                    console.log(req.params.userid+path.extname(file.originalname))
                }catch (err){
                        console.log(err)
                    }
              
            }

        })

        const upload  = multer({
            storage:storage,
            limits: {fileSize:1000000}
        }).single('myimage')


        upload(req,res, (err)=>{
            console.log({file:req.body})
            res.json({file:req.body})
        })


    } catch (error) {
        console.log(error)
    }
} )


module.exports  = router