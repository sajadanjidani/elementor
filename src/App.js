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

  const itemDescripInfo = [
    {id: 1, title: 'ابزارک های اختصاصی', subTitle: 'با ابزارک های اختصاصی نسخه پرو المنتور، میتوانید صفحات با کیفیت تری نسبت به سایر صفحه ساز ها ، طراحی و پیاده سازی کنید!با ابزارک های اختصاصی نسخه پرو المنتور، میتوانید صفحات با کیفیت تری نسبت به سایر صفحه ساز ها ، طراحی و پیاده سازی کنید!', fetch1: 'تنوع بی‌نظیر ابزارک‌ها', fetch2: 'سفارشی‌سازی بی‌نهایت', fetch3: 'کارایی و سرعت بالا', fetch4: 'سازگاری با سایر افزونه‌ها', fetch5: 'رابط کاربری آسان و شهودی', fetch6: 'بهینه‌سازی برای موتورهای جستجو'},
    {id: 2, title: 'پوسته ساز حرفه ای', subTitle: 'یک پوسته‌ساز حرفه‌ای ابزاری قدرتمند است که به شما امکان می‌دهد بدون نیاز به دانش برنامه‌نویسی، وب‌سایت‌های حرفه‌ای و سفارشی‌سازی شده ایجاد کنید. این ابزارها با ارائه طیف گسترده‌ای از ویژگی‌ها و امکانات، فرآیند طراحی و توسعه وب‌سایت را بسیار ساده‌تر و سریع‌تر می‌کنند. در ادامه به برخی از مهم‌ترین ویژگی‌های یک پوسته‌ساز حرفه‌ای اشاره می‌کنیم:', fetch1: 'بهینه‌سازی برای موتورهای جستجو (SEO)', fetch2: 'پشتیبانی و بروزرسانی', fetch3: 'پاسخگویی و سازگاری با دستگاه‌های مختلف', fetch4: 'تنوع گسترده عناصر و ماژول‌ها', fetch5: 'سفارشی‌سازی پیشرفته', fetch6: 'رابط کاربری بصری و آسان'},
    {id: 3, title: 'قرار دادن شرط پوسته ساز', subTitle: 'با استفاده از این قابلیت می‌توانید کنترل کاملی روی نمایش بخش‌های مختلف سایت داشته باشید و تجربه کاربری حرفه‌ای‌تری را برای بازدیدکنندگان فراهم کنید. شرط‌های نمایش المنتور پرو یکی از قوی‌ترین ابزارهایی است که برای شخصی‌سازی قالب‌ها بدون نیاز به کدنویسی هست', fetch1: 'نوع نوشته‌های سفارشی', fetch2: 'برای صفحه ووکامرس', fetch3: 'صفحات آرشیو', fetch4: 'تنوع گسترده عناصر و ماژول‌ها', fetch5: 'سفارشی‌سازی پیشرفته', fetch6: 'رابط کاربری بصری و آسان'}
  ]

  return (
    <div className='orginContainer'>
      <Navbar></Navbar>
      <Header></Header>
      <Gadgets></Gadgets>
      <SectionBannerOne></SectionBannerOne>
      <AboutSection>
        <div className='sectionItemContainer'>
          <SectionItem {...sectionItemInfo[0]} />
          <SectionItem {...sectionItemInfo[1]} />
        </div>
        <ItemDescrip {...itemDescripInfo[0]}/>
      </AboutSection>
      <AboutSection>
        <ItemDescrip {...itemDescripInfo[1]}/>
        <div className='sectionItemContainer'>
          <SectionItem {...sectionItemInfo[2]} />
          <SectionItem {...sectionItemInfo[3]} />
        </div>
      </AboutSection>
      <AboutSection>
        <div className='sectionItemContainer'>
          <SectionItem {...sectionItemInfo[4]} />
          <SectionItem {...sectionItemInfo[5]} />
        </div>
        <ItemDescrip {...itemDescripInfo[2]}/>
      </AboutSection>
    </div>
  );
}

export default App;
