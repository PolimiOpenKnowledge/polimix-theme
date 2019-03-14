#! /bin/bash

source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform

echo "Compile assets manually"
rake lms:gather_assets:aws

exit
