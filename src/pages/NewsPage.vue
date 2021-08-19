<template>
  <div>
    <q-img
      :src="getImgUrl(newsInfo.img)"
      alt="img-item"
      class="news-img"
    >
      <template v-slot:loading>
        <div class="text-green">
          <q-spinner-ios />
          <div class="q-mt-md">Loading...</div>
        </div>
      </template>
    </q-img>

    <div class="news-body">

      <div class="news-arrow-wrapper" @click="$router.replace('/')">
        <div class="news-arrow">
          <svg class="news-arrow-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12L3 12" stroke="white" stroke-width="2"/>
            <path d="M9 6L3 12L9 18" stroke="white" stroke-width="2"/>
          </svg>
        </div>
      </div>

      <div class="news-text-wrapper">
        <div class="news-body-title">{{ newsInfo.title }}</div>

        <div class="news-body-text">{{ newsInfo.text }}</div>
      </div>
    </div>

    <div class="news-date-wrapper">
      <div class="news-date">{{ newsInfo.date }}</div>
    </div>
  </div>
</template>

<script>
  import News from '../statics/data/news.json';

  export default {
    name: 'NewsPage',
    data (){
      return{
        news: JSON.parse(JSON.stringify(News)),
        newsInfo: {
          id: '',
          title: '',
          text: '',
          img: 'img_001.jpg',
          date: ''
        }
      }
    },
    created() {
      this.id = this.$route.params.id;
    },
    methods: {
      getData(id) {
        for (const news_id in this.news){
          if (this.news[news_id].id == id){
            this.newsInfo = this.news[news_id];
          }
        }
      },
      getImgUrl(pic) {
        return require('../statics/images/' + pic)
      }
    },
    mounted() {
      this.getData(this.id);
    }
  }
</script>
