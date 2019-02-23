## REST API (Representational State Transfer)

Representational State Transfer is a software architectural style that defines a set of 
constraints to be used for creating Web services. Web services that conform to the REST 
architectural style, termed RESTful Web services, provide interoperability between 
computer systems on the Internet. 

REST or RESTful API design (Representational State Transfer) is designed to take advantage 
of existing protocols. While REST can be used over nearly any protocol, it usually takes 
advantage of HTTP when used for Web APIs.

[essential website for learning rest api or referance of rest api](https://www.restapitutorial.com/)


## postman

paste url in past man
see for all (get, post, delete, patch)
```
http://localhost:5000/products
http://localhost:5000/products/id
http://localhost:5000/products/special

http://localhost:5000/orders
http://localhost:5000/orders/id
```

make a post request 
```
http://localhost:5000/products
http://localhost:5000/orders
```
body-> row -> JSON(application.json).
#### for products
```
{
    "name" : "happy potter",
    "price" : 30
}
```
#### for orders
```
{
    "productId" : "jjhjheu23j3h45jbhb5_j/df",
    "quantity" : "10"
}
```


## http status code

[all code](https://www.restapitutorial.com/httpstatuscodes.html)

## morgan

HTTP request logger middleware for node.js

behind the scene morgan will call the next function that dont't 
return response just locked something.
see the result in terminal when we request something


```
npm install morgan
```

## body parser

parse the body of incoming request. body-parser doesn''t support files.
but it uspport url encoded bodies and json. 
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

```
npm install body-parser
```
