# Chat Bot

A lightweight, web-based chatbot built on top of OpenAI’s “Davinci” engine—created just before ChatGPT’s public launch. It loads a simple HTML/CSS/JS interface, sends your messages to the OpenAI API, and displays Jarvis’s (often snarky) replies in real time.

> **Warning:**  
> This was a proof-of-concept built in late 2022. The OpenAI API endpoints, authentication scheme, and usage quotas may have changed since then. You will likely need to update the fetch URL, parameters, and your API key to get it working again.

---

## Features

- **Simple UI** built with plain HTML, CSS and jQuery  
- **Conversational prompt** seeded with a “creative, funny, very sarcastic” AI persona  
- **Automatic history trimming** once the conversation grows beyond ~15 lines  
- **Enter-to-send** support: hit Enter to submit a message  
- **Lightweight**—no build step or frameworks required  

---

## Repository Structure

```

chat-bot/
├── index.html           # Main chat interface + navbar
├── styles.css           # Chat-specific styles
├── navbar.css           # Shared navigation bar styles
├── pages/
│   ├── about/
│   │    ├── about.html
│   │    └── style.css
│   ├── chat/
│   │    ├── chat.html
│   │    └── styles.css
├── assets/
│   ├── UnNamed.png      # Bigger logo 
│   └── DontKnow2.png    # Logo used in the navbar
└── scripts/
    └── scripts.js       # Chat logic and OpenAI API calls

```

---

## Prerequisites

- A browser (Chrome, Firefox, Edge, etc.)  
- An [OpenAI API key](https://platform.openai.com/account/api-keys) with access to the “text-davinci-003” (or later) engine  
- Basic web-server (optional)—you can also just open `index.html` directly  

---

## Installation

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/Bob1883/Chatbotium
   cd jarvis-chat-bot
```

2. **Insert your OpenAI key**
   Open `scripts/scripts.js` and replace the placeholder `KEY` in:

   ```js
   const OpenAl_Key = 'KEY';
   ```

   with your actual API key.

---

## Usage

1. Open `index.html` in your browser (or your local server’s URL).
2. Wait for “Jarvis” to greet you in the chat window.
3. Type your message into the input box and press **Enter**.
4. Jarvis will ponder for a moment, then reply!
5. The script automatically prunes older lines once the conversation exceeds ~15 turns.

---

## Known Issues

* **Deprecated endpoint**: OpenAI may have moved to `v1/chat/completions` with the new Chat API.
* **Browser CORS**: Direct `file://` usage can block `fetch()`. Use a local server.
* **No error UI**: API errors are simply logged to the console.

---

## License

This toy project is released under the **MIT License**. Feel free to fork, experiment, and modernize—but attribution is appreciated.