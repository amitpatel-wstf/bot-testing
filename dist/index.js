"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Bot, InlineKeyboard } = require("@grammyjs/core");
const grammy_1 = require("grammy");
// Replace with your bot token
const bot = new grammy_1.Bot("7435511793:AAGT5fOoHrGgxP4p-FcROwLbgDFWp-FU9KA");
// Handler for the /start command
bot.command("start", (ctx) => {
    // Set up an inline keyboard with a button that opens the mini app
    const keyboard = new grammy_1.InlineKeyboard().webApp("Open Mini App", "https://edb3-2401-4900-8843-ed5d-8c15-a865-a198-4b4f.ngrok-free.app" // Replace with your mini web app URL
    );
    // Send a message with the inline keyboard
    ctx.reply("Click the button below to open the mini app:", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Open Mini App", web_app: { url: "https://edb3-2401-4900-8843-ed5d-8c15-a865-a198-4b4f.ngrok-free.app" } }
                ]
            ],
            parse_mode: "HTML"
        },
    });
});
// Start the bot
bot.start();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Enable CORS for all routes
app.use((0, cors_1.default)({
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
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.options('*', (0, cors_1.default)());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.post('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
