import './App.css'
import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import NewsTicker from "./Components/NewsTicker/NewsTicker.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.tsx";
import Services from "./Components/Services/Services.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {

    const slideData = [
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
            title: 'ВЫСОКАЯ ТОЧНОСТЬ И КАЧЕСТВО',
            text: 'Использование современных технологий и опытных специалистов гарантирует высокое качество и точность всех изделий.',
        },
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
            title: 'КОМПЛЕКСНЫЙ ПОДХОД',
            text: 'Полный спектр услуг, обеспечивающий удобство и эффективность взаимодействия с заказчиками.',
        },
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
            title: 'ГАРАНТИЯ КАЧЕСТВА',
            text: 'Строгий контроль на каждом этапе производства и использование только высококачественных материалов.',
        },
    ];

    const productData = [
        {
            image: '/images/serv1.jpg',
            title: 'КОНСТРУИРОВАНИЕ',
            description: 'Мы создаём точные и профессиональные лекала для вашего изделия, учитывая все ваши пожелания и спецификации.',
        },
        {
            image: '/images/serv2.jpg',
            title: 'ПОШИВ ОБРАЗЦА',
            description: 'Изготовление первого образца изделия для проверки конструкции, материалов и общего вида.',
        },
        {
            image: '/images/serv3.jpg',
            title: 'ДОРАБОТКА ПОСАДКИ',
            description: 'Коррекция и улучшение посадки изделия на основе результатов примерки и ваших замечаний.',
        },
        {
            image: '/images/serv4.jpg',
            title: 'ПОШИВ ПАРТИИ',
            description: 'Массовое производство партий одежды с учетом всех технологических требований и стандартов качества.',
        },
        {
            image: '/images/serv5.jpg',
            title: 'КОНТРОЛЬ КАЧЕСТВА',
            description: 'Строгий контроль качества на каждом этапе производства, от выбора материалов до окончательной упаковки.',
        },
        {
            image: '/images/serv6.jpeg',
            title: 'ОТГРУЗКА',
            description: 'Организация логистики и своевременная отгрузка готовой продукции по указанному вами адресу.',
        },
    ];


    return (
        <div style={{
            background: "#fff6f6",
        }}>
            <Header/>
            <div className="container">
                <Hero title="ALIEV" subtitle="Ваш надежный партнер для успешных продаж на маркетплейсах!"
                      image="https://upload.wikimedia.org/wikipedia/commons/f/fd/Sewing_factory_in_Buryatia.jpg"/>
                <NewsTicker headlines={['Полный Цикл', 'Качество и Сроки', 'Большие объёмы']}/>
                <AboutUs title="О Нас "
                         text="Швейное производство специализируемое на пошиве третьего слоя:
                                пальто, куртки, пиджаки, ветровки, костюмы классические и не только.
                                Так же производим сегмент второго слоя: футболки, блузки, платья,
                                рубашки, брюки, спортивные костюмы и тд."
                         image="/images/AboutUs.png"/>
                <VideoPlayer videoSrc="/vid.mp4"/>
                <Services slides={slideData} products={productData}/>
                <Footer
                    phoneNumberWhatsapp="+996708700033"
                    phoneNumberTelegram="+996558700033"
                    email="aliev.factory@gmail.com"
                    address="ул. Алма-Атинская 208"
                    city="г.Бишкек, Киргизия"
                />
            </div>
        </div>

    )
}

export default App
