import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Assignment-2 API project',
  });
});

export default app;
