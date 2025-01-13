import React from 'react';
import MemoryCard from '../MemoryCard/MemoryCard';
import './FrontPage.css';

function FrontPage() {
  const favorites = [
    { title: 'First Date', desc: 'Our magical first date.', src: '/assets/favorites/date.jpg' },
    { title: 'Vacation', desc: 'Adventures together!', src: '/assets/favorites/vacation.jpg' },
    { title: 'Birthday Surprise', desc: 'Your special day!', src: '/assets/favorites/birthday.jpg' },
  ];

  return (
    <div className="front-page">
      <div className="birthday-message">
        <div className="image-container">
          <img src="/assets/favorites/couple-photo1.jpg" alt="Kissing" className="kissing-photo" />
          <img src="/assets/favorites/couple-photo2.jpg" alt="Kissing" className="kissing-photo" />
          <img src="/assets/favorites/couple-photo5.jpg" alt="Kissing" className="kissing-photo" />
          <img src="/assets/favorites/couple-photo4.jpg" alt="Kissing" className="kissing-photo" />
          <img src="/assets/favorites/couple-photo7.jpg" alt="Kissing" className="kissing-photo" />
        </div>
        <h1>Happy Birthday, My Love! 🎉❤️</h1>
        <p className="fancy-text">
          Happy Birthday to the love of my life! 💖 Today, I celebrate not just the day you were born 
          but the incredible person you are and the endless joy you bring into my world. You have a 
          way of turning ordinary moments into extraordinary memories, and your kindness, laughter, 
          and love make every day brighter. On your special day, I want you to know how deeply you’re 
          cherished and how grateful I am to walk this journey of life with you. May your birthday 
          be as amazing as your heart and as magical as the love we share. Here’s to many more 
          beautiful moments together! 🎂❤️
        </p>
      </div>
      {/* <h2>Favorite Memories</h2>
      <div className="favorites">
        {favorites.map((memory, index) => (
          <MemoryCard key={index} title={memory.title} desc={memory.desc} src={memory.src} />
        ))}
      </div> */}
    </div>
  );
}

export default FrontPage;
