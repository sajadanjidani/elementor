import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gadgets from './component/gadgets/gadgets';
import SectionBanner from './component/sectionBanner/sectionBanner';
import AboutSection from './component/aboutSection/aboutSection';
import SectionItem from './component/sectionItem/sectionItem';
import ItemDescrip from './component/itemDescrip/itemDescrip';
import FeatureCard from './component/FeatureCard/FeatureCard';
import DescriptFeatures from './component/descriptFeatures/descriptFeatures';
import ContentDescriptFeatures from './component/contentDescriptFeatures/contentDescriptFeatures';
import FeatureSlider from './component/featuresSlider/featuresSlider'

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

  const sectionBannerColor = [
    {id: 1, color: '#C22155'},
    {id: 2, color: '#85225D'},
  ]

  const FeatureCardInfo = [
    {id: 1, title: 'تاریخ شمسی در ورودی ها'},
    {id: 2, title: 'آیکون های اختصاصی'},
    {id: 3, title: 'ابزارک آپارت'},
    {id: 4, title: 'فونت سفارشی'}
  ]

  const contentDescriptFeaturesInfo = [
    {id: 1, title: 'ابزارک اختصاصی آپارات', content: 'به سادگی ویدیوهای آپارات خود را وارد کرده و آن‌ها را به صورت خودکار در سایت‌تان نمایش دهید. با کنترل کامل و بدون آسیب به سئو'},
    {id: 2, title: 'دارای 17 فونت فارسی', content: `با پشتیبانی از 17 فونت زیبا به شما این امکان را میدهد تا  بدون نیاز به نصب فونت اضافه طراحی سایت خود را حرفه ای تر و چشم نواز تر کنید از فونت های مدرن و رسمی تا سبک فانتزی و جذاب همه در اختیار شماست تا تایپوگرافی را متناسب با برند و سلیقه خود تنظیم کنید.`},
    {id: 3, title: 'فرم اماده', content: 'امکان ایجاد فرم‌های سفارشی بدون نیاز به کدنویسی را فراهم می‌کنند. با استفاده از این ویژگی، می‌توان فرم‌های تماس، ثبت‌نام، ورود، درخواست مشاوره، پرداخت و بسیاری دیگر را به‌راحتی طراحی کرد.'},
    {id: 4, title: 'اسلاید ها', content: 'امکان ایجاد اسلایدرهای جذاب و حرفه‌ای را بدون نیاز به افزونه‌های جانبی فراهم می‌کند. با استفاده از ابزار «Slides» در المنتور پرو، می‌توانید اسلایدهای متنوعی با تصاویر، متون و دکمه‌های قابل تنظیم ایجاد کنید.'},
    {id: 5, title: 'ویرایش با کشیدن و رها کردن', content: 'هر بخشی از وبسایتت رو به صورت دیداری بساز. خیلی ساده با کشیدن و رها کردن ابزارک ها و سفارشی سازی اون ها، .بدون نیاز به دانش کد نویسی، وب‌سایت حرفه‌ای خود را بسازد.'},
    {id: 6, title: 'بیش از ۱۰۰ ابزارک', content: 'المنتور پرو با ده‌ها ابزارک کاربرپسند، به شما اجازه می‌دهد بدون نیاز به دانش فنی، وبسایتی حرفه‌ای طراحی کنید. از پیچیده‌ترین افکت‌ها تا فروشگاه آنلاین کامل، همه در دسترس شماست.'}
  ]

  return (
    <div className='orginContainer'>
      <Navbar></Navbar>
      <Header></Header>
      <Gadgets></Gadgets>
      <SectionBanner {...sectionBannerColor[0]}>
        <h1>طراحی یک وبسایت کاملاً پویا</h1>
        <p>با استفاده از سیستم پوسته‌ساز افزونه المنتور پرو می‌توانید یک وبسایت کاملاً پویا و بهینه طراحی کنید!</p>
      </SectionBanner>
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
      <SectionBanner {...sectionBannerColor[1]}>
        <div className='FeatureCardContainer'>
          <FeatureCard {...FeatureCardInfo[0]}></FeatureCard>
          <FeatureCard {...FeatureCardInfo[1]}></FeatureCard>
          <FeatureCard {...FeatureCardInfo[2]}></FeatureCard>
          <FeatureCard {...FeatureCardInfo[3]}></FeatureCard>
        </div>
      </SectionBanner>
      <DescriptFeatures>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[0]}></ContentDescriptFeatures>
        </div>
        <div className='imagebox'>
          <img className='image' src='image/imageFeatures/1.png'></img>
        </div>
      </DescriptFeatures>
      <DescriptFeatures>
        <div className='imagebox'>
          <img src='image/imageFeatures/2.png'></img>
        </div>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[1]}></ContentDescriptFeatures>
        </div>
      </DescriptFeatures>
      <DescriptFeatures>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[2]}></ContentDescriptFeatures>
        </div>
        <div className='imagebox'>
          <img className='image' src='image/imageFeatures/3.png'></img>
        </div>
      </DescriptFeatures>
      <DescriptFeatures>
        <div className='imagebox'>
          <FeatureSlider></FeatureSlider>
        </div>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[3]}></ContentDescriptFeatures>
        </div>
      </DescriptFeatures>
      <DescriptFeatures>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[4]}></ContentDescriptFeatures>
        </div>
        <div className='imagebox'>
          <img className='image' src='image/imageFeatures/4-5.png'></img>
        </div>
      </DescriptFeatures>
      <DescriptFeatures>
        <div className='imagebox'>
          <img className='image5' src='image/imageFeatures/4-5.png'></img>
        </div>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[5]}></ContentDescriptFeatures>
        </div>
      </DescriptFeatures>
    </div>
  );
}

export default App;
