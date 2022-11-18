# Init project

execute npm init -> Creates package.json  
npm install express mongoose -> install express and mongoose  
npm i --save-dev dotenv nodemon -> install development dependencies (Not installed in production)

dotenv allows to pull enviroment variables from a dotenv file  
nodemon refreshes server every time we make changes

# What is REST?

REST stands for:

REpresentation  
State  
Transfer

A server response to Create read update and delete in a standard way

[GET] http://example.com/users

- Get a list of all resouces
- Acts on the entire resource

[POST] http://example.com/users

- Create a new resource
- Acts on the entire resource

[GET] http://example.com/users/1

- Gets only a single resouce based on the given ID
- Acts on a single resource

[PUT] http://example.com/users/1

- Update a resource with the given ID
- Acts on a single resource

[DELETE] http://example.com/users/1

- Delete a resource with the given ID
- Acts on a single resource

# Use REST Client on vscode

create a file ended in .rest  
write requests as:  
GET http://localhost:3000/subscribers
click on send request
