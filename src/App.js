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
import FeatureSlider from './component/featuresSlider/featuresSlider';
import CommentSlider from './component/commentSlider/commentSlider';
import BuyItem from './component/buyItem/buyItem';

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
    {id: 3, color: '#572881'}
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
    {id: 6, title: 'بیش از ۱۰۰ ابزارک', content: 'المنتور پرو با ده‌ها ابزارک کاربرپسند، به شما اجازه می‌دهد بدون نیاز به دانش فنی، وبسایتی حرفه‌ای طراحی کنید. از پیچیده‌ترین افکت‌ها تا فروشگاه آنلاین کامل، همه در دسترس شماست.'},
    {id: 7, title: 'ویرایش واکنشگرا', content: 'وبسایت واکنش‌گرا، کلید موفقیت در دنیای دیجیتال امروز است. با طراحی وبسایتی که در هر دستگاهی به بهترین شکل نمایش داده شود، مخاطبان بیشتری را جذب می کند .وبسایتت رو به صورتی طراحی کن که درون هر صفحه نمایش به درستی تنظیم باشه، میتونی واکنشگرا بودن وبسایتت رو درون ۷ تا دستگاه مختلف (دسکتاپ، تبلت و موبایل با سایز های متنوع) امتحان و تعیین کنی.'}
  ]

  const commentInfo = [
    {id: 1, userName: 'سجاد انجیدنی', comment: 'یه پلاگین بی‌نظیره. المنتور پرو دقیقاً همون چیزیه که یه مبتدی برای طراحی حرفه‌ای لازم داره. از پشتیبانی‌شون هم خیلی راضی‌ام؛ حتی برای مشکلات کوچیک هم راهنمایی کامل می‌کنن.'},
    {id: 2, userName: 'محمد لجه ای', comment: 'این افزونه زندگی منو به‌عنوان طراح سایت تغییر داد. هم امکانات فوق‌العاده‌ای داره، هم تیم پشتیبانی همیشه با حوصله کمک می‌کنن تا مشکلات حل بشه.'},
    {id: 3, userName: 'امیر دولت شاهی', comment: 'پشتیبانی المنتور پرو یه جورایی مثل داشتن یه هم‌تیمی هست که همیشه کنارتونه. هم راه‌حل سریع میدن و هم پیشنهادهای بهتری برای بهینه‌سازی سایت میدن.'},
    {id: 4, userName: 'امین فارسی', comment: 'من از افزونه‌های دیگه هم استفاده کرده بودم، ولی هیچ‌کدوم به‌پای المنتور پرو نمی‌رسه. خدمات پس از فروش و تیم پشتیبانی‌شون هم یکی از بهترین‌هاست.'},
  ]

  let isShow = false

  const openAnswerBox = e =>{
    const target = e.target.id;
    if(isShow){
      isShow = false
      document.getElementById('answer1').style.display = 'none'
      document.getElementById('answer2').style.display = 'none'
      document.getElementById('answer3').style.display = 'none'
    }
    if(target == 'qustion1'){
      isShow = true
      document.getElementById('answer1').style.display = 'block'
    }else if(target == 'qustion2'){
      isShow = true
      document.getElementById('answer2').style.display = 'block'
    }else if(target == 'qustion3'){
      isShow = true
      document.getElementById('answer3').style.display = 'block'
    }
  }

  const buyItemInfo = [
    {id: 1, title: 'نسخه سایت راست چین', descript: 'با خرید از سایت راست چین شما به نسخه اورجینال موجود در سایت المنتور و نسخه اختصاصی راست چین مادام العمر دسترسی دارید .', price: 'مبلغ:465 هزار تومان', buyBtn: 'خرید از سایت راست چین'},
    {id: 2, title: 'نسخه انگلیسی', descript: 'می توانید افزونه را از سایت اصلی المنتور تنها با لایسنس یکساله خریداری کنید.', price: 'مبلغ:59 دلار', buyBtn: 'خرید از سایت المنتور'}
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
      <SectionBanner {...sectionBannerColor[1]}>
        <div className='bannerThree'>
          <p>منتظر چی هستی؟!</p>
          <h1>همراه با 6 ماه پشتیبانی رایگان</h1>
          <button>خرید افزونه از راست چین</button>
          <p>افزونه المنتور پرو را با 6 ماه پشتیبانی رایگان تهیه کنید!</p>
        </div>
      </SectionBanner>
      <DescriptFeatures>
        <div className='imagebox'>
          <img className='image6' src='image/imageFeatures/underBanner.jpg'></img>
        </div>
        <div className='content'>
          <ContentDescriptFeatures {...contentDescriptFeaturesInfo[6]}></ContentDescriptFeatures>
        </div>
      </DescriptFeatures>
      <SectionBanner {...sectionBannerColor[2]}>
        <div className='lastBanner'>
          <div className='iconContiner'></div>
          <h1>آنچه مشتریان درباره ما می گویند</h1>
          <div className='commentbox'>
            <div className='slider-track '>
              <CommentSlider {...commentInfo[0]}></CommentSlider>
              <CommentSlider {...commentInfo[1]}></CommentSlider>
              <CommentSlider {...commentInfo[2]}></CommentSlider>
              <CommentSlider {...commentInfo[3]}></CommentSlider>
            </div>
          </div>
        </div>
      </SectionBanner>
      <div id='quetionbox'>
        <div className='contentbox'>
          <h1>سوالات متداول</h1>
          <p>سوالت خودتون رو در این قسمت پیدا  کنید.</p>
        </div>
        {/* لیست سوالات */}
        <div className='listQustion'>
          <div className='listbox'>
            {/* سوال اول */}
            <div id='qustion1' onClick={openAnswerBox} className='listItem titleQustion'>المنتور چه تفاوتی با دیگر صفحه ساز ها دارد؟</div>
            <div id='answer1' className='listItem answerQustion'>المنتور پرو برخلاف بسیاری از صفحه‌سازها که نیاز به برنامه‌نویسی دارند، امکان ایجاد صفحات را بدون دانش کدنویسی فراهم می‌کند؛ و البته با وجود بیش از 300 قالب آماده، المنتور فرصت جذابی برای شخصی‌سازی و طراحی منحصربه‌فرد فراهم می‌کند.</div>
            {/* سوال دوم */}
            <div id='qustion2' onClick={openAnswerBox} className='listItem titleQustion'>با خرید افزونه تا چه زمانی از اپدیت افزونه می توانیم استفاده کنی؟</div>
            <div id='answer2' className='listItem answerQustion'>با خرید افزونه دسترسی مادام العمر به فایل های افزونه خواهید داشت</div>
            {/* سوال سوم */}
            <div id='qustion3' onClick={openAnswerBox} className='listItem titleQustion'>ایا امکان غیر فعال کردن فونت های فارسی وجود دارد؟</div>
            <div id='answer3' className='listItem answerQustion'>بله می توانید تمام فونت ها را بر اساس نیاز فعال و یا غیر فعال کنید.</div>
          </div>
        </div>
      </div>
      <div className='footerContainer'>
        <svg id='svgSea' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	        <path class="elementor-shape-fill" fill='#AF79C0' opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
	        <path class="elementor-shape-fill" fill='#E4D1EA' opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
	        <path class="elementor-shape-fill" fill='#f9f9f9' d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        <div className='mainFotter'>
          <p className='qustText'>منتظر چی هستی؟!</p>
          <h1 className='titleFotter'>ساده ترین راهکار ساخت صفحات سایت</h1>
          <button className='btnFotter'>خرید افزونه  از راست چین</button>
          <p>تخفیف پلکانی برای خرید دوم به بعد</p>
        </div>
      </div>
      <div className='buyItemContainer'>
        <BuyItem></BuyItem>
        <BuyItem></BuyItem>
      </div>
    </div>
  );
}

export default App;
