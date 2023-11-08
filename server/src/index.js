import cors from 'cors';
import express from 'express';
import './config/config.js';
import './models/index.js';
import { UserRouter } from './routers/UserRouter.js';
import { UserAuthRouter } from './routers/UserAuthRouter.js';
import { ContactRouter } from './routers/ContactRouter.js';
import { PropertyRouter } from './routers/PropertyRouter.js';

const app  = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/user', UserRouter);
app.use('/api/user/auth', UserAuthRouter);
app.use('/api/contact', ContactRouter);
app.use('/api/property', PropertyRouter );

app.listen( PORT , () => {
    console.log(`server in port : http://localhost:${PORT}`);
})