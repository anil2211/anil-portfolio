import ReactDOM from "react-dom/client"; // ✅ use the new client API
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Optional: Keep or remove based on your needs
serviceWorker.unregister();
