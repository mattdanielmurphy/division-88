#!bin/bash

cd src/client
# run react-static build
yarn build
cd ../../

if test -d 'dist'; then
  echo 'Removing existing build...'
  rm -r 'dist'
fi

echo 'Moving new build...'
mv 'src/client/dist' .