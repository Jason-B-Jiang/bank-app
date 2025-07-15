import express from 'express';

const helloRouter = express.Router();

// Generic hello message
helloRouter.get("/", (req, res) => {
    res.json({"message": "Hello world!!"});
});

export default helloRouter;