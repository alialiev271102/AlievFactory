import './App.css'
import Hero from "./Components/Hero/Hero.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Catalog, {ICart} from "./Components/Catalog/Catalog.tsx";
import Carousel from "./Components/Carousel/Carousel.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";
import Services, {IService} from "./Components/Services/Services.tsx";

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
    const services: IService[] = [
        {
            title: "КОНСТРУИРОВАНИЕ",
            description: "Мы создаем точные и  профессиональные лекала  для вашего изделия, учитывая  все ваши пожелания и  спецификации. "
        },
        {
            title: "ПОШИВ ОБРАЗЦА",
            description: "Изготовление первого  образца изделия для  проверки конструкции,  материалов и общего вида. "
        },
        {
            title: "ДОРАБОТКА  ПОСАДКИ",
            description: "Коррекция и улучшение  посадки изделия на основе  результатов примерки и  ваших замечаний"
        },
        {
            title: "ПОШИВ ПАРТИИ",
            description: "Массовое производство  партий одежды с учетом всех  технологических требований  и стандартов качества"
        },
        {
            title: "КОНТРОЛЬ  КАЧЕСТВА",
            description: "Строгий контроль качества на  каждом этапе производства,  от выбора материалов до  окончательной упаковки."
        },
        {
            title: "ОТГРУЗКА",
            description: "Организация логистики и  своевременная отгрузка  готовой продукции по  указанному вами адресу"
        }
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
        {
            image: "images/catalog-img-5.png",
            hoverImage: "images/catalog-hover-img-5.png",
            text: "Удобные кроссовки",
            price: 120,
        },
        {
            image: "images/catalog-img-6.png",
            hoverImage: "images/catalog-hover-img-6.png",
            text: "Удобные кроссовки",
            price: 120,
        },
        {
            image: "images/catalog-img-7.png",
            hoverImage: "images/catalog-hover-img-7.png",
            text: "Удобные кроссовки",
            price: 120,
        },
        {
            image: "images/catalog-img-8.png",
            hoverImage: "images/catalog-hover-img-8.png",
            text: "Удобные кроссовки",
            price: 120,
        },
    ];

    return (
        <div style={{
            background: "#fff6f6",
        }}>
            <div className="container">
                <Hero title="ALIEV" subtitle="Швейное производство "
                      text="Ваш Надежный Партнер: Качество, Которому Можно Доверять"
                      image="images/main-page-img.png"/>
                <AboutUs title="О Нас "
                         text="Швейное производство «Aliev» – это современная и динамично
                                развивающаяся компания, которая за короткий срок
                                зарекомендовала себя как надежный партнер в сфере
                                производства одежды. В компании работает штат из 80
                                сотрудников, под управлением специалистов-технологов из Турции"
                         image="/images/AboutUs.png"/>
                <Carousel slides={slideData}/>
                <Catalog items={catalogItems}/>
                <Services services={services}/>
                {/*<NewsTicker headlines={['Полный Цикл', 'Качество и Сроки', 'Большие объёмы']}/>*/}
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
