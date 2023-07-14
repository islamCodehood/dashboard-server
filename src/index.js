import express from 'express';
import cors from 'cors';
import dataRoutes from './routes/data.routes';

const app = express();

app.use(express.json({ limit: '30mb', strict: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/data', dataRoutes);

const PORT = '5555';

app.listen(PORT, () => console.log(`server running at port: ${PORT}`));
