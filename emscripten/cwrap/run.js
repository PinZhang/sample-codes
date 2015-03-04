console.log("Test cwrap.");

int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
console.log('_int_sqrt(9) = ' + int_sqrt(9));

