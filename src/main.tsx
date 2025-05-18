import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import AppRouter from "@routes/AppRouter";
import { store } from "@store/store";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
