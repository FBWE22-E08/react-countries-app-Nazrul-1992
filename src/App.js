import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header"
function App() {

  return (
    <div className="App">
{/* show the Header component, then add the routes to the pages components*/}
<Header />
<Routes>

<Route path="/allCountries" element={<AllCountries/>}/>
<Route path="/byRegion" element={<ByRegion/>}/>
<Route path="/byName" element={<ByName/>}/>
<Route path='*' element={<div> 404 page not found </div>}/>





</Routes>
    </div>
  );
}

export default App;
