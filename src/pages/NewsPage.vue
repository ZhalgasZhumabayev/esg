<template>
  <div>
    <q-img
      src="../statics/images/img_001.jpeg"
      alt="img-item"
      class="news-img"
    />

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
        <div class="news-body-title">Корпорация Экополис: Поздравляем с наступающим Днём металлурга!</div>

        <div class="news-body-text">Это профессиональный праздник тех, чей труд является основой большинства производственных процессов, поскольку без результатов работы металлургов не может обойтись ни одно крупное предприятие современной экономики.</div>
      </div>
    </div>

    <div class="news-date-wrapper">
      <div class="news-date">20-45-8495</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsPage',
  }
</script>
