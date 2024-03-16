import Body from "./components/Body";
import appstore from "./utils/appstore.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
