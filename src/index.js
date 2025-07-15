import express from 'express';
import helloRouter from './routes/helloRouter.js';
import addBankRouter from './routes/addBankRouter.js';
import getBankRouter from './routes/getBankRouter.js';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/hello", helloRouter);
app.use("/api/bank/add", addBankRouter);
app.use("/api/bank/get", getBankRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`bank-app running on http://localhost:${PORT}`));