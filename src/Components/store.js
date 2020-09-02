import { createStore } from "redux";
import reducer from "./reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: async function () {
    return await reducer().then((data) => {
      return data;
    });
  },
});
const store = createStore(allReducers);
console.log(allReducers.users);
export default store;
