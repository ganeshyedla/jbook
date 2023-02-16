import ReactDOM from "react-dom/client";
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import { store } from "./state";

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
