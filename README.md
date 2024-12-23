# OpenAI Realtime Voice Chat

This project is a web application that allows users to interact with the OpenAI Realtime API using WebRTC. Users can input their OpenAI API key, select a voice, and start a conversation with the Realtime API.

## Features

- Connect to OpenAI Realtime API using WebRTC
- Select between different voices
- Monitor connection status
- Start and stop conversations

## Prerequisites

- Node.js and npm installed
- OpenAI API key

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

1. **Start the server:**

   ```bash
   node server.js
   ```

   This will start the server on port 3000.

2. **Start the HTTP server to serve the HTML file:**

   In the directory containing `rtc_voice.html`, run:

   ```bash
   python -m http.server 8000
   ```

3. **Access the application:**

   Open your browser and go to `http://localhost:8000` to access the web application.

## Code Overview

- **Server Code**: Handles the generation of ephemeral API keys.
  ```javascript:server.js
  startLine: 1
  endLine: 43
  ```

- **Client Code**: Manages the WebRTC connection and user interface.
  ```html:rtc_voice.html
  startLine: 1
  endLine: 174
  ```

- **API Documentation**: Provides details on connecting to the Realtime API.
  ```docs/Open_ai_RTC
  startLine: 1
  endLine: 178
  ```

## License

[]

## Acknowledgments

- [OpenAI](https://openai.com/)
- [WebRTC](https://webrtc.org/)
