<template>
  <div class="partners-item-wrapper">

    <q-card v-for="item in partners" :key="item.id" class="partners-item" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
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
            name: 'SFDFDS',
            text: 'dsfgsdfhhfdh',
            img: ''
          },
          {
            id: 2,
            name: 'SFDFDS',
            text: 'dsfgsdfhhfdh',
            img: ''
          },
          {
            id: 3,
            name: 'SFDFDS',
            text: 'dsfgsdfhhfdh',
            img: ''
          },
          {
            id: 4,
            name: 'SFDFDS',
            text: 'dsfgsdfhhfdh',
            img: ''
          },
          {
            id: 5,
            name: 'SFDFDS',
            text: 'dsfgsdfhhfdh',
            img: ''
          },

        ]
      }
    }
  }
</script>
