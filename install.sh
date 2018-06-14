#!/bin/sh
# prerequisites
sudo apt install git
sudo apt install curl unzip tar
sudo apt install nodejs
curl -o- -L https://yarnpkg.com/install.sh | bash
sudo apt install libgconf-2-4
# install and build tool itself
yarn install
yarn build
# download browsers that are tested
cd browsers/
./download-and-extract.sh
cd ..