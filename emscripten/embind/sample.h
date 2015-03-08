#include <string>

float cpp_add(float a, float b);

size_t cpp_strlen(std::string str);

class SampleClassA {
private:
  int value;

public:
  SampleClassA(int aValue);

  void setValue(int aValue);
  int getValue();

  static void printSomething();
};

class SampleInterface {
private:
  std::string name = "Sample Interface Name";

public:
  const std::string getName();
  virtual void invoke(const std::string& str) = 0;
};


