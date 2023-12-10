// YourComponent.js
import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/apiService';
import "./style.scss";

interface Player {
    id: number;
    fields: {
        X_PLAY: number;
        P_NAME: string;
        SEXUAL_ORIENTATION: string;
        RELIGION: string;
        FAV_MANAGER: string;
        FAV_FOOTBALL_PLAYER: string;
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
                <td>{player.fields.X_PLAY}</td>
                <td>{player.fields.P_NAME}</td>
                <td>{player.fields.RELIGION}</td>
                <td>{player.fields.SEXUAL_ORIENTATION}</td>
                <td>{player.fields.FAV_MANAGER}</td>
                <td>{player.fields.FAV_FOOTBALL_PLAYER}</td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default Players;
