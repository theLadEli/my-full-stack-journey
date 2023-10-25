const fs = require("fs");

fs.readFile('C:/Users/cohen/Documents/GitHub/my-full-stack-journey/JavaScript/2.2 Native Modules/message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });