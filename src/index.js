import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import MainView from "./actions/main-view/main-view";
import { legacy_createStore as createStore } from "redux";
import todos from "./reducers/index";
import { addTodo, toggleTodo, } from "./actions";
import "./index.scss";


const store = createStore(todos);

console.log('Initial STate', store.getState());

store.dispatch(addTodo('Dispatch my first action'));
console.log('State after adding first todo', store.getState());

store.dispatch(toggleTodo(0));
console.log('State after toggling first todo', store.getState());


function App() {
    return < MainView />
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(< App />);