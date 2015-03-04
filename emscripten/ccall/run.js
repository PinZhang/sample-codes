console.log("Test ccall.");

console.log('_int_sqrt(9) = ' + Module.ccall('int_sqrt', 'number', ['number'], [9]));

