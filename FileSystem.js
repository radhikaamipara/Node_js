//File System

const rd  = require("fs");
const { json } = require("stream/consumers");

//write a file
//writeFile(filename, data, callback)
rd.writeFile("myfile.txt","Hello MCA!", (err)=>{
    if (err) throw err;
    console.log("File has been written");
});


//Second method
//otherwise you can create object so JSON.stringify(data) hat can be used
const data = "Hello Guys"
rd.writeFile("myfile.txt",data, (err)=>{
    if (err){
        console.group("Error Writting File",err);
        return;    
    }
    console.log("File has been written");
});

//Read A file
rd.readFile("myfile.txt","utf8",(err,data)=>{
    if (err){
        console.group("Error reading File",err);
        return;    
    }
    console.log("File content",data);
});


//write file using writeFileSync method
rd.writeFileSync("myfile.txt",data, (err)=>{
    if (err){
        console.group("Error reading File",err);
        return;    
    }
    console.log("File has been written synchronously");
});


//read file using readFileSync method
rd.readFileSync("myfile.txt","utf8",(err,data)=>{
    if (err){
        console.group("Error reading File",err);
        return;    
    }
    console.log("File content",data);
});

//Append Data to a file using appendFile Method
rd.appendFile("myfile.txt","\nThis is an appended  \nHello MCA!",(err)=>{
    if (err){
        console.group("File appending file",err);
        return;    
    }
    console.log("File has benn appended");
});

rd.readFile("myfile.txt","utf8",(err,data)=>{
    if (err){
        console.group("Error reading File",err);
        return;    
    }
    console.log("File content",data);
});
