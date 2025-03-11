import React, { useState } from 'react';
import axios from 'axios';

const SDGChatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const API_URL = "https://api-inference.huggingface.co/models/mistral/mistral-7B";
  const API_KEY = "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"; 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        API_URL,
        { inputs: input },
        {
          headers: { Authorization: `Bearer ${API_KEY}` }
        }
      );

      const botResponse = response.data?.[0]?.generated_text || "Sorry, I didn't understand.";
      setMessages([...messages, userMessage, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, { role: "bot", content: "Error getting response. Try again!" }]);
    }

    setInput('');
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "300px" }}>
      <h2>SDG Chatbot</h2>
      <div style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.role === "user" ? "right" : "left" }}>
            <b>{msg.role === "user" ? "You" : "Bot"}:</b> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "5px" }}>Send</button>
    </div>
  );
};

export default SDGChatbot;
