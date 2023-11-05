import cors from 'cors';
import express from 'express';
import './config/config.js';

const app  = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api', (req, res) =>{res.send('Hola mundo');});

app.listen( PORT , () => {
    console.log(`server in port : http://localhost:${PORT}`);
})