import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./component/NavBar/NavBar.js";
import ProductList from "./component/ProductList.js";

function App() {
  return (
    <div>
      <NavBar/>
      <ProductList/>
    </div>
  );
}

export default App;
