import { render } from "@builder.io/qwik";
import "./index.css";
import { App } from "./root.tsx";

render(document.getElementById("app") as HTMLElement, <App />);
