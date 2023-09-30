import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { configureStore } from "redux";
import todos from "./components/reducers/index";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./components/actions/index";
import "./index.scss";


const store = configureStore(todos);

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