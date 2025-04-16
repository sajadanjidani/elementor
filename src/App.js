import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gadgets from './component/gadgets/gadgets';
import SectionBannerOne from './component/sectionBannerOne/sectionBannerOne';
import AboutSection from './component/aboutSection/aboutSection';
import SectionItem from './component/sectionItem/sectionItem';
import ItemDescrip from './component/itemDescrip/itemDescrip';

function App() {
  return (
    <div className='orginContainer'>
      <Navbar></Navbar>
      <Header></Header>
      <Gadgets></Gadgets>
      <SectionBannerOne></SectionBannerOne>
      <AboutSection>
        <SectionItem />
        <SectionItem />
        <ItemDescrip />
      </AboutSection>
    </div>
  );
}

export default App;
