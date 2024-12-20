import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.OPENAI_API_KEY;

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));

app.post('/completions', async (req, res) => {
    const { prompt } = req.body;
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"         
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json(); 
        res.send(data);
    } catch (error) {
        console.error('Error fetching response:', error);
        res.status(500).send('An error occurred while fetching the response.');
    }
});