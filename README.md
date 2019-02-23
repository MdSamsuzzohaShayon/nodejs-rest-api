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