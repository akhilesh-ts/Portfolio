import Home from "./page/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full bg-dark-bg ">
        <div className="md:w-3/4 p-2 mx-auto">
          <Home />
        </div>
      
      </div>  
    </>
  );
}

export default App;
