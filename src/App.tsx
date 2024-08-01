import './App.css'
import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Catalog, {ICart} from "./Components/Catalog/Catalog.tsx";
import Services from "./Components/Services/Services.tsx";

function App() {

    const slideData = [
        {
            image: 'images/slider-cart-img-1.png',
            title: 'ВЫСОКАЯ ТОЧНОСТЬ И КАЧЕСТВО',
            text: 'Использование современных технологий и опытных специалистов гарантирует высокое качество и точность всех изделий.',
        },
        {
            image: 'images/slider-cart-img-2.jpg',
            title: 'ВЫСОКАЯ ТОЧНОСТЬ И КАЧЕСТВО',
            text: 'Использование современных технологий и опытных специалистов гарантирует высокое качество и точность всех изделий.',
        },
        {
            image: 'images/slider-cart-img-3.jpg',
            title: 'ВЫСОКАЯ ТОЧНОСТЬ И КАЧЕСТВО',
            text: 'Использование современных технологий и опытных специалистов гарантирует высокое качество и точность всех изделий.',
        },
        {
            image: 'images/slider-cart-img-4.jpg',
            title: 'ВЫСОКАЯ ТОЧНОСТЬ И КАЧЕСТВО',
            text: 'Использование современных технологий и опытных специалистов гарантирует высокое качество и точность всех изделий.',
        },
    ];

    const catalogItems: ICart[] = [
        {
            image: "images/catalog-img-1.png",
            hoverImage: "images/catalog-hover-img-1.png",
            text: "Стильная куртка",
            price: 150,
        },
        {
            image: "images/catalog-img-2.png",
            hoverImage: "images/catalog-hover-img-2.png",
            text: "Модные брюки",
            price: 75,
        },
        {
            image: "images/catalog-img-3.png",
            hoverImage: "images/catalog-hover-img-3.png",
            text: "Удобные кроссовки",
            price: 120,
        },
        {
            image: "images/catalog-img-4.png",
            hoverImage: "images/catalog-hover-img-4.png",
            text: "Удобные кроссовки",
            price: 120,
        },
    ];

    return (
        <div style={{
            background: "#fff6f6",
        }}>
            <Header/>
            <div className="container">
                <Hero title="ALIEV FACTORY" subtitle="Швейное производство "
                      text="Ваш Надежный Партнер: Качество, Которому Можно Доверять"
                      image="https://upload.wikimedia.org/wikipedia/commons/f/fd/Sewing_factory_in_Buryatia.jpg"/>
                <Services slides={slideData}/>
                <Catalog items={catalogItems}/>
                {/*<NewsTicker headlines={['Полный Цикл', 'Качество и Сроки', 'Большие объёмы']}/>*/}
                {/*<AboutUs title="О Нас "*/}
                {/*         text="Швейное производство специализируемое на пошиве третьего слоя:*/}
                {/*                пальто, куртки, пиджаки, ветровки, костюмы классические и не только.*/}
                {/*                Так же производим сегмент второго слоя: футболки, блузки, платья,*/}
                {/*                рубашки, брюки, спортивные костюмы и тд."*/}
                {/*         image="/images/AboutUs.png"/>*/}
                {/*<VideoPlayer videoSrc="/vid.mp4"/>*/}
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
