# application-healthcheck
## A System Healthcheck Application
An stand-alone application that monitors health/availability of websites, web-services and servers.

I built this app to help monitor a system that comprises of several APIs, databases, web applications etc. to provide instant feedback when one or more components go down or are performing below expectations.

This application supports checking the following are available.
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

There are three parts to the config file.  Firstly, the options object.  At the time of writing, this is only the port to run on.  The next object is the layoutElements object, this contains some key properties and values for the client.  Lastly, there is the items array.  The array contains an object for each website, api or server to monitor.

```
{
  "healthcheck": {
    "options": {
      "port": 5251
    },
    "layoutElements": {
      "title": "Application Healthcheck",
      "subtitle": " Development Instance",
      "menutitle": "Application Healthcheck",
      "footertext": "Designed and built by..."
    },
    "items" : [
      {
        "key":0,
        "name": "BBC",
        "description": "Ping BBC's website",
        "checkType": "website",
        "url": "http://www.bbc.co.uk",
        "expectedResponseCode": 200,
        "expectedResponseTime": 500
      },
   ]
}
```

#### Items to monitor
Each item to monitor is described in a JSON object, stored in the Items array.

This module checks websites, web services and servers.  Following are examples on how to set up each.

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



