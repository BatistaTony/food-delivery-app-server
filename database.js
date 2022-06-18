const mongoose  = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

class database {
    constructor(){
        this._connect()
    }

    _connect(){

        mongoose.connect(process.env.DB_STRING,
            { useNewUrlParser: true }, (err)=>{

            if(err) console.log('DB NOT CONNECTED')

            console.log('DB CONNECTED')
        })
    }
}


module.exports  = new database