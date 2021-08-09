<template>
  <q-header
    :class="{ background: transparency }"
    class="header-wrapper"
  >
    <q-toolbar class="header-toolbar">
      <q-toolbar-title>
        <q-avatar>
          <img src="../statics/images/logo.png">
        </q-avatar>
        ESG

        <div class="header-nav">
          <a href="#/about" class="header-nav-item">О нас</a>
          <a href="#/esg" class="header-nav-item">ESG</a>
          <a href="#/law" class="header-nav-item">Перечень НПА</a>
          <a href="#/partners" class="header-nav-item">Партнеры</a>
          <a href="#/contacts" class="header-nav-item">Контакты</a>
        </div>

        <div class="header-contacts">
          <div class="header-contacts-phone">+7 7172 57 32 49</div>

          <div class="header-contacts-email">test@test.com</div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      transparency: Boolean,
    }
  }
</script>

<style>
  .background {
    background: linear-gradient(180deg, #0C0E16 0%, rgba(12, 14, 22, 0) 63.54%);
  }
</style>
