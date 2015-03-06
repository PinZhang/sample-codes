#include "foobar.h"
#include <stdio.h>

void
Foo::setValue(int aValue) {
  value = aValue;
}

int
Foo::getValue() {
  return value;
}

Bar::Bar(long aValue) : value(aValue) {
}

void
Bar::doSomething() {
  printf("From Bar::doSomething, the value is %ld.\n", value);
}

