import express from 'express';
import { addBank } from '../controllers/addBankController.js';

const addBankRouter = express.Router();

addBankRouter.post("/", addBank);

export default addBankRouter