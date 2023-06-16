const os = require("os");
const user = os.userInfo();

console.log(user);

console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totoalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOs);
