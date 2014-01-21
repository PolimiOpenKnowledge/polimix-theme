#! /bin/bash

source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platformv

echo "Compile assets manually"
rake lms:gather_assets:aws

exit
