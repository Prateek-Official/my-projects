import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ProjectLinks from "./components/ProjectLinks";
import { Provider } from "react-redux";
// import appStore from "./components/Todo_List_App/utils/itemsStore";

function App() {
  return (
    // <Provider store={appStore}>
      <div>
        <Header />
        <ProjectLinks />
        {/* <Outlet /> */}
      </div>
    // </Provider>
  );
}

export default App;
