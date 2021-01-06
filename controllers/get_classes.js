const someClasses = require('../app');


const get_classes = async (req,res)=>{

    try{
        
        // console.log(someClasses.someclassess);
        res.send({status:true,payload:someClasses.someclassess})
            
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error occurred"});
    }
};

module.exports = get_classes;