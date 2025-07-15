const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();  // Middleware NEEDS next() to know to proceed
}

export default logger;