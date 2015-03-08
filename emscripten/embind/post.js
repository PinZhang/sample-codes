var a = 11.1;
var b = 22.2;
console.log("cpp_add(" + a + ", " + b + "): " + Module.cpp_add(11.1, 22.2));

var str = "This is test string";
console.log("cpp_strlen('" + str + "'): " + Module.cpp_strlen(str));

var sampleObj = new Module.SampleClassA(100);
console.log("SampleClassA::getValue: " + sampleObj.getValue());
Module.SampleClassA.printSomething()
sampleObj.delete();

var DerivedClassInJS = Module.SampleInterface.extend("SampleInterface", {
  invoke: function() {
    console.log("(DerivedClassInJS::invoke) " + this.getName());
  }
});

var obj = new DerivedClassInJS();
obj.invoke("test");

