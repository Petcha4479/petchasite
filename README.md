<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Интернет магазин</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet">
    <link rel="stylesheet" href="dist/css/style.min.css">
</head>

<body>
<div class="content">
    <div class="container">
        <header class="header">
            <img src="images/logo/headerLogo.svg" alt="логотип">
            <input class="header__input" type="text" id="name" placeholder="Поиск">
            <nav class="menu">
                <ul>
                    <li class="menu__item"><a href="catalog.html">Каталог</a></li>
                    <li class="menu__item"><a href="cart.html">Корзина</a></li>
                    <li class="menu__item-icon"><a>
                        <svg width="19" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_310_614)">
                                <path d="M5.7515 2.99141C4.59282 4.14838 3.91891 5.70363 3.86709 7.34023C3.81528 8.97682 4.38946 10.5716 5.47264 11.7995C6.55581 13.0275 8.06645 13.7962 9.69672 13.9491C11.2973 14.0991 12.8949 13.6444 14.1757 12.6766L17.5069 16.0085L17.5069 16.0085C17.5897 16.0914 17.6881 16.1571 17.7963 16.2019C17.9046 16.2468 18.0206 16.2698 18.1377 16.2698C18.2549 16.2698 18.3709 16.2468 18.4791 16.2019C18.5873 16.1571 18.6857 16.0914 18.7685 16.0085C18.8514 15.9257 18.9171 15.8274 18.9619 15.7191C19.0068 15.6109 19.0298 15.4949 19.0298 15.3777C19.0298 15.2606 19.0068 15.1446 18.9619 15.0363C18.9171 14.9281 18.8514 14.8298 18.7685 14.7469L18.7685 14.7469L15.4368 11.416C16.4021 10.135 16.8547 8.53846 16.7038 6.93943C16.5501 5.31054 15.7816 3.80139 14.5547 2.719C13.3277 1.63662 11.7345 1.06232 10.0992 1.11292C8.46381 1.16352 6.90917 1.83523 5.7515 2.99141ZM5.7515 2.99141L5.82216 3.06217L5.7515 2.99141ZM13.5895 4.25366C14.0271 4.68416 14.3751 5.19703 14.6135 5.76269C14.8518 6.32835 14.9758 6.93561 14.9783 7.54944C14.9808 8.16327 14.8618 8.77152 14.628 9.3391C14.3943 9.90669 14.0505 10.4224 13.6164 10.8564C13.1824 11.2905 12.6667 11.6343 12.0991 11.868C11.5315 12.1018 10.9233 12.2208 10.3094 12.2183C9.6956 12.2158 9.08834 12.0918 8.52268 11.8535C7.95702 11.6151 7.44415 11.2671 7.01365 10.8295C6.15334 9.95509 5.67341 8.77613 5.6784 7.54944C5.6834 6.32275 6.17291 5.14773 7.04032 4.28033C7.90772 3.41292 9.08274 2.92341 10.3094 2.91841C11.5361 2.91342 12.7151 3.39335 13.5895 4.25366Z"
                                      fill="white" stroke="white" stroke-width="0.2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_310_614">
                                    <rect width="19" height="19" fill="white" transform="translate(0.800537)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a></li>
                    <li class="menu__item-icon"><a>
                        <svg width="19" height="19" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.800537" y="0.900024" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="0.800537" y="8.21436" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="0.800537" y="15.5286" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="8.11401" y="8.21436" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="8.11401" y="15.5286" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="8.11401" y="0.900024" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="15.4285" y="8.21436" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="15.4285" y="15.5286" width="4.57143" height="4.57143" fill="white"/>
                            <rect x="15.4285" y="0.900024" width="4.57143" height="4.57143" fill="white"/>
                        </svg>
                    </a></li>
                    <li class="menu__item-icon"><a>
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5834 16.8333C12.1359 16.8333 12.6658 16.6138 13.0566 16.2231C13.4473 15.8324 13.6667 15.3025 13.6667 14.75C13.6667 14.1974 13.4473 13.6675 13.0566 13.2768C12.6658 12.8861 12.1359 12.6666 11.5834 12.6666C11.0309 12.6666 10.501 12.8861 10.1103 13.2768C9.71957 13.6675 9.50008 14.1974 9.50008 14.75C9.50008 15.3025 9.71957 15.8324 10.1103 16.2231C10.501 16.6138 11.0309 16.8333 11.5834 16.8333ZM4.29174 16.8333C4.84428 16.8333 5.37418 16.6138 5.76488 16.2231C6.15558 15.8324 6.37508 15.3025 6.37508 14.75C6.37508 14.1974 6.15558 13.6675 5.76488 13.2768C5.37418 12.8861 4.84428 12.6666 4.29174 12.6666C3.73921 12.6666 3.20931 12.8861 2.81861 13.2768C2.4279 13.6675 2.20841 14.1974 2.20841 14.75C2.20841 15.3025 2.4279 15.8324 2.81861 16.2231C3.20931 16.6138 3.73921 16.8333 4.29174 16.8333ZM17.873 2.16975C18.133 2.16136 18.3796 2.05217 18.5606 1.86525C18.7416 1.67834 18.8428 1.42836 18.8428 1.16819C18.8428 0.908013 18.7416 0.658037 18.5606 0.471123C18.3796 0.28421 18.133 0.175013 17.873 0.166626H16.674C15.7345 0.166626 14.922 0.818709 14.7178 1.73538L13.4126 7.61246C13.2084 8.52912 12.3959 9.18121 11.4563 9.18121H3.63133L2.12924 3.17079H11.8636C12.1212 3.15904 12.3644 3.04844 12.5425 2.86199C12.7206 2.67555 12.82 2.42761 12.82 2.16975C12.82 1.91189 12.7206 1.66395 12.5425 1.47751C12.3644 1.29106 12.1212 1.18046 11.8636 1.16871H2.12924C1.82473 1.16862 1.5242 1.23796 1.25051 1.37145C0.976816 1.50495 0.737162 1.69909 0.549763 1.93911C0.362364 2.17913 0.232155 2.45872 0.169035 2.75662C0.105913 3.05452 0.111544 3.36289 0.185495 3.65829L1.68758 9.66662C1.79586 10.1002 2.046 10.485 2.39821 10.7601C2.75042 11.0351 3.18447 11.1844 3.63133 11.1843H11.4563C12.368 11.1845 13.2524 10.8736 13.9636 10.3032C14.6748 9.73275 15.1701 8.93681 15.3678 8.04683L16.674 2.16975H17.873Z" fill="white"/>
                        </svg>
                    </a></li>
                </ul>
            </nav>
        </header>
        <section class="main">
            <h1>Всё, чего заслуживает ваш дом</h1>
            <p>Наша мебель — ваше отражение</p>
            <a href="catalog.html">Перейти в каталог</a>
        </section>
    </div>
</div>
<div class="catalog">
    <div class="container">
        <h2>Мебель для ... </h2>
        <div class="for">
            <div class="for__item for__item_1 for__item_big">ОТДЫХА</div>
            <div class="for__item for__item_2 for__item_big">РАБОТЫ</div>
            <div class="for__item for__item_3">КУХНИ</div>
            <div class="for__item for__item_4">ДЕТСКОЙ</div>
            <div class="for__item for__item_5">ВАННОЙ</div>
        </div>
    </div>
</div>
<section class="offers">
    <div class="container">
        <h2 class="offers__title">Специальные предложения</h2>
        <div class="cards">
            <article class="card">
                <img class="card__img" src="images/Rectangle22.jpg" alt="Комод">
                <h3 class="card__title">Люстра VODA</h3>
                <span class="card__text">Основание из полированной нержавеющей стали, придает оригинальный
                    парящий
                    эффект.</span>
                <div class="price">
                    <span class="price__card">120 000 руб.</span>
                    <span class="price__card price__card_active">140 000 руб.</span>
                </div>
            </article>
            <article class="card">
                <img class="card__img" src="images/Rectangle23.jpg" alt="Диван">
                <h3 class="card__title">Диван RONALD</h3>
                <p class="card__text">Модель отличается простотой линий и форм, отсутствием броского
                    декора.</p>
                <div class="price">
                    <span class="price__card">156 000 руб.</span>
                    <span class="price__card price__card_active">198 000 руб.</span>
                </div>
            </article>
            <article class="card">
                <img class="card__img" src="images/Rectangle24.jpg" alt="Комод">
                <h3 class="card__title">Комод
                    <VE></VE>
                    NT
                </h3>
                <p class="card__text">Европейский дуб - отличается особой прочностью и стабильностью.</p>
                <div class="price">
                    <span class="price__card">34 000 руб.</span>
                    <span class="price__card price__card_active">45 000 руб.</span>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="products">
    <div class="container">
        <h2 class="products__title">Каталог товаров</h2>
        <div class="products__container">
            <article class="card">
                <img src="images/Rectangle25.jpg" alt="Кроввать Татран">
                <h3 class="card__title">Кровать TATRAN</h3>
                <span class="card__text">Основание из полированной нержавеющей стали, придает оригинальный
                    парящий
                    эффект.</span>
                <span class="card__price">120 000 руб.</span>
            </article>
            <article class="card">
                <img src="images/Rectangle26.jpg" alt="Кресло VILORA">
                <h3 class="card__title">Кресло VILORA</h3>
                <span class="card__text">Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и
                    приятная на ощупь ткань. </span>
                <span class="card__price">21 00 руб.</span>
            </article>
            <article class="card">
                <img src="images/Rectangle27.jpg" alt="Стол MENU">
                <h3 class="card__title">Стол MENU</h3>
                <span class="card__text">Для того чтобы трапезничать было приятно, необходим правильный
                    обеденный
                    стол.</span>
                <span class="card__price">34 000 руб.</span>
            </article>
            <article class="card">
                <img src="images/Rectangle28.jpg" alt="Кресло ASKESTA">
                <h3 class="card__title">Кресло ASKESTA</h3>
                <span class="card__text">Высокоэластичный пенополиуретан в «начинке» кресла надежен и
                    долговечен</span>
                <span class="card__price">68 000 руб.</span>
            </article>
            <article class="card">
                <img src="images/Rectangle29.jpg" alt="Стол NORMAN">
                <h3 class="card__title">Стол NORMAN</h3>
                <span class="card__text">Прекрасно переносит солнечные лучи, перепады влажности и любые
                    осадки</span>
                <span class="card__price">40 000 руб.</span>
            </article>
            <article class="card">
                <img src="images/Rectangle30.jpg" alt="Диван NASTAN">
                <h3 class="card__title">Диван NASTAN</h3>
                <span class="card__text">Модель отличается простотой линий и форм, отсутствием броского
                    декора. </span>
                <span class="card__price">80 000 руб.</span>
            </article>
        </div>
        <div class="products__link">
            <a href="catalog.html">Перейти в каталог</a>
        </div>
    </div>
</section>
<footer class="footer">
    <div class="container">
        <div class="footer__logo">
            <img src="images/logo/footerLogo.svg" alt="логотип">
        </div>
        <div class="element">
            <h4 class="element__title">Меню</h4>
            <div class="element__link"><a href="#">Главная</a></div>
            <div class="element__link"><a href="catalog.html">Каталог</a></div>
            <div class="element__link"><a href="cart.html">Корзина</a></div>
        </div>
        <div class="element">
            <h4 class="element__title">Контакты</h4>
            <div class="element__link"><a href="#">+7 908 800 80 80</a></div>
            <div class="element__link"><a href="#">+help@interier.com</a></div>
            <div class="element__icon">
                <a href="#">
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M23.45 0.948C23.616 0.402 23.45 0 22.655 0H20.03C19.362 0 19.054 0.347 18.887 0.73C18.887 0.73 17.552 3.926 15.661 6.002C15.049 6.604 14.771 6.795 14.437 6.795C14.27 6.795 14.019 6.604 14.019 6.057V0.948C14.019 0.292 13.835 0 13.279 0H9.151C8.734 0 8.483 0.304 8.483 0.593C8.483 1.214 9.429 1.358 9.526 3.106V6.904C9.526 7.737 9.373 7.888 9.039 7.888C8.149 7.888 5.984 4.677 4.699 1.003C4.45 0.288 4.198 0 3.527 0H0.9C0.15 0 0 0.347 0 0.73C0 1.412 0.89 4.8 4.145 9.281C6.315 12.341 9.37 14 12.153 14C13.822 14 14.028 13.632 14.028 12.997V10.684C14.028 9.947 14.186 9.8 14.715 9.8C15.105 9.8 15.772 9.992 17.33 11.467C19.11 13.216 19.403 14 20.405 14H23.03C23.78 14 24.156 13.632 23.94 12.904C23.702 12.18 22.852 11.129 21.725 9.882C21.113 9.172 20.195 8.407 19.916 8.024C19.527 7.533 19.638 7.314 19.916 6.877C19.916 6.877 23.116 2.451 23.449 0.948H23.45Z"
                              fill="#888888"/>
                    </svg>

                </a>
                <a href="#">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2957 0.363004L0.690684 7.57461C-0.0580144 7.91045 -0.311245 8.58298 0.509724 8.94798L5.28271 10.4727L16.8232 3.30353C17.4533 2.85347 18.0984 2.97348 17.5433 3.46858L7.63159 12.4893L7.32024 16.3069C7.60862 16.8964 8.13666 16.8991 8.47348 16.6061L11.2157 13.998L15.9122 17.533C17.003 18.1821 17.5965 17.7632 17.8312 16.5735L20.9117 1.91163C21.2315 0.447168 20.6861 -0.19809 19.2957 0.363004Z"
                              fill="#888888"/>
                    </svg>
                </a>
                <a href="#">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3326 10.7357C9.83979 12.195 9.73122 14.0143 9.60229 18C13.5244 18 16.2319 17.9871 17.6298 16.7014C18.9869 15.3771 19.0005 12.69 19.0005 9.09643C14.7934 9.225 12.873 9.32143 11.3326 10.7357ZM0.00050354 9.09643C0.00050354 12.69 0.014075 15.3771 1.37122 16.7014C2.76907 17.9871 5.47657 18 9.39872 18C9.263 14.0143 9.16122 12.195 7.66836 10.7357C6.128 9.32143 4.20765 9.21857 0.00050354 9.09643ZM9.39872 0C5.48336 0 2.76907 0.0128571 1.37122 1.29857C0.014075 2.62286 0.00050354 5.31 0.00050354 8.90357C4.20765 8.775 6.128 8.67857 7.66836 7.26429C9.16122 5.805 9.26979 3.98571 9.39872 0ZM11.3326 7.26429C9.83979 5.805 9.73122 3.98571 9.60229 0C13.5244 0 16.2319 0.0128571 17.6298 1.29857C18.9869 2.62286 19.0005 5.31 19.0005 8.90357C14.7934 8.775 12.873 8.67857 11.3326 7.26429Z"
                              fill="#888888"/>
                    </svg>
                </a>
            </div>
        </div>
        <form class="form">
            <label class="form__text">Получайте наши новости и обновления</label>
            <input class="form__input" type="email" name="button" id="#" placeholder="Ваш e-mail">
            <button class="form__btn">Подписаться</button>
        </form>
    </div>
</footer>
<script src="src/scripts/main.js"></script>
</body>

</html>
