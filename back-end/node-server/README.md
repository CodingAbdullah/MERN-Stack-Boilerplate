MERN stack is a full stack web development approach making use of: MONGO, EXPRESS, REACT, NODE (MERN). It is a powerful combination of technologies that allow
developers to build strong, dynamic and powerful websites. It incorporates the use of JavaScript as it's primary language.

JSON is the method of data storage and exchange in MongoDB. 

ReactJS is a framework used to build client-side javascript to interact with the user. The boilerplate consists of a front-end folder which acts as the client 
server (using React).

Express is a framework built on Node, which allows for easy server-side coding using javascript. The boilerplate consists of a back-end folder which acts as a
server to the client (react server). It consists of a boilerplate REST API that can be customly constructed.

React server (client) runs on localhost PORT 3000 and the Express server runs on localhost PORT 5056. Although these numbers can change by changing the environment
variables listed in the .env file.

CORS (Cross Origin Resource Sharing) is a security feature which is implemented by default. It prevents servers running on different ports from communicating and
sharing resources with each other.

The Express server makes use of the CORS library to enable inbound and outbound traffic (requests and responses to and from the server). 

Should you choose to run the Express server on a different port, you will have to change the proxy attribute in the package.json file in the react-server folder.
You will have to change it to the appropriate port on which the Express server is running so API calls to the back-end are made to the correct port.
