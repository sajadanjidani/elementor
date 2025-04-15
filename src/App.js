import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gadgets from './component/gadgets/gadgets';
import SectionBannerOne from './component/sectionBannerOne/sectionBannerOne';
import SectionItem from './component/sectionItem/sectionItem';

function App() {
  return (
    <div className='orginContainer'>
      <Navbar></Navbar>
      <Header></Header>
      <Gadgets></Gadgets>
      <SectionBannerOne></SectionBannerOne>
      <SectionItem></SectionItem>
    </div>
  );
}

export default App;
