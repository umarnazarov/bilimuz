import Header from './components/Header'
import About from './components/About'
import Infos from "./components/Info"
import Stuffs from "./components/Stuffs"
import Comerce from "./components/Comerce"
import Footer from "./components/Footer"
import { info1, info2 } from "./infos"
function App() {
  return (
    <>
      <Header />
      <About />
      <Infos props={info1} />
      <Stuffs />
      <Infos props={info2} />
      <Comerce />
      <Footer />
    </>
  );
}

export default App;
