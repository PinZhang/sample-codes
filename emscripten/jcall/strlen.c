#include <stdio.h>
#include <emscripten.h>

#ifdef __cplusplus
extern "C" {
#endif

extern int js_strlen(const char* str);

int main() {
  const char* str = "string for testing";
  int len = js_strlen(str);
  printf("The length of %s is %d.\n", str, len);

  EM_ASM(
    console.log('Print message from C.');
  );
}

#ifdef __cplusplus
}
#endif

