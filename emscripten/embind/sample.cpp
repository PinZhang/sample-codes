#include <stdio.h>
#include "sample.h"

float
cpp_add(float a, float b)
{
  return a + b;
}

size_t
cpp_strlen(std::string str)
{
  return str.length();
}

SampleClassA::SampleClassA(int aValue) : value(aValue) {
}

void
SampleClassA::setValue(int aValue) {
  value = aValue;
}

int
SampleClassA::getValue() {
  return value;
}

// static
void
SampleClassA::printSomething() {
  printf("SampleClassA::printValue\n");
}

const
std::string
SampleInterface::getName() {
  return name;
}

