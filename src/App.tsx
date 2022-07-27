import "./App.css";

import Header from "./appComponents/header";
import LeftMenu from "./appComponents/leftMenu";
import Main from "./appComponents/main";

function App(): JSX.Element {
  return (
    <div className="app">
       <Header />
       <LeftMenu />
       <Main />
    </div>
  );
}

export default App;
