<template>
  <div class="main">
    <div class="contacts-text-wrapper">
      <div class="contacts-text-header">Контакты</div>

      <div class="contacts-text-city">Нур-Султан</div>

      <div class="contacts-text-address">
        <q-img
          src="../statics/images/icons/contacts-address-icon.svg"
          alt="icon"
          class="contacts-text-icon"
        />

        <div class="contacts-text">"ESG"
          196084,улица Достык 2, БЦ Saad</div>
      </div>

      <div class="contacts-text-phone">
        <q-img
          src="../statics/images/icons/contacts-phone-icon.svg"
          alt="icon"
          class="contacts-text-icon"
        />

        <div class="contacts-text">
          <span class="contacts-text-span">Тел./факс:</span>
          +7 7172 57 32 49
        </div>
      </div>

      <div class="contacts-text-email">
        <q-img
          src="../statics/images/icons/contacts-email-icon.svg"
          alt="icon"
          class="contacts-text-icon"
        />

        <div class="contacts-text">
          <span class="contacts-text-span">Email:</span>
          office@promimpuls.ru
        </div>
      </div>
    </div>

    <div id="map" class="contacts-map-wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: 'Contacts',
    components: {
    },
    data () {
      return{
        coords: [51.128512, 71.407333],
      }
    },
    created() {
      ymaps.ready(() => {
        const map = new window.ymaps.Map("map", {
          center: this.coords,
          zoom: 16,
          controls: []
        })
      })
    }
  }
</script>
