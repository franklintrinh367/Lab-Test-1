const fs = require('fs');
const p = require('path');

const removeLog = (count) =>{
    for(i=0; i< count; i++)
    {
        let path = __dirname + "\\" + `log${i}.txt`;
        fs.unlinkSync(path, err => {
            if (err) console.log(err)
        })
        console.log("delete files..." + `log${i}`);
    }
}

const createLog = (count) => {
    for(i=0; i< count; i++)
    {
        fs.writeFile(`log${i}.txt`, "I got some text here", 
        err => {
            if(err) console.log(err);
        }
        );
        console.log(`log${i}.txt`);
    }
}

createLog(10);
removeLog(10);
