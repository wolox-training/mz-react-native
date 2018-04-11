import React from "react";
import ReactDOM from "react-dom";
import App from "./app/screens/App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();