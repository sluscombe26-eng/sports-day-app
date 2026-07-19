export default function RegisterForm() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h2>Register Now</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <input placeholder="Mobile Number" />
        <input placeholder="Emergency Contact Name" />
        <input placeholder="Emergency Contact Number" />

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
