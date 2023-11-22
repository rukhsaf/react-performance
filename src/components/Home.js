import { Link } from 'react-router-dom';
export const HomePage = () =>

  <div>
    <h1>Welcome to Home Page!</h1>
    <Link to ="/productlist">
      <button>View Products</button>
    </Link>

  </div>;
