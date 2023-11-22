import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDesription } from './components/ProductDescription';

const App = () =>
  <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<HomePage/>}/>
      <Route exact path="/productlist" element={<ProductList />}/>
      <Route exact path="/productdescription/:productId" element={<ProductDesription/>}/>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>;

export default App;
