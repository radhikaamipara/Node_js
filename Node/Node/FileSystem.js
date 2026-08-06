//import or require file system module
/*
1. 
*/

const fs = require('fs');
const data = "Hello world"

/* 1.Write a File
const fs = require('fs');

fs.writeFile("myfile.txt","HELLO WORLD",(err) => 
{
    if (err) throw err;
    console.log("File has been written");
});
*/

/*
const fs = require('fs');
const data = "Hello world"

fs.writeFile("myfile.txt",data,(err) => 
{
    if (err) {
        console.log('Error wiring file',err);
    }
    else {
        console.log("File has been written");
    }
});
*/



//2.Read a File


/*
const fs = require('fs');
const data = "Hello world"
fs.writeFile("myfile.txt",data,(err) => 
{
    if (err) throw err;
    console.log("File has been written");
});

fs.readFile("file.txt","utf8",(err,data) => 
{
    if(err) {
        console.log("Error Reading File", err);
        return;
    }
    console.log("File Contents:", data);
});
*/

//Write file using writeFileSync method
/*
fs.writeFileSync('myfile.txt',data,(err) =>
{
    if(err) {
        console.log("Error Writing file",err);
        return;
    }
    console.log('File has been written synchronously');
});

//Write file using writeFileSync method

const FileContents = fs.readFileSync("myfile.txt",'utf8');
console.log("File Contents:",FileContents);
*/

//Append data to a file using appendFile method

/*fs.appendFile("myfile.txt","\nThis is an append method",(err) => 
{
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log('File has been append Successfully');
});

const FileContents = fs.readFileSync("myfile.txt",'utf8');
console.log("File Contents:",FileContents);
*/

//appendFileSync method
fs.appendFileSync("myfile.txt","\nThis is an Asynchronous method for append");
console.log('File has been append Successfully');



//Delete a file using unlink method
//asynchronous method to delete file - unblocking
//syntax : fs.unlink(path,callback)
/*fs.unlink("myfile.txt",(err) => {
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log("File Deleted Successfully");
});*/


//unlinkSync method
//synchronous method to delete a file - blocking
//syntax : fs.unlinkSync(path)
/*
fs.unlinkSync("myfile.txt");
console.log("File Deleted Successfully");
*/


//Rename a file using rename method - Asynchronous method
//Syntax : fs.rename(oldpath, newpath, callback);
/*fs.rename("myfile.txt","file.txt",(err) => {
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log("File Rename Successfully");
})
*/

//renameSync - synchronous method to rename a file - blocking
//Syntax : fs.rename(oldpath, newpath);
/*
fs.renameSync("file.txt","Demo.txt");
console.log("File Rename Successfully");
*/


//stats - Asynchronous method to get file statistic
//syntax: sf.stats(path,callback)
/*
fs.stat("myfile.txt",(err) => {
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log("File Stat Successfully");
});
*/

//Synchronous
/*fs.statSync("myfile.txt");
console.log("File Stat Successfully");
*/

//mkdir - Asynchronous method to create a directory
//syntax: fs.mkdir(path,options,callback)
/*
fs.mkdir('mydir',{recursive:false},(err) => {
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log("Directory has been created");
});
*/

//mkdirSync -  Synchronous method to create a directory
//syntax: fs.mkdirSync(path,options)
/*
fs.mkdirSync("demo",{recursive:true});
console.log("Directory has been created");
*/

//rmdir - Asynchronous method to remove a directory
//syntax: fs.rmdir(path);
/*
fs.rmdir("mydir",(err) => {
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log("Directory has been deleted");
});
*/

//rmdirSync - Synchronous method to remove a directory

/*fs.rmdirSync("demo");
console.log("Directory has been deleted");
*/


//readdir - Asynchronous method
//syntax: fs.readdir(path,options,callback)

const files = fs.readdir("demo",(err) => {
    if(err)
    {
        console.log("Error Writing file",err);
        return;
    }
    console.log("Directory contents",files);
});


const files1 = fs.readdirSync("demo");
console.log("Directory contents",files1);