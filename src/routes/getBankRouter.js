import express from 'express';
import { getBanks } from '../controllers/getBankController.js';

const getBankRouter = express.Router();

getBankRouter.get("/", getBanks);

export default getBankRouter;