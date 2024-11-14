import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; 

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <Outlet /> {/* Renders the current route's component */}
      </main>
    </div>
  );
};

export default Layout;
