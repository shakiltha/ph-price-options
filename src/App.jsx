// import DaisyNav from "./components/DaisyNav/DaisyNav";

import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar />
      {/* <DaisyNav /> */}
      <PriceOptions />
      <LineChart />
      <Phones />
    </>
  );
}

export default App;
