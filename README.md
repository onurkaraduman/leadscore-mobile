# Ionic2 leadscore.io mobile app example

This project is a sample of leadscore.io mobile app based on Ionic2.

There is a CORS problem with backend api. I used google chrome extension to test the application in browser.
You can download from the following site: [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/reviews).

In addition, i couldn't implement angular2-jwt with backend api. I must have missed some configuration.

**Technology Stack**

* Error logging : [Sentry](https://sentry.io/).
* Local Storage: [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

Note: SecureStorage implementation is available in source code. But I couldn't test the application with SecureStorage in browser. Therefore, i used Storage.


**Installation**

Before the installation, you need to get apiKey from [Sentry](https://sentry.io/).

Add the SentryApiKey to environment variables
```
export SENTRY_TOKEN=<sentry_token>
```

Make sure you have Node version >= 7.5.0 and NPM >= 4.1.2
```
# clone the repo
git clone https://github.com/onurkaraduman/leadscore-mobile.git
````
```
# change directory to our repo
cd leadscore-mobile
```
```
# install the repo with npm
npm install && ionic state restore
````
```
# start the server with development environment
npm run dev
```
go to http://0.0.0.0:8100 or http://localhost:8100 in your browser
```
# start the server with production environment
npm run prod
```
go to http://0.0.0.0:8100 or http://localhost:8100 in your browser

**Android Build**

Build the application.
```
ionic build android
```
Run the application on device or emulator. The first execution will take long time.

```
ionic run android -l -c -s
```

## TODO
* Improve the exception handling
* Solve CORS problem (run application in browser without any plugin)
* Investigate unit testing with [Karma](https://karma-runner.github.io/).
* Investigate deployment process (improve dev-prod configuration files, continues integration)
