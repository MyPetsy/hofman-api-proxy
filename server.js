const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/hofman', async (req, res) => {
  try {
    const response = await axios.get('https://api-prod.hofmananimalcare.nl/api', {
      headers: {
        'Authorization': `Bearer ${process.env.HOFMAN_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fout bij Hofman API:', error.message);
    res.status(500).json({ error: 'Fout bij ophalen Hofman data' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server draait op poort ${port}`);
});