#include <stdio.h>
#include <stdlib.h>
#include <emscripten.h>

#ifdef __cplusplus
extern "C" {
#endif

extern int js_strlen(const char* str);

extern char* js_completion(const char* str);

int main() {
  const char* str = "string for testing";
  int len = js_strlen(str);
  printf("The length of '%s' is %d.\n", str, len);

  EM_ASM(
    console.log('Print message from C.');
  );

  // Access string generated in JS.
  const char* tmp = "comple";
  char* completion = js_completion(tmp);
  printf("The completion of '%s' is %s.\n", tmp, completion);
  free(completion);
}

#ifdef __cplusplus
}
#endif

