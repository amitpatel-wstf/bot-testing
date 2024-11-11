// const { Bot, InlineKeyboard } = require("@grammyjs/core");
import {Bot , InlineKeyboard}  from 'grammy'

// Replace with your bot token
const bot = new Bot("7435511793:AAGT5fOoHrGgxP4p-FcROwLbgDFWp-FU9KA");

// Handler for the /start command
bot.command("start", (ctx:any) => {
  // Set up an inline keyboard with a button that opens the mini app
  const keyboard = new InlineKeyboard().webApp(
    "Open Mini App",
    "https://edb3-2401-4900-8843-ed5d-8c15-a865-a198-4b4f.ngrok-free.app" // Replace with your mini web app URL
  );

  // Send a message with the inline keyboard
  ctx.reply("Click the button below to open the mini app:", {
    reply_markup: {
        inline_keyboard: [
            [
                {text: "Open Mini App", web_app: {url: "https://edb3-2401-4900-8843-ed5d-8c15-a865-a198-4b4f.ngrok-free.app"}}
            ]
        ],
        parse_mode: "HTML"
    },
  });
});

// Start the bot
bot.start();

import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: [
        'https://web.telegram.org',
        'http://localhost:3000',
        'http://localhost:5173', // Add your local development port if different
        '*' // For testing - remove in production
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200
}));

// Add content type middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.options('*', cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post('/', (req, res) => {
    res.status(200).json({message: 'Hello, World!'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})