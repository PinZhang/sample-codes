emcc int_sqrt.c strlen.c -s EXPORTED_FUNCTIONS="['_int_sqrt', '_strlen']" --post-js run.js
