#include <stdlib.h>

#ifdef __cplusplus
extern "C" {
#endif

size_t
strlen(const char *str)
{
  const char *s;
  for (s = str; *s; ++s);
  return (s - str);
}

#ifdef __cplusplus
}
#endif

