import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Context/AuthContextProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import AuthContextProvider from "./Components/Context/AuthContextProvider";

// ReactDOM.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<AuthContextProvider>
// 				<App />
// 			</AuthContextProvider>
// 		</BrowserRouter>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );