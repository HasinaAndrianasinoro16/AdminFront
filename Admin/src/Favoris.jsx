import React, { useState } from 'react';
import FavCard from "./FavCard";

export default function Favoris() {
    const nombreDeCartes = 12;  // Remplacez par le nombre souhaité (20 ou 12)

  const cards = [];
  for (let i = 0; i < nombreDeCartes; i++) {
    cards.push(<FavCard key={i} />);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-start">Liste des favoris:</h1>
          <div className="row">
          {cards}
          </div>
        </div>

      </div>
    </div>
  );
}

