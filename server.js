const app = require('./app/app');

const dotenv = require('dotenv');

// settign the config file
dotenv.config({ path: 'app/config/config.env' });

app.listen(process.env.PORT, ()=>{
    console.log(`App Is runnint at ${process.env.PORT} in ${process.env.NODE_ENV} mode click to ${process.env.APP_URL}.`);
});

