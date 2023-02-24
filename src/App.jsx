import "./style.css";

function App() {
  const fontSize = 10 + 4 - (2 / 2) * 15;
  const color = "green";

  return (
    <h1 style={{ color: "red", fontSize, background: color }}>Hello world!</h1>
  );
}

export default App;
