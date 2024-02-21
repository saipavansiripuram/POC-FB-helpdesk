import "./App.css";
import Main from "./components/Main";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
