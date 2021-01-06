const express = require('express');

const app = express();

const fs = require('fs');
const bodyparser = require("body-parser");
var path = require('path');
var cors = require("cors");
var results = [];
const Languages = ['English','Hindi','Kannada','Maths','Science'];
let allSubjects = [];
let english=[];

const models = require('./models/classModel');

let teachers = {
  English:[],
  Hindi:[],
  Maths:[],
  Science:[],
  Kannada:[]
}
let classes = {
  '6th':models.classSchema(),
  '7th':models.classSchema(),
  '8th':models.classSchema(),
  '9th':models.classSchema(),
  '10th':models.classSchema()
};

var sum=0;

const port = normalizePort(process.env.PORT || '3000');


let app_init = async () => {
     const routes = require("./routes");
        const app = express();
        app.use(cors());
        app.use(bodyparser.json());
      
         app.use(routes);
         app.use(express.static(path.join(__dirname, './dist/totalcloud-ui')));
         app.get('/',function(req,res){
            res.sendFile(path.join(__dirname,"./dist/totalcloud-ui/index.html"));
         });


       for await(let language of Languages){
        fs.readFile(path.join(__dirname, `/csvfiles/Teacher wise class timetable - ${language}.csv`), 'utf8', function (err, data) {
          var dataArray = data.split(/\r?\n/);
          let tempArray=[];
          sum+=1;
          //  console.log(dataArray);
          for(let j=1;j<10;j++){
            let line = dataArray[j].split(",");
            // console.log(line);
             let day = {
              time: line[0],
              Monday: line[1],
              Tuesday: line[2],
              Wednesday: line[3],
              Thursday: line[4],
              Friday: line[5],
              Saturday: line[6]
            }
            tempArray.push(day);

            

          }
          //  console.log(tempArray);
          if(language == 'English'){
            teachers.English = tempArray;
            tempArray = [];
          }
          else if(language== 'Maths'){
            teachers.Maths = tempArray;
            tempArray = [];
          }
          else if(language== 'Science'){
            teachers.Science = tempArray;
            // console.log(teachers.Science);
            tempArray = [];
          }
          else if(language== 'Kannada'){
            teachers.Kannada = tempArray;
            tempArray = [];
          }
          else if(language== 'Hindi'){
            teachers.Hindi = tempArray;
            tempArray = [];
          }
         
          if(sum == 5){
            thisFunction();
          }
        });
        
      }

          function thisFunction (){

            for(let i=0;i<5;i++){
              let data1 = teachers[`${Languages[i]}`];
              //  console.log(data1.length);
              sum+=1;
              for(let j=0;j<9;j++){
                let data = data1[j];
                //  console.log(data);
                let time = data['time'];
    
                if(data['Monday'] !== undefined || data['Monday'] !== "" ){
                  let classData = classes[data['Monday']];
                  if(classData !==undefined){
                    
                   classData.filter( item=>{
                      if(item[`time`]==time){
                        item['Monday'] = `${Languages[i]}`;
                      }
                    });
                  }
                }
                if(data['Tuesday'] !== undefined || data['Tuesday'] !== ""){
                  let classData = classes[data['Tuesday']];
                  if(classData !==undefined){
                    
                   classData.filter( item=>{
                      if(item[`time`]==time){
                        item['Tuesday'] = `${Languages[i]}`;
                      }
                    });
                  }
                }
                if(data['Wednesday'] !== undefined || data['Wednesday'] !== ""){
                  let classData = classes[data['Wednesday']];
                  if(classData !==undefined){
                    
                   classData.filter( item=>{
                      if(item[`time`]==time){
                        item['Wednesday'] = `${Languages[i]}`;
                      }
                    });
                  }
                }
                if(data['Thursday'] !== undefined || data['Thursday'] !== ""){
                  let classData = classes[data['Thursday']];
                  if(classData !==undefined){
                    
                   classData.filter( item=>{
                      if(item[`time`]==time){
                        item['Thursday'] = `${Languages[i]}`;
                      }
                    });
                  }
                }
                if(data['Friday'] !== undefined || data['Friday'] !== ""){
                  let classData = classes[data['Friday']];
                  if(classData !==undefined){
                    
                   classData.filter( item=>{
                      if(item[`time`]==time){
                        item['Friday'] = `${Languages[i]}`;
                      }
                    });
                  }
                }
                if(data['Saturday'] !== undefined || data['Saturday'] !== ""){
                  let classData = classes[data['Saturday']];
                  if(classData !==undefined){
                    
                   classData.filter( item=>{
                      if(item[`time`]==time){
                        item['Saturday'] = `${Languages[i]}`;
                      }
                    });
                  }
              }
            }
        }
      }


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`)
        });

}


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }

}   

app_init();

exports.someclassess = classes;
exports.teachers = teachers;