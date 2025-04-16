import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gadgets from './component/gadgets/gadgets';
import SectionBannerOne from './component/sectionBannerOne/sectionBannerOne';
import AboutSection from './component/aboutSection/aboutSection';
import SectionItem from './component/sectionItem/sectionItem';
import ItemDescrip from './component/itemDescrip/itemDescrip';

function App() {

  const sectionItemInfo = [
    {id: 1, title: 'بیش از 100 ابزارک اختصاصی', subTitle: 'المنتور پرو به شما امکان دسترسی به طیف گسترده‌ای از ابزارک‌های پیشرفته و تخصصی را می‌دهد که در سایر صفحه سازها کمتر یافت می‌شود.', bgIconColor: '#C22155', bgHover: '#FF8264'},
    {id: 2, title: 'سرعت بخشیدن به طراحی', subTitle: 'با استفاده از قالب‌های از پیش طراحی شده، دیگر نیازی به ساخت هر بخش از سایت از ابتدا نیست.', bgIconColor: '#C22155', bgHover: '#FF8264'},
    {id: 3, title: '', subTitle: 'انتخاب یک پوسته‌ساز حرفه‌ای می‌تواند به شما در ایجاد وب‌سایت‌های زیبا، کارآمد و حرفه‌ای کمک کند. با توجه به ویژگی‌های ذکر شده، شما می‌توانید پوسته‌ساز مناسب برای پروژه خود را انتخاب کنید.', bgIconColor: '#C22155', bgHover: '#FF8264'},
    {id: 4, title: '', subTitle: 'برخی از پوسته‌سازهای حرفه‌ای به شما اجازه می‌دهند تا قالب‌های سفارشی خود را ایجاد کرده و آن‌ها را ذخیره کنید. این ویژگی به شما امکان می‌دهد تا یک سبک بصری یکپارچه در کل وب‌سایت خود ایجاد کرده و سرعت طراحی را افزایش دهید.', bgIconColor: '#4E2465', bgHover: '#7D9CE9'},
    {id: 5, title: '', subTitle: 'می‌توان قالب‌های متفاوتی را برای دستگاه‌های مختلف (موبایل، تبلت، دسکتاپ) ایجاد کرد. مثال: نمایش یک هدر متفاوت برای کاربران موبایل نسبت به نسخه دسکتاپ.', bgIconColor: '#C22155', bgHover: '#FF8264'},
    {id: 6, title: '', subTitle: 'امکان تنظیم اینکه هدر، فوتر، یا بخش‌های دیگر فقط در صفحات خاصی نمایش داده شوند. مثال: می‌توانید یک هدر سفارشی فقط برای صفحه فروشگاه یا یک فوتر اختصاصی فقط برای وبلاگ ایجاد کنید.', bgIconColor: '#4E2465', bgHover: '#7D9CE9'}
  ]

  return (
    <div className='orginContainer'>
      <Navbar></Navbar>
      <Header></Header>
      <Gadgets></Gadgets>
      <SectionBannerOne></SectionBannerOne>
      <AboutSection>
        <SectionItem {...sectionItemInfo[0]} />
        <SectionItem {...sectionItemInfo[1]} />
        <ItemDescrip />
      </AboutSection>
      <AboutSection>
        <ItemDescrip />
        <SectionItem {...sectionItemInfo[2]} />
        <SectionItem {...sectionItemInfo[3]} />
      </AboutSection>
      <AboutSection>
        <SectionItem {...sectionItemInfo[4]} />
        <SectionItem {...sectionItemInfo[5]} />
        <ItemDescrip />
      </AboutSection>
    </div>
  );
}

export default App;
