const teachers_data = require('../app');

const get_teachers = async (req,res) =>{

    try{
        let teachers = JSON.parse(JSON.stringify(teachers_data.teachers)); 
        let classes = JSON.parse(JSON.stringify(teachers_data.someclassess)); 
        const languages = ['English','Hindi','Maths','Science','Kannada'];
        const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
         for(let h=0;h<5;h++){
            for(let i=0;i<6;i++){
                let cls = ['6th','7th','8th','9th','10th'];
                for(let j=0;j<9;j++){
                    // console.log(teachers.English[j][`${days[i]}`]);
                    if( languages[h]=='English' && teachers.English[j][`${days[i]}`]==''){
                        // console.log('entered');
                        let randomClass = Math.floor(Math.random() * cls.length); 
                        teachers.English[j][`${days[i]}`] = cls[randomClass];
                        if(classes[`${cls[randomClass]}`][j][`${days[i]}`] == undefined || classes[`${cls[randomClass]}`][j][`${days[i]}`] ==''){
                            classes[`${cls[randomClass]}`][j][`${days[i]}`] = 'English';
                            
                        }
                        // console.log(classes[`${cls[randomClass]}`][j][`${days[i]}`]);
                        cls.splice(randomClass,1);
                    }
                   else if( languages[h]=='Hindi' && teachers.Hindi[j][`${days[i]}`]==''){
                        let randomClass = Math.floor(Math.random() * cls.length); 
                        teachers.Hindi[j][`${days[i]}`] = cls[randomClass];
                        if(classes[`${cls[randomClass]}`][j][`${days[i]}`] == undefined || classes[`${cls[randomClass]}`][j][`${days[i]}`] ==''){
                            classes[`${cls[randomClass]}`][j][`${days[i]}`] = 'Hindi';
                        }
                        // console.log(classes[`${cls[randomClass]}`][j][`${days[i]}`]);
                        cls.splice(randomClass,1);
                    }
                    else if( languages[h]=='Kannada' && teachers.Kannada[j][`${days[i]}`]==''){
                        let randomClass = Math.floor(Math.random() * cls.length); 
                        teachers.Kannada[j][`${days[i]}`] = cls[randomClass];
                        if(classes[`${cls[randomClass]}`][j][`${days[i]}`] == undefined || classes[`${cls[randomClass]}`][j][`${days[i]}`] ==''){
                            classes[`${cls[randomClass]}`][j][`${days[i]}`] = 'Kannada';
                        }
                        cls.splice(randomClass,1);
                    }
                    else if( languages[h]=='Maths' && teachers.Maths[j][`${days[i]}`]==''){
                        let randomClass = Math.floor(Math.random() * cls.length); 
                        teachers.Maths[j][`${days[i]}`] = cls[randomClass];
                        if(classes[`${cls[randomClass]}`][j][`${days[i]}`] == undefined || classes[`${cls[randomClass]}`][j][`${days[i]}`] ==''){
                            classes[`${cls[randomClass]}`][j][`${days[i]}`] = 'Maths';
                        }
                        cls.splice(randomClass,1);
                    }
                    else if( languages[h]=='Science' && teachers.Science[j][`${days[i]}`]==''){
                        let randomClass = Math.floor(Math.random() * cls.length); 
                        teachers.Science[j][`${days[i]}`] = cls[randomClass];
                        if(classes[`${cls[randomClass]}`][j][`${days[i]}`] == undefined || classes[`${cls[randomClass]}`][j][`${days[i]}`] ==''){
                            classes[`${cls[randomClass]}`][j][`${days[i]}`] = 'Science';
                        }
                        cls.splice(randomClass,1);
                    }
                }
            }
        }
         

       res.send({status:true,payload:{teachers:teachers,classes:classes}});
          


    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}


module.exports = get_teachers;