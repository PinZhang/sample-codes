mergeInto(LibraryManager.library, {
  js_strlen: function(str) {
    return Pointer_stringify(str).length;
  }
});

