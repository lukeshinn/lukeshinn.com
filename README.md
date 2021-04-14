# Luke Shinn Web Development Framework

Stack: Node (ES6+), Express, Webpack, React, Jest, and Enzyme that has Hot Module Reloading and can be deployed to Google App Engine with a single command. It has dev and prod builds, where the prod build outputs a minified, uglified bundle where images are encoded in Base64 directly into the css file.

## Installation

    npm install

## Create a Development build

    npm run buildDev

## Create a Production build

    npm run buildProd

## Run the code on a local webserver

    npm start

Then navigate to `http://localhost:8080`

## Run test

    npm test

## Generate coverage report

    npm run coverage
