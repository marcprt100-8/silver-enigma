// App.js

import React, { useState } from 'react';
import FilmList from './FilmList';
import FilmForm from './FilmForm';
import './App.css';

import Navbar from './Navbar';

const App = () => {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: 'BANLIEUSARDS',
      description: 'Description du film 1.',
      posterURL: '/img/1.jpeg',
      note: 8.5,
      videoPath: '/img/deo2.mp4',
    },
    {
      id: 2,
      title: 'TITANIC',
      description: 'Description du film 1.',
      posterURL: '/img/2.jpeg',
      note: 9.5,
      videoPath: '/img/deo3.mp4',
    },
    {
      id: 3,
      title: 'Avengers',
      description: 'Description du film 1.',
      posterURL: '/img/3.jpeg',
      note: 9.5,
    },
    {
      id: 4,
      title: 'Matrix',
      description: 'Description du film 1.',
      posterURL: '/img/4.jpeg',
      note: 9.5,
    },
    {
      id: 5,
      title: 'Avatar',
      description: 'Description du film 1.',
      posterURL: '/img/5.jpeg',
      note: 9.5,
    },
    {
      id: 6,
      title: 'Pirates des caraïbes',
      description: 'Description du film 1.',
      posterURL: '/img/6.jpeg',
      note: 9.5,
    },
    {
      id: 7,
      title: 'Scarface',
      description: 'Description du film 1.',
      posterURL: '/img/7.jpeg',
      note: 9.5,
    },
    {
      id: 8,
      title: 'Rocky',
      description: 'Description du film 1.',
      posterURL: '/img/8.jpeg',
      note: 9.5,
    },
    {
      id: 9,
      title: 'Harry Potter',
      description: 'Description du film 1.',
      posterURL: '/img/9.jpeg',
      note: 9.5,
    },
    {
      id: 10,
      title: '300',
      description: 'Description du film 1.',
      posterURL: '/img/10.jpeg',
      note: 9.5,
    },
    
    // ... Ajoutez d'autres films avec leurs informations
  ]);

  const [filteredTitle, setFilteredTitle] = useState('');
  const [filteredNote, setFilteredNote] = useState('');

  const handleAddFilm = (newFilm) => {
    // Ajouter le nouveau film à la liste des films
    setFilms([...films, newFilm]);
  };

  const handleTitleChange = (e) => {
    // Mettre à jour le filtre par titre
    setFilteredTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
    // Mettre à jour le filtre par note
    setFilteredNote(e.target.value);
  };

  // Filtrer les films en fonction des critères de recherche
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(filteredTitle.toLowerCase()) &&
    film.note.toString().includes(filteredNote)
  );

  return (
    <div className="app">
      <Navbar
        onTitleChange={handleTitleChange}
        onNoteChange={handleNoteChange}
        filteredNote={filteredNote}
      />
      <section className="video-section">
        {/* Ajoutez la balise video avec vos paramètres */}
        <video controls width="100%" height="auto">
          <source src="/img/deo.mp4" type="video/mp4" />
          
        </video>
      </section>
      <FilmForm onAddFilm={handleAddFilm} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default App;
