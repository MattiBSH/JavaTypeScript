var os = require('os');
let obj={platform:os.platform(),osType:os.type(),memFree: os.freemem(),totalMem:os.totalmem(),EOL:os.EOL};
exports.module = obj;