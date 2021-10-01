
const stream = require('fs') 


var readStream = stream.createReadStream('./data.txt');
var mystring = '';
readStream.on('data', chunk => {
  console.log('---------------------------------');
  console.log(chunk);
  mystring += chunk.toString();
  console.log('---------------------------------');
});

readStream.on('open', () => {
  console.log('Stream opened...');
});

readStream.on('end', () => {
  console.log('Stream Closed...',mystring);
});