console.log("Test cwrap.");

var int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
console.log('_int_sqrt(9) = ' + int_sqrt(9));

console.log("Counting string length");
var strlen = Module.cwrap('strlen', 'number', ['string']);
var str = 'Test string';
console.log('The length of "' + str + '" is ' + strlen(str));

console.log("Test ccall.");
console.log('_int_sqrt(9) = ' + Module.ccall('int_sqrt', 'number', ['number'], [9]));

console.log('Test direct call.');
console.log('_int_sqrt(9) = ' + _int_sqrt(9));
var stack = Runtime.stackSave();
var ptr = allocate(intArrayFromString(str), 'i8', ALLOC_STACK);
console.log('The length of "' + str + '" is ' + _strlen(ptr));
Runtime.stackRestore(stack);

