import {
  BrowserRouter as Router,
} from "react-router-dom";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";
import Navbar from "./components/layout/Navbar";
import AuthState from "./context/authentication/authState";

function App() {

  return (
    <AuthState>
      <Router>
          <Navbar/>
          <AnimatedRoutes/>
        </Router>
    </AuthState>
  );
}

export default App;
