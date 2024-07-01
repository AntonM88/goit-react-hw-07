import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
