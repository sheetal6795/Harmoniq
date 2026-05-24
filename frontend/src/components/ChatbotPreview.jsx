function ChatbotPreview() {
  return (
    <section className="chatbot-section">

      <div className="chat-left">
        <h2>24/7 AI Mental Health Support</h2>

        <p>
          Talk with our AI wellness assistant anytime you feel stressed,
          anxious, or emotionally overwhelmed.
        </p>

        <button className="primary-btn">
          Start Chatting
        </button>
      </div>

      <div className="chat-right">

        <div className="chat-box ai">
          Hey 👋 How are you feeling today?
        </div>

        <div className="chat-box user">
          I'm feeling a little stressed lately.
        </div>

        <div className="chat-box ai">
          I'm here for you 💙 Want to try a breathing exercise?
        </div>

      </div>

    </section>
  );
}

export default ChatbotPreview;