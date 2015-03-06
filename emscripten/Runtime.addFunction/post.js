var newFunctionPtr = Runtime.addFunction(function(num) {
    Module.print('Hello ' + num + ' from JS!');
});

Module.callMain([newFunctionPtr.toString()]);

