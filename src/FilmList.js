// FilmList.js
import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ films }) => {
  return (
    <div className="film-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          description={film.description}
          posterURL={film.posterURL}
          note={film.note}
          videoPath={film.videoPath}
        />
      ))}
    </div>
  );
};

export default FilmList;
