import React from 'react';
import './Pokemon.scss';

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  }
];


export default function Pokemon() {

  return all_pokemon.map((elem)=>{
    return <div className="col-md-6 col-lg-4">
      <div className="card shadow-sm mb-4 Pokemon">
        <div className="card-body pb-0">
        <h5 className="card-title">Pokemon name: {elem.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          Awesome: {elem.awesome ? "YES!" : "nope, not really"}
        </h6>
              <p className="mb-0">Weight: {elem.weight} kg
                <br />
                Terrifying: {elem.terrifying ? "Very" : "nah, lovable"}
                <br />
                Abilities({elem.abilities.length}): 
                <ul className="list-group list-group-flush">{elem.abilities.map((elem) => {
                  return <li className="list-group-item">{elem}</li>
                  })}
                </ul>
              </p>
        </div>
      </div>
    </div>
  })
}

