import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from '../routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'EcoMarket API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
