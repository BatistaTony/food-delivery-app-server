const express = require('express')

const app = express()

require('./database')
app.use(express.json())


app.use('/user', require('./routes/user'))
app.use('/pizza', require('./routes/pizza'))
app.use('/cart', require('./routes/carrinho'))
app.use('/cliente', require('./routes/cliente'))

app.listen(5000, ()=>{
    console.log('Server is running on port 5000....')
})