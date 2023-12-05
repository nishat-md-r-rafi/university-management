import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './app/routes';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// application route
app.use(router);

// not found
app.use(notFound);

// error hadler
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.json('He aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
});

export default app;
