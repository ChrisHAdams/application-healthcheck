# application-healthcheck [![Build Status](https://travis-ci.org/ChrisHAdams/application-healthcheck.svg?branch=master)](https://travis-ci.org/ChrisHAdams/application-healthcheck)

## A System Healthcheck Application
An stand-alone application that monitors health/availability of websites, web-services and servers.

I built this app to help monitor a system that comprises of several APIs, databases, web applications etc. to provide instant feedback when one or more components go down or are performing below expectations.

I know it's not a novel idea, but lots of commercial solutions can be exepensive, too sophisticated and instrusive.  This is a deliberately lightweight solution that doesn't require any user agents to be installed.

An example of this can be found at [Heroku](https://application-healthcheck.herokuapp.com/#/).

This application supports checking the following assets:-
1. Webpages/websites
2. Web Services
3. Servers


To install, just clone the repo.  Once downloaded, don't forget to download and install dependencies... `npm install`.


There are some tests created for both back-end and the front-end.  To run the back-end tests, the command is `npm run-script server-test`.  To run the front-end tests, the command is `npm run-script client-test`.

### Front-End
The front-end is written with React.  If you want to just run it out of the box, the run `npm run-script client-build` **before starting the back-end**.  If you want to play with front-end or change it, then `npm run-script client-start`.  This command uses Webpack to rebuild the client on save.

### Back-end
If you want to run the server out of the box, run `npm run-script start`.  This will launch the app using details in the config file 'development.json', more on the config file later.  Or, if you want to make changes, run `npm run-script start-dev-server`.  This start the server with NODEMON and, again, uses the Development.json file.

### Config.json file

The Config.json stores all the configuration for the application as well as assets to monitor.  In order for the app to load the config, the name of the file needs to match the PROCESS.ENV value.

There are four parts to the config file.  Options, Dashboard, Landscapes and Items.

#### Options

##### port
The port that the application is running on.  If running with PM2 or NGINX and a port number is passed in, then this will override the port in cofig.

App Log Folder and App Log Name defines the folder and file name for the event log.  Similarly, Results Log Folder and Result Log Name dictate the folder and file to store the results from the checks.

Menu title and footer text are self explanatory.

**Example Options**
```
  "options": {
    "port": 9999,
    "appLogFolder": "devlog",
    "appLogName": "dev",
    "resultLogFolder": "devresults",
    "resultLogName": "dev",
    "menutitle": "Application Healthcheck",
    "footertext": "Designed and built by..."
  }
```

#### Dashboard Config

The main/home page of the application is a Dashboard.  The Dashboard is broken up by 'Landscapes' (more on these later).  This part of the config file only contains the Title and Subtitle string for the dashboard.

**Example Dashboard Config**
```
  "dashboardConfig": {
    "dashboardTitle": "Application Dashboard",
    "dashboardSubTitle" : "Monitoring a shed load of applications"
  }
```

#### Landscapes

Landscapes are a means of 'grouping' like assets by your choosing in the dashboard.  You could use landscapes
to group assets by functional areas (HR, Finance, Ops) or by type (websites, web-services, servers).  Each defined landscape results in a menu item and 'page'.

Key and name are self-explanatory.  The layout elements object describe the title and subtitle for the dashboard.

The items to check is an array of checks to associate with the dashboard.

**Example Dashboard Config**
```
  {
    "key":0,
    "name":"Room 101",
    "layoutElements": {
      "title": "Room 101",
      "subtitle": "Monitoring Room 101"
    },
    "itemsToCheck" : [0, 1, 2, 3, 4, 5, 6, 7]
  },
```

#### Items to monitor
Each item to monitor is described in a JSON object, stored in the Items array.

This app checks websites, web services and servers.  Following are examples on how to set up each.

##### Website Checks

The below example shows to how configure a website/webpage check.  If you want to define expected status and and expected response time in milliseconds, add the expectedResults object as shown below. When the monitor runs, it look for the two properties in the expectedResults object.

```
  { "name": "BBC Website",
    "description": "Ping BBC's website",
    "checkType": "website",
    "url": "http://www.bbc.co.uk",
    "expectedResults": {
      "expectedStatusCode": 200,
      "expectedResponseTime": 500
    }
  }
```

##### Web Services
The monitor is capable of calling SOAP and RESTful services including GET and POST requests.

Below is a simple example...
```
  { "name": "Weather API",
    "description": "Ping Weather API",
    "checkType": "service",
    "url": "https://www.metaweather.com/api/location/search/?query=manchester",
    "expectedResults": {
      "expectedStatusCode": 200,
      "expectedResponseTime": 500
    }
  }
```

Next is a more complex example...

```
  { "name": "Some Service Name",
    "description": "Some Description",
    "checkType": "service",
    "method": "POST",
    "headers": {"Content-Type": "application/xml"},
    "url": "the\url\of\the\service",
    "payload": "the Payload required for the service",
    "expectedResults": {
      "expectedStatusCode": 200,
      "expectedResponseTime": 600
    }
  }
```

##### Servers
The server check using 'ping' to check whether a server can be reached.
```
  {"name": "Google IP Ping",
    "description": "Ping Google's IP Addresss",
    "checkType": "server",
    "url": "172.217.16.68",
    "expectedResults": {
      "expectedStatusCode": "Alive",
      "expectedResponseTime": 100
    }
  }
```

### Logging
This application runs two sets of logs.  Firstly, an application log and secondly, a results log.  Both types start a new log each day.

### Email Alerts
This is a an area for future enhancement.

### API
This application has its own API, which is used by the application or could be called from within your own application.

The API root is `<server>:<port>/api`.  The API contains methods to list the components being monitored by id, name, type or list all.  The API also contains methods to run checks by id, name or run all.  See `./src/server/routes/apiRoutes.js` for more details.

### Other points
Once the backend is started, the application runs all of the checks every 10 minutes and logs the results.  If there are any clients connected, the the backend uses sockets.io to broadcast the results to each connected client.

When running the client, each component under the monitor is listed.  Once the checks have ran, Green indicates successful response within expected time.  Amber indicates successful response that exceeds the expected response time.  Red indicates a fail and is something that needs to be looked at.



