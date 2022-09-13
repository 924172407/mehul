
import Productgrid from './component/layout/ProductGrid';
import Footer from './component/navbar/Footer';
import Navbar from './component/navbar/index';
import Product from './component/store/Product';
import SwipeableTextMobileStepper from './component/layout/Slider/Slider';
function App() {
  return (
    <>
      <Navbar />
      <SwipeableTextMobileStepper />
      {/* <Product/> */}
      <Productgrid />


      <Footer />
    </>
  );
}

export default App;
