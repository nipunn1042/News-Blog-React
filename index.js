import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import axios from 'axios';
import cors from 'cors';

const PORT = process.env.PORT;



app.use(cors());
app.use(express.json());


//routes for news
app.get('/news', async (req, res) => {
    try {
        const query = req.query.q;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`);


        if (!response.data || !response.data.articles) {
            return 
            res.status(404).json({ message: "No articles found" });
        }
        res.json({
            articles: response.data.articles
        });
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})