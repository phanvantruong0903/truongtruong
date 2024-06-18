const moongoose = require('mongoose')

const RequestSchemea = moongoose.Schema(
    {
        firstName:{
            type: String
        },
        lastName:{
            type: String
        },
        email : {
            type: String
        },
        contact : {
            type: String 
        },
        address1 : {
            type : String 
        },
        date : {
            type : Date,
            default: function() {
                let currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + 7);
                return currentDate;
              }
        },
        status : {
            type : Number,
            default : 1
        }
    })

    const Request = moongoose.model("request",RequestSchemea)

    module.exports = Request;