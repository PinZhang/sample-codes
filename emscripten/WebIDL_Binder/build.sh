EMCC=$(which emcc)
EMCC_ROOT=$(dirname $EMCC)
WEBIDL_BINDER=$EMCC_ROOT/tools/webidl_binder.py

echo "Build glue code from webidl"
python $WEBIDL_BINDER foobar.webidl glue

echo "Compile project"
emcc foobar.cpp foobar_glue_wrapper.cpp --post-js glue.js --post-js post.js

