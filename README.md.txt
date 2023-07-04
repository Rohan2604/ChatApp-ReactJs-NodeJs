This is a simple ChatApp running on the localHost server with FrontEnd developed using ReactJs and NodeJs used as the BackEnd technology. Multiple users can connect to the same room using the roomID can enjoy the chatting experience hassle free.


Libraries used :

1. Nodemon :
	Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.Nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

npm install -g nodemon # or using yarn: yarn global add nodemon

2. Cors : 
	CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

$ npm install cors

3. Socket.io :
	Socket.IO enables real-time bidirectional event-based communication. 
It consists of:
	a Node.js server (this repository)
	a Javascript client library for the browser (or a Node.js client)

Its main features are:
Reliability
Auto-reconnection support
Disconnection detection
Binary support
Simple and convenient API
Cross-browser
Multiplexing support
Room support

// with npm
npm install socket.io

// with yarn
yarn add socket.io


4. react-scroll-to-bottom : 
	React container that will auto scroll to bottom or top if new content is added and viewport is at the bottom, similar to tail -f. Otherwise, a "jump to bottom" button will be shown to allow user to quickly jump to bottom.

npm install react-scroll-to-bottom