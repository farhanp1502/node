const os = require('os');

// current user info
const user = os.userInfo()
console.log(user);

// methods return the system time in seconds using uptime
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentos ={
   name:os.type(),
   release:os.release(),
   totalmem:os.totalmem(),
   freemem:os.freemem()
}
console.log(currentos);