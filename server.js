const app = require('./app/app');
const dotenv = require('dotenv');
const connectDatabase = require("./app/config/database");

// settign the config file
dotenv.config({ path: 'app/config/config.env' });

// connecting to the database 
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`App Is runnint at ${process.env.PORT} in ${process.env.NODE_ENV} mode click to ${process.env.APP_URL}.`);
});

process.on('unhandledRejection', (error) => {
    console.log(`ERROR: ${error.message}`);
    console.log("Shutting down server...");
    server.close(() => process.exit(1));
});

