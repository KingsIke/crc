import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/users';
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/crc', userRouter);
app.use(function (req: Request, res: Response, next: NextFunction) {
	next(createError(404));
});

export default app;
