const moongoose = require('mongoose')

const ServiceSchemea = moongoose.Schema(
    {
        Name:{
            type: String
        },
        Price:{
            type: Number
        },
        email : {
            type: String
        },
        time : {
            type : Number,
        },
        status : {
            type : Boolean,
            default : false
        }
    })

    const Service = moongoose.model("service",ServiceSchemea)

    module.exports = Service;