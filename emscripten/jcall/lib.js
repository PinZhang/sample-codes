mergeInto(LibraryManager.library, {
  js_strlen: function(str) {
    return Pointer_stringify(str).length;
  },

  js_completion: function(str) {
    if ('comple' == Pointer_stringify(str)) {
      // Allocate space for string and extra '0' at the end
      var completion = 'completion';
      var buffer = Module._malloc(completion.length+1);
      Module.writeStringToMemory(completion, buffer);
      return buffer;
    }
    return '';
  }
});

