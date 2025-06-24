# React Chatbot with OpenAI

A beautiful, modern React chatbot application that integrates with OpenAI's GPT API to provide intelligent responses.

## Features

- 🎨 Modern, responsive UI with beautiful gradients and animations
- 💬 Real-time chat interface with typing indicators
- 🤖 Integration with OpenAI GPT-3.5-turbo API
- 📱 Mobile-friendly design
- ⚡ Fast and smooth user experience
- 🔒 Secure API key handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Setup

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   ```

4. **Start the development servers**
   ```bash
   npm run dev:full
   ```
   
   This will start both:
   - Frontend (React) on `http://localhost:5173`
   - Backend (Express) on `http://localhost:3001`

## Available Scripts

- `npm run dev` - Start only the React development server
- `npm run server` - Start only the Express backend server
- `npm run dev:full` - Start both frontend and backend servers
- `npm run build` - Build the React app for production
- `npm run preview` - Preview the production build

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Start chatting with the AI assistant!
3. Type your message and press Enter or click the send button
4. The AI will respond with helpful information

## Project Structure

```
chatbot-app/
├── src/
│   ├── components/
│   │   ├── Chatbot.jsx      # Main chatbot component
│   │   └── Chatbot.css      # Chatbot styles
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   └── main.jsx             # App entry point
├── server.js                # Express backend server
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## API Endpoints

- `POST /api/chat` - Send a message to the AI and get a response
- `GET /api/health` - Health check endpoint

## Customization

### Changing the AI Model
Edit `server.js` and modify the `model` parameter in the OpenAI API call:
```javascript
model: 'gpt-4', // or 'gpt-3.5-turbo', 'gpt-4-turbo', etc.
```

### Adjusting Response Length
Modify the `max_tokens` parameter:
```javascript
max_tokens: 1000, // Increase for longer responses
```

### Changing Temperature
Adjust the `temperature` parameter for response creativity:
```javascript
temperature: 0.5, // Lower = more focused, Higher = more creative
```

## Troubleshooting

### Common Issues

1. **"Failed to get response from AI"**
   - Check that your OpenAI API key is correct
   - Ensure you have sufficient API credits
   - Verify the API key is in the `.env` file

2. **CORS errors**
   - Make sure both frontend and backend are running
   - Check that the backend is on port 3001

3. **Port already in use**
   - Change the PORT in `.env` file
   - Update the frontend API URL in `Chatbot.jsx`

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- API keys are only used on the backend server

## Technologies Used

- **Frontend**: React 19, Vite, CSS3
- **Backend**: Express.js, Node.js
- **API**: OpenAI GPT API
- **HTTP Client**: Axios

## License

This project is open source and available under the MIT License.
