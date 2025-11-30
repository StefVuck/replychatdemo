import React from 'react';
import './ChatRooms.css';

const ChatRooms = ({ rooms }) => {
  return (
    <div className='chat-rooms'>
      <h2>Chat Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id} className='chat-room'>
            <h3>{room.name}</h3>
            <p>{room.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRooms;