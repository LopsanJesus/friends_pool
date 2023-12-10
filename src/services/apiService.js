
const BASE_URL = 'https://api.airtable.com/v0';
const API_KEY = 'appAReXxuqHtRQHSr/tblXoQM0whkYPz1By';
const BASE_ID = 'YOUR_AIRTABLE_BASE_ID';

export const fetchPlayersData = async () => {
  const endpoint = `${BASE_URL}/${BASE_ID}/Players`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.records;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
