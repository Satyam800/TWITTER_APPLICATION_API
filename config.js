// config.js

import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

const config = {
    MONGO_URL :"mongodb+srv://satyamchandra7277:Satyam%40800@cluster0.6nguf6t.mongodb.net/Pratice_sanket?retryWrites=true&w=majority",
    PORT:3000
};

export default config;
