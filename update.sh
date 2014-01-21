## Copy static sass file needed before rake gather asset 
SASS_DIR="/edx/app/edxapp/edx-platform/lms/static/sass"

cmd="sudo -u edxapp cp $PWD/static/sass/* $SASS_DIR/ "
echo $cmd
$cmd

cmd="sudo -u edxapp bash compile-asset.sh"
echo $cmd
$cmd