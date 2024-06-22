import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { useEffect, useState } from 'react';

// const WebSocketComponent = () => {
//   const [message, setMessage] = useState('');
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:8080');

//     socket.onopen = () => {
//       console.log('Connected to the WebSocket server');
//     };

//     socket.onmessage = (event) => {
//       const newMessage = event.data;
//       setChat((prevChat) => [...prevChat, newMessage]);
//     };

//     socket.onclose = () => {
//       console.log('Disconnected from the WebSocket server');
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const sendMessage = () => {
//     const socket = new WebSocket('ws://localhost:8080');
//     socket.onopen = () => {
//       socket.send(message);
//     };
//     setMessage('');
//   };

//   return (
//     <div>
//       <h1>WebSocket Chat</h1>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//       <div>
//         <h2>Chat</h2>
//         {chat.map((msg, index) => (
//           <p key={index}>{msg}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WebSocketComponent;

