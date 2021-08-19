<template>
  <div class="partners-item-wrapper">

    <q-card v-for="item in partners" :key="item.id" class="partners-item" flat bordered>
      <q-img
        :src="getImgUrl(item.img)"
      />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ item.name }}</div>
        <div class="text-caption text-grey">{{ item.text }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: 'Partners',
    data () {
      return {
        partners: [
          {
            id: 1,
            name: 'АО "Универсальная Товарная Биржа "Астана""',
            text: '',
            img: 'partner1.jpeg'
          },
          {
            id: 2,
            name: 'Green Climate Exchange',
            text: '',
            img: 'partner2.jpeg'
          },
        ]
      }
    },
    methods: {
      getImgUrl(pic) {
        return require('../statics/images/' + pic)
      }
    }
  }
</script>
