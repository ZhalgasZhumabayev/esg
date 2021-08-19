<template>
  <q-page class="flex flex-center">
    <div class="index-banner-wrapper">
      <div class="index-banner-block">ОЮЛ «Ассоциация устойчивого развития – ESG и углеродный след Казахстана»</div>
    </div>

    <div class="index-news-wrapper">
      <div class="index-news-header-wrapper">
        <div class="index-news-header-text">Новости</div>

<!--        <div class="index-news-header-more-wrapper">-->
<!--          <div class="index-news-header-more-text">-->
<!--            Все новости-->

<!--            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path d="M1.6665 1L5.6665 5L1.6665 9" stroke="black" stroke-width="2"/>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
      </div>

      <div
        v-for="n in news"
        :key="n.id"
        class="index-news-item-wrapper"
        @click="$router.replace('/news/' + n.id)"
      >
        <img
          :src="getImgUrl(n.img)"
          alt="img-item"
          class="index-news-item-img"
        />

        <div class="index-news-item-block">
          <div class="index-news-item-block-header">{{ n.title }}</div>
          <div v-show="this.$q.platform.is.desktop" class="index-news-item-block-text">{{ n.text[0] }}</div>
        </div>

        <div class="index-news-item-date"><span>{{ n.date }}</span></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import News from '../statics/data/news.json';

export default {
  name: 'PageIndex',
  data () {
    return {
      news: JSON.parse(JSON.stringify(News)),
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../statics/images/' + pic)
    }
  }
}
</script>
