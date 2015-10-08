#!/bin/bash
# Environment setup script

set -e # Exit script immediately on first error.

echo "Updating..."
sudo apt-get update

echo "Installing GIT..."
sudo apt-get install -y git libkrb5-dev

echo "Installing Nodejs and NPM..."
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install -y nodejs build-essential

echo "Installing grunt-cli..."
sudo npm install -g grunt-cli

echo "Installing PM2 server manager..."
sudo npm install pm2 -g

echo "Installing Bower..."
sudo npm install bower -g

echo "rsyncing synced folder to vagrant user..."
rsync -a /vagrant/ /home/vagrant

echo "Installing dependencies..."
npm install

echo "Starting server..."
pm2 start server.json

echo "Starting filewatcher..."
nohup grunt watch >/dev/null 2>&1 &

echo "DONE!"
echo "type: 'vagrant ssh' for SSH access."