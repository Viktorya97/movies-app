import './App.css';
import SidebarMenu from './components/sidebar-menu/SidebarMenu';
import HomePage from './pages/home/HomePage';
import {menuItems, profileInfo} from './constants/Constants';
import 'swiper/swiper-bundle.css';


function App() {
  return (
      <div className={'app__layout'}>
        <SidebarMenu menuItems={menuItems} profileInfo={profileInfo} />
        <HomePage />
      </div>
  );
}

export default App;
