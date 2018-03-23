# node-red-project-starter
This is a template for a Node-RED project meant to be run in local mode.  The idea is to run an instance of Node-RED entirely from within a local directory to make it more portable.  This also makes running multiple instances of Node-RED at the same time easier.

Node-RED will start with a blank canvas and will save the flow file to **flow.json** the first time a deploy is done.  If you add your own `flow.json` file it will load that by default.

## Usage

    mkdir MyNiceProject
    cd MyNiceProject
    git clone https://github.com/dceejay/node-red-project-template.git .
    npm install
    npm start


When running multiple instances in parallel, you can specify a port:

    npm start 1885

To force an npm install (if you modified the package.json to add dependencies for example) you can use the -f switch:

    npm start -- -f


## Docker

There is also a Dockerfile that can be used to create a docker image of your project by running

    docker build -t node-red-project .

and then use this to run it (assumes you want port 1880 mapped direct, and see the terminal output)

    docker run -it -p 1880:1880 --name mynodered node-red-project

For more information look at the Dockerfile itself.

## Dependencies

You can easily add third party nodes by modifying the package.json file.  For this example template we added the `node-red-dashboard` and `node-red-contrib-web-worldmap` packages.
