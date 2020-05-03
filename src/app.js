import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { initiateAddUsers } from "./actions/users";
import { Provider } from "react-redux";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import "./css/styles.css";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(initiateAddUsers());
  }
  render() {
    return (
      <div className="main-section">
        <Header />
        <UsersList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
