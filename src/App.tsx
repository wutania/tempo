import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://www.instagram.com/tempo__contato/" target="_blank">
          <img src={logo} class="logo" alt="Tempo Contato logo" />
        </a>
      </div>
      <p class="read-the-docs">
        A music & event collective based in Hong Kong curating unique dance
        parties that celebrate life in its purest form. #TempoContato means
        borrowed time in Italian. It reminds us to appreciate the ephemeral
        moments -- to feel music more deeply, to live more passionately, and to
        love more unconditionally.
      </p>
    </>
  );
}

export default App;
