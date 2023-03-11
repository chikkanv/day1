const fs = require('fs');
// const path = require('path');

// fs.readFile('./learn.txt', function(err,fileData)
// {
// if(err){
//     console.log(err)

// }
// else{
//     console.log(fileData.toString())
// }
// })

// reading simple files

fs.readFile('./json/user.json', function(err,jsonData)
{
if(err){
    console.log(err)
}else{  
    const user = JSON.parse(jsonData)

    console.table(user)
    console.log(user.desgination)
}
})