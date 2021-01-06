const getTeachers = require('../app');


const get_teachers_old_schedule = async (req,res)=>{

    try{
        
        // console.log(someClasses.someclassess);
        res.send({status:true,payload:getTeachers.teachers})
            
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error occurred"});
    }
};

module.exports = get_teachers_old_schedule;