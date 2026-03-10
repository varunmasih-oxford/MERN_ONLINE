let fs = require("fs");
let file_name = "demo.txt"
let unicode = "utf-8"



// Read files
// fs.readFile(file_name,unicode,(e,data)=>{

//     e?console.log(e):console.log(data);
    
    
//     // if(e){
//     //     console.log(e); 
//     // }
//     // console.log(data);
    
// });

// Create files

file_name = "new_file_ceated.txt"
data = "Write the text to store in the new file here."

fs.writeFileSync(file_name,data,(e)=>{
    e?console.log(e):console.log("file created..!");    
});



// write files
data_to_write = "write the new data to overwrite the existing file."
fs.writeFileSync(file_name,data_to_write,(e)=>{
    e?console.log(e):console.log("file is overwrite..!");    
});

// update files
text_to_append = "\nthis is a new line added in the existing text"
// fs.appendFile(file_name,text_to_append,(e)=>{
//     e?console.log(e):console.log("New Text is added..!");    
// });

// delete files
// fs.unlink(file_name,(e)=>{
//     e?console.log(e):console.log("file is removed successfully...!");
// });

