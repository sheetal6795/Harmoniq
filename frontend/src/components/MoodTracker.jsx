function MoodTracker() {
  return (
    <section className="mood-section">

      <h2>Your Music Creation Journey 🎼</h2>

      <p className="mood-text">
        Track your music drafts, generated ideas, and creative progress.
      </p>

      <div className="mood-cards">

        <div className="mood-card">
          <h3>🎵 Drafts Created</h3>
          <p>12 Projects</p>
        </div>

        <div className="mood-card">
          <h3>🎤 Lyrics Generated</h3>
          <p>28 Ideas</p>
        </div>

        <div className="mood-card">
          <h3>🎹 MIDI Exports</h3>
          <p>9 Files</p>
        </div>

      </div>

    </section>
  );
}

export default MoodTracker;