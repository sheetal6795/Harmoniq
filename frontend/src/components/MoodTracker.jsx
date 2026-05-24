function MoodTracker() {
  return (
    <section className="mood-section">

      <h2>Your Mood Journey 📊</h2>

      <p className="mood-text">
        Track your emotional well-being and understand your daily patterns.
      </p>

      <div className="mood-cards">

        <div className="mood-card">
          <h3>😊 Happy</h3>
          <p>12 Days</p>
        </div>

        <div className="mood-card">
          <h3>😌 Calm</h3>
          <p>8 Days</p>
        </div>

        <div className="mood-card">
          <h3>😔 Stressed</h3>
          <p>3 Days</p>
        </div>

      </div>

    </section>
  );
}

export default MoodTracker;