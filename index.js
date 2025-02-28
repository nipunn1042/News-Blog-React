import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import axios from 'axios';
import cors from 'cors';

const PORT = process.env.PORT;




app.use(cors({ origin: "https://your-frontend.com" }));
app.use(express.json());


//routes for news
app.get('/news', async (req, res) => {
    try {
        const query = req.query.q || "general";
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`,{
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
              'Accept': 'application/json'
            }
          });


        if (!response.data || !response.data.articles) {
            return 
            res.json({
                articles: []});
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