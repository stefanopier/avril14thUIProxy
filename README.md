# Avril14th blockchain tools

## HTTP Proxy for Celestia UI

HTTP Proxy for Avril14th [Celestia UI](www.avril14th.org) to proxy calls to user-provided nodes IP and avoid CORS errors

### Development notes

Nodejs Http proxy based on Express and [http-proxy-middleware] (https://github.com/chimurai/http-proxy-middleware)

```
git clone git@github.com:stefanopier/avril14thUIProxy.git  
npm install  
DEBUG=avril14thuiproxy:* npm start
```
npm install pm2 -g
pm2 start app.js

```
```

### TODOS
