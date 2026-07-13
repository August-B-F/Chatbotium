# Chatbotium

A web chatbot with a sarcastic persona named Jarvis. Built late 2022, before ChatGPT launched, on OpenAI's davinci completions endpoint. Plain HTML/CSS/JS with jQuery, no build step.

Won't run as-is. The API changed and the endpoint (`v1/engines/davinci/completions`) is dead. Treat it as a snapshot.

## Run

Put your OpenAI key in `scripts/scripts.js` (the `OpenAl_Key` var and the `Bearer` header), then open `index.html`. `file://` blocks `fetch`, so serve it from a local server.

The prompt seeds a "creative, funny, very sarcastic" persona. Past ~15 lines it trims the oldest turns.

## License

MIT.
