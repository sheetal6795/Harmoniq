function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <h2>Harmoniq 🎵</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <p>Home</p>
        <p>Dashboard</p>
        <p>Profile</p>
      </div>
    </nav>
  );
}

export default Navbar;