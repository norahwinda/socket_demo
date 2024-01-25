import { useEffect } from "react";
import { io } from 'socket.io-client';

function App() {

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('https://tracking.uxlivinglab.online/socket'); // Use 'http://' or 'https://' depending on your server configuration

    // Event listener for successful connection
    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      socket.emit('message', {"user_email":"email","company_id":"65a8bb1f2d73765634fdcaf5",
      "user_id":"ce7wODqttW",
      "lat":"10.8130986",
      "lng":"5.5393232",
      "link_id":""}); // Send a message to the server
    });

    // Event listener for receiving messages from the server
    socket.on('serverMessage', (message) => {
      console.log('Received message from server:', message);
      // Update your component state or perform other actions with the received data
    });

    socket.on('reactMessage', (message) => {
      console.log('Received message from server:', message);
      // Update your component state or perform other actions with the received data
    });

    // Event listener for Socket.IO errors
    socket.on('error', (error) => {
      console.error('Socket.IO error:', error);
      // Handle error state or reconnect logic here
    });

    // Event listener for Socket.IO disconnection
    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
