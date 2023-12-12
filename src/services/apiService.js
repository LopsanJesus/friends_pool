import axios from 'axios';

const BASE_URL = 'https://api.airtable.com/v0';
const API_KEY = 'patvm2VOCY6c5yZKr.593b24d7886335f708a31ed23086bbceb50ce7aab3b699fed5b0a4f710d45bbb';
const BASE_ID = 'appAReXxuqHtRQHSr';
const TABLE_NAME = 'Players';

export const fetchPlayers = async () => {
  const endpoint = `${BASE_URL}/${BASE_ID}/${TABLE_NAME}`;

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },

      params: {
        sort: [{ field: 'Player_ID' }], // Sort by id in ascending order
      },
    });

    return response.data.records;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

