<template>
  <div class="page">
    <header class="header">
      <div class=" header-container header-container--black">
        <div class="content__layout">
          <div class="content__wrapper">
            <div class="header__left">
              <nav class="nav">
                <a class="nav__link nav__link--active" href="javascript:void(0);"
                  >Каталог активов</a
                >
                <a class="nav__link" href="javascript:void(0);"> Аукционы Портала DA</a>
              </nav>
            </div>
            <div class="header__right">
              <nav class="nav">
                <a class="nav__link" href="javascript:void(0);">О проекте</a>
                <a class="nav__link" href="javascript:void(0);">Блог</a>
                <a class="nav__link" href="javascript:void(0);">Помощь</a>
                <a class="nav__link" href="javascript:void(0);">Контакты</a>
                <select class="select">
                  <option>RU</option>
                </select>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class=" header-container header-container--white">
        <div class="content__layout">
          <div class="content__wrapper">
            <nav class="header-nav">
              <div class="header-nav__left">
                <div class="logo">
                  <a class="brand__logo" href="javascript:void(0);">
                    <img src="../assets/Images/logo-green.svg" alt="" />
                  </a>
                </div>
                <a class="header-nav__link" href="javascript:void(0);"
                  >Купить
                  <img src="../assets/Images/arrow.svg" alt="" />
                </a>
                <a class="header-nav__link" href="javascript:void(0);"
                  >Снять
                  <img src="../assets/Images/arrow.svg" alt="" />
                </a>
                <a class="header-nav__link" href="javascript:void(0);">Сервисы</a>
                <a class="header-nav__link" href="javascript:void(0);">Исследования</a>
              </div>
              <div class="header-nav__right">
                <a class="header-nav--add-asset" href="javascript:void(0);">
                  <img src="../assets/Images/add-round.svg" alt="" />
                  Разместить актив на продажу
                </a>
                <button class="auth">
                  <img src="../assets/Images/enter.svg" />
                  Вход и регистрация
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="search">
        <div class="search__layout">
          <div class="search__wrapper">
            <h1 class="title">Реализация непрофильных и залоговых активов</h1>
            <div class="tabs">
              <a class="tabs__link tabs__link--active" href="javascript:void(0);">Купить</a>
              <a class="tabs__link" href="javascript:void(0);">Снять</a>
            </div>
            <div class="search-bar">
              <div class="input-field">
                <a class="search-bar__link" href="javascript:void(0);">
                  <img src="../assets/Images/catalog-list.svg" alt="" />
                  Тип актива
                </a>
              </div>
              <div class="input-field">
                <a class="search-bar__link" href="javascript:void(0);">
                  <img src="../assets/Images/search.svg" alt="" />
                </a>
                <input
                  type="text"
                  class="search-bar__input"
                  placeholder="Поиск по наименованию, категории или ID актива"
                />
              </div>
              <div class="input-field">
                <a class="search-bar__link" href="javascript:void(0);">
                  <img src="../assets/Images/location.svg" alt="" />
                </a>
                <input type="text" placeholder="Страна, регион, город" />
                <img src="../assets/Images/arrow.svg" alt="" />
              </div>
              <div class="input-field">
                <a class="search-bar__link" href="javascript:void(0);">
                  Стоимость
                  <img src="../assets/Images/arrow.svg" alt="" />
                </a>
              </div>
              <div class="input-field">
                <a class="search-bar__link" href="javascript:void(0);">
                  Тип сделки
                  <img src="../assets/Images/arrow.svg" alt="" />
                </a>
              </div>
              <div class="input-field-button">
                <button class="button" type="submit" name="action">Найти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-section__layout">
        <div class="block-section__wrapper">
          <div class="blocks">
            <div class="cards-line">
              <CardItem
                v-for="(card, index) in cards"
                :key="index"
                :card="card"
                :cardIndex="index"
                @openModal="toggleModal"
              />
              <Modal :show="isShowModal" @close="toggleModal">
                <template #header>
                  <span class="card-modal__header"> Волшебный диалог</span>
                  <span class="card-modal__subheader">Лорем ипсум сит амет и иже с ними</span>
                </template>
                <template #body>
                  <div class="card-modal__value-block">
                    <label class="card-modal__title">Количество активов</label>
                    <input
                      class="card-modal__input"
                      v-model="tempCardValue"
                      @input="changeCurrentCardValue"
                    />
                    <button class="card-modal__random-btn" @click="genCardRandomValue">
                      Рандом
                    </button>
                    <span class="card-modal__tooltip">
                      Укажите количество активов для отображения в карточке.
                    </span>
                  </div>
                </template>
                <template #footer>
                  <div class="card-modal__footer-btns">
                    <button class="card-modal__cancel-btn" @click="cancel">Отменить</button>
                    <button class="card-modal__save-btn" @click="save">Сохранить</button>
                  </div>
                </template>
              </Modal>
            </div>
          </div>
        </div>
        <div class="block-section__layout">
          <div class="block-section__wrapper">
            <div class="seo-text">
              <div class="seo-text__inner">
                <article class="article">
                  <h2 class="article__title">
                    Portal DA – официальный сайт по реализации непрофильных активов и залогового
                    имущества, созданный Сбербанком
                  </h2>
                  <div class="article__left">
                    <h3>
                      На Portal DA размещена информация о реализуемых банками, отраслевыми
                      компаниями, арбитражными управляющими активах:
                    </h3>
                    <ul class="seo-text__list">
                      <li>
                        — залоговое имущество, реализуемое кредиторами (ранее принятое в залог с
                        целью обеспечения исполнения обязательств по кредитным договорам);
                      </li>
                      <li>— непрофильные активы банков и компаний;</li>
                      <li>— активы от собственников, реализуемые в добровольном порядке;</li>
                    </ul>

                    <h3>Портал объединяет активы со всей территории России и за ее пределами.</h3>

                    <p>
                      За каждым активом закреплен менеджер (контактная информация указана в карточке
                      актива), который по запросу может предоставить дополнительную информацию,
                      организовать осмотр и проконсультировать по возможным типам сделки и другим
                      аспектам приобретения.
                    </p>
                  </div>

                  <div class="article__right">
                    <h3>
                      На Портале можно найти необходимый для старта или расширения бизнеса актив по
                      привлекательной стоимости. В базе представлены все типы реальных активов:
                    </h3>
                    <ul class="seo-text__list">
                      <li>
                        — коммерческая недвижимость (торговая недвижимость, склады, офисы, гостиницы
                        и др.)
                      </li>
                      <li>— производственные предприятия;</li>
                      <li>— сельскохозяйственные комплексы;</li>
                      <li>— жилая недвижимость (квартиры, частные дома, апартаменты);</li>
                      <li>— земельные участки;</li>
                      <li>— производственное и торговое оборудование;</li>
                      <li>— транспорт и спецтехника.</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-section__layout">
        <div class="footer-section__wrapper">
          <nav class="footer-nav">
            <a class="footer-nav__link" href="javascript:void(0);">Каталог активов</a>
            <a class="footer-nav__link" href="javascript:void(0);">Аукционы Портала DA</a>
            <a class="footer-nav__link" href="javascript:void(0);">О проекте</a>
            <a class="footer-nav__link" href="javascript:void(0);">Партнёрам</a>
            <a class="footer-nav__link" href="javascript:void(0);">Помощь</a>
            <a class="footer-nav__link" href="javascript:void(0);">Контакты</a>
          </nav>
          <div class="footer__content">
            <div class="footer__logo">
              <img src="../assets/Images/PortalDA-logo.svg" alt="" />
            </div>
            <div class="contacts">
              <span class="contacts__title">Консультация</span>
              <p class="contacts__phone">+7 985 014-33-08</p>
              <a class="contacts__link" href="javascript:void(0);">auction_da@sberbank.ru</a>
            </div>
            <span class="text">Скачайте приложение</span>
            <div class="app">
              <a href="javascript:void(0);" class="app__link">
                <img src="../assets/Images/AppStore.svg" alt="" />
              </a>
              <a href="javascript:void(0);" class="app__link">
                <img src="../assets/Images/GooglePlay.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section__layout">
        <div class="footer-section__wrapper">
          <div class="sub-footer">
            <p class="sub-footer__descr">
              © 2021 Portal DA – Реализация непрофильных и залоговых активов
            </p>
            <a class="sub-footer__link" href="javascript:void(0);">Политика конфиденциальности</a>
            <a class="sub-footer__link" href="javascript:void(0);">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem';
import Modal from '@/components/Modal';
export default {
  components: {
    CardItem,
    Modal,
  },
  data() {
    return {
      cards: [
        {
          title: 'Купить',
          number: 8000,
          descr: 'активов',
          src: require('../assets/Images/pay.svg'),
        },

        {
          title: 'Снять',
          number: 1000,
          descr: 'активов',
          src: require('../assets/Images/rent.svg'),
        },

        {
          title: 'Продать',
          number: 11000,
          descr: 'значений авто',
          src: require('../assets/Images/sell.svg'),
        },

        {
          title: 'Сдать',
          number: 1300,
          descr: 'значений авто',
          src: require('../assets/Images/pass.svg'),
        },
      ],
      activeCardIndex: 0,
      tempCardValue: 0,
      isShowModal: false,
    };
  },

  computed: {
    currentCardValue() {
      return this.cards[this.activeCardIndex].number;
    },
  },

  methods: {
    changeCurrentCardValue(value) {
      return (this.cards[this.activeCardIndex].number = value);
    },
    genCardRandomValue() {
      const min = 0;
      const max = 10000;
      const randomValue = Math.random() * (max - min) + min;
      this.tempCardValue = Math.floor(randomValue);
    },
    toggleModal(cardIndex = 0) {
      this.activeCardIndex = cardIndex;
      this.tempCardValue = this.cards[this.activeCardIndex].number;
      this.isShowModal = !this.isShowModal;
    },
    cancel() {
      this.toggleModal();
    },
    save() {
      this.cards[this.activeCardIndex].number = this.tempCardValue;
      this.toggleModal();
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.card-modal {
  &__header {
    text-align: left;
    display: block;
    font-size: 18px;
    font-weight: 600;
  }

  &__subheader {
    margin-top: 8px;
    text-align: left;
    display: block;
    font-size: 14px;
    color: $secondary;
  }

  &__value-block {
    display: flex;
    flex-wrap: wrap;
  }

  &__input {
    width: 70%;
    outline: none;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid $secondary;
  }

  &__random-btn {
    width: 102px;
    margin-left: 17px;
    height: 32px;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid #75bd7a;
  }

  &__tooltip {
    font-size: 11px;
    margin-top: 7px;
    color: $secondary;
    padding-bottom: 24px;
  }

  &__title {
    text-align: left;
    width: 100%;
    font-size: 12px;
    color: $title;
  }

  &__footer-btns {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__save-btn {
    background: $primarybtn;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 3px;
    color: $white;
    font-size: 16px;
    width: 138px;
    height: 44px;
    cursor: pointer;
  }

  &__cancel-btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
}
</style>
