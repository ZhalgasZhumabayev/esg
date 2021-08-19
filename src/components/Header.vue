<template>
  <q-header
    :class="{ background: transparency }"
    class="header-wrapper"
  >
    <q-toolbar class="header-toolbar">

      <div v-if="this.$q.platform.is.mobile">
        <q-avatar>
          <img src="../statics/images/logo.png" @click="$router.replace('/')">
        </q-avatar>

        <div class="header-contacts-phone">+7 7172 57 32 49</div>

        <q-btn class="header-menu" flat @click="drawerRight = !drawerRight" round dense icon="menu" />

        <q-drawer
          side="right"
          v-model="drawerRight"
          show-if-above
          bordered
          :width="320"
          :breakpoint="500"
          class="header-drawer"
        >
          <q-scroll-area class="fit">
            <div class="header-drawer-wrapper">
              <div class="header-drawer-close" @click="drawerRight = false">
                <q-img
                  src="../statics/images/icons/cross-icon.svg"
                  alt="cross"
                  class="header-drawer-close-icon"
                />
              </div>

              <div class="header-drawer-block">
                <a href="#/about" class="header-nav-item">О нас</a>
                <q-separator class="header-nav-item-separator"/>
                <a href="#/esg" class="header-nav-item">ESG</a>
                <q-separator class="header-nav-item-separator"/>
                <a href="#/law" class="header-nav-item">Перечень НПА</a>
                <q-separator class="header-nav-item-separator"/>
                <a href="#/partners" class="header-nav-item">Партнеры</a>
                <q-separator class="header-nav-item-separator"/>
                <a href="#/contacts" class="header-nav-item">Контакты</a>
              </div>
            </div>
          </q-scroll-area>
        </q-drawer>
      </div>

      <q-toolbar-title v-else>
        <q-avatar>
          <img src="../statics/images/logo.png" @click="$router.replace('/')">
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
    },
    data (){
      return{
        drawerRight: false
      }
    }
  }
</script>

<style>
  .background {
    background: linear-gradient(180deg, #0C0E16 0%, rgba(12, 14, 22, 0) 63.54%);
  }
</style>
