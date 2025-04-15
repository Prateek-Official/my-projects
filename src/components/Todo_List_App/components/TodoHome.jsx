import TodoContainer from "./TodoContainer";
import { Provider } from "react-redux";
import store from '../../Movie App/utils/store'

const TodoHome = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoContainer />
      </div>
    </Provider>
  );
};

export default TodoHome;
