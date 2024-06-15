import './App.css'
import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import NewsTicker from "./Components/NewsTicker/NewsTicker.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";
import YouTubePlayer from "./Components/YouTubePlayer/YouTubePlayer.tsx";
import Services from "./Components/Services/Services.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {

    const slideData = [
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
            title: 'Услуга 1',
            text: 'Описание услуги 1. Эта услуга включает в себя ...',
        },
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
            title: 'Услуга 2',
            text: 'Описание услуги 2. Эта услуга включает в себя ...',
        },
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
            title: 'Услуга 3',
            text: 'Описание услуги 3. Эта услуга включает в себя ...',
        },
    ];

    const productData = [
        {
            image: 'https://via.placeholder.com/400x200.png?text=Product+1',
            title: 'Изделие 1',
            description: 'Описание изделия 1. Это изделие ...',
        },
        {
            image: 'https://via.placeholder.com/400x200.png?text=Product+2',
            title: 'Изделие 2',
            description: 'Описание изделия 2. Это изделие ...',
        },
        {
            image: 'https://via.placeholder.com/400x200.png?text=Product+3',
            title: 'Изделие 3',
            description: 'Описание изделия 3. Это изделие ...',
        },
        {
            image: 'https://via.placeholder.com/400x200.png?text=Product+4',
            title: 'Изделие 4',
            description: 'Описание изделия 4. Это изделие ...',
        },
        {
            image: 'https://via.placeholder.com/400x200.png?text=Product+5',
            title: 'Изделие 5',
            description: 'Описание изделия 5. Это изделие ...',
        },
        {
            image: 'https://via.placeholder.com/400x200.png?text=Product+6',
            title: 'Изделие 6',
            description: 'Описание изделия 6. Это изделие ...',
        },
    ];


    return (
        <div>
            <Header/>
            <div className="container">
                <Hero title="text" subtitle="subtext"
                      image="https://upload.wikimedia.org/wikipedia/commons/f/fd/Sewing_factory_in_Buryatia.jpg"/>
                <NewsTicker headlines={['Полный Цикл', 'Качество и Сроки', 'Большие объёмы']}/>
                <AboutUs title="Lorem" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad in nam nisi non obcaecati, odit perferendis provident reprehenderit saepe tempora. Animi aperiam aut cum exercitationem facere harum id iste minima molestias necessitatibus nulla, obcaecati omnis optio quaerat quasi temporibus vitae."
                         image="https://upload.wikimedia.org/wikipedia/commons/f/fd/Sewing_factory_in_Buryatia.jpg"/>
                <YouTubePlayer videoId="2RypcGQKa-g"/>
                <Services slides={slideData} products={productData} />
                <Footer
                    phoneNumber="+7 (123) 456-7890"
                    email="example@example.com"
                    city="Москва"
                    address="ул. Примерная, д. 123"
                    postalCode="123456"
                />
            </div>
        </div>

    )
}

export default App
