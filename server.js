const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to generate an ephemeral API key
app.post('/generate-ephemeral-key', async (req, res) => {
    const { model, voice } = req.body;

    try {
        const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model,
                voice,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error from OpenAI API:', errorData);
            return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        res.json(data.client_secret);
    } catch (error) {
        console.error('Error generating ephemeral key:', error);
        res.status(500).json({ error: 'Failed to generate ephemeral key.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});