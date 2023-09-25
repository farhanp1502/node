const { error } = require('console');
const fs = require('fs');

const first = fs.readFileSync('./content/first.txt','utf8');
const second = fs.readFileSync('./content/second.txt','utf8');

// console.log(first,second);

fs.writeFileSync(
  './content/result.txt',
  `here is resultant file : ${first} , ${second}`,
  // // using this flag we can just append te file not to override it.
  // { flag :'a'} 
)

fs.readFile('./content/first.txt','utf8',(error,result)=>{
  if(error){
    console.log(error);
    return;
  }
const first = result;
fs.readFile('./content/second.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  const second = result;
  fs.writeFile('./content/result.txt',
  `here is the resultant file : ${first} , ${second}`
  ,(err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
  }
  )
})
})