function ChatbotPreview() {
  return (
    <section className="chatbot-section">

      <div className="chat-left">
        <h2>24/7 AI Music Co-Pilot 🎧</h2>

        <p>
          Describe your music idea in plain language and let AI generate
          melodies, chord progressions, lyrics, and editable drafts instantly.
        </p>

        <button className="primary-btn">
          Start Creating
        </button>
      </div>

      <div className="chat-right">

        <div className="chat-box ai">
          Hey 👋 What kind of music do you want to create today?
        </div>

        <div className="chat-box user">
          I want a calm lo-fi melody with emotional lyrics.
        </div>

        <div className="chat-box ai">
          Got it 🎶 Generating chord progressions, melody ideas, and lyrics...
        </div>

      </div>

    </section>
  );
}

export default ChatbotPreview;