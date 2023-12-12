// YourComponent.js
import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/apiService';
import "./style.scss";

interface Player {
    id: number;
    fields: {
        Player_ID: number;
        Name: string;
        SexualOrientation: string;
        Religion: string;
        FavManager: string;
        FavFootballer: string;
    }
}

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await fetchPlayers();
        console.log(playerData);
        setPlayers(playerData);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Players List</h1>
        <table className='Papas'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Religión</th>
                <th>Orientación Sexual</th>
                <th>Mejor Manager</th>
                <th>Mejor Futbolista</th>
            </tr>
            </thead>
            <tbody>
            {players.map((player) => (
            <tr key={player.id}>
                <td>{player.fields.Player_ID}</td>
                <td>{player.fields.Name}</td>
                <td>{player.fields.Religion}</td>
                <td>{player.fields.SexualOrientation}</td>
                <td>{player.fields.FavManager}</td>
                <td>{player.fields.FavFootballer}</td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default Players;
