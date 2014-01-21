## Copy static sass file needed before rake gather asset 
SASS_DIR="/edx/app/edxapp/edx-platform/lms/static/sass"

cmd="sudo -u edxapp cp $PWD/static/sass/css/* SASS_DIR/ "
echo $cmd
$cmd

echo "Compile assets manually"
sudo -u edxapp bash
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
rake lms:gather_assets:aws
