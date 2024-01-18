import cors from 'cors';
import express, { Application } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', UserRoutes);

export default app;
