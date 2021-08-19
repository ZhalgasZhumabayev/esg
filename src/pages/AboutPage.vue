<template>
  <div class="about-wrapper">
    <div class="about-mission-wrapper">

      <q-img
        src="../statics/images/about-mission.png"
        alt="img-item"
        class="about-mission-img"
        v-show="this.$q.platform.is.mobile"
      />

      <div class="about-mission-block">
        <div class="about-mission-block-header">Наша миссия:</div>

        <div class="about-mission-block-text">Оказывать поддержку обществу и бизнесу в реализации потенциала и целей устойчивого экологического и экономического развития. Внести в клад в уменьшении углеродного следа Казахстана в планетарном масштабе!!!</div>
      </div>
    </div>

    <div class="about-goals-wrapper">
      <div class="about-goals-header">Наши задачи</div>

      <div class="about-goals-text-wrapper" v-for="item in goals" :key="item">
        <q-img
          src="../statics/images/icons/about-tick-icon.svg"
          class="about-goals-text-icon"
        />

        <div class="about-goals-text">{{ item }}</div>
      </div>
    </div>

    <div class="about-task-wrapper" :class="{ 'row' : this.$q.platform.is.desktop}">
      <div class="about-task-header text-white" :class="{ 'col-6' : this.$q.platform.is.desktop}">Наши цели:</div>
      <div class="about-task-text-bold bg-white text-black" :class="{ 'col-6' : this.$q.platform.is.desktop}">Цели в области устойчивого развития являются своеобразным призывом к действию, исходящим от всех стран — бедных, богатых и среднеразвитых. Он нацелен на улучшение благосостояния и защиту нашей планеты. Государства признают, что меры по ликвидации бедности должны приниматься параллельно усилиям по наращиванию экономического роста и решению целого ряда вопросов в области образования, здравоохранения, социальной защиты и трудоустройства, а также борьбе с изменением климата и защите окружающей среды.</div>
      <div class="about-task-text " :class="{ 'col-6 bg-white text-black' : this.$q.platform.is.desktop}">Оказывать поддержку в разработке и реализация низкоуглеводных стратегий<br>
        Формирование и управление компетенциями по декарбонизации<br>
        Развитие диалоговой площадки между членами Ассоциации, партнерами, государственными органами и всеми заинтересованными сторонами в ограничении выбросов парниковых газов.<br>
        Реализация Климатических проектов<br>
        Привлечение зелёных инвестиций для декарбонизации Компаний направленных на низко углеродное развитие
      </div>
      <div class="about-task-goals" :class="{ 'col-6 text-white' : this.$q.platform.is.desktop}">Цель 11. Обеспечение открытости, безопасности, жизнестойкости и экологической устойчивости городов и населенных пунктов<br><br>
        Цель 12. Обеспечение перехода к рациональным моделям потребления и производства<br><br>
        Цель 13. Принятие срочных мер по борьбе с изменением климата и его последствиями
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        goals: [
          'Принимать участие в рабочих группах законопроектов и разработке НПА',
          'Проводить круглые столы, конференции',
          'Публиковать кейсы, материалы по декарбонизации',
          'Оказывать поддержку в разработке проектов низко углеродного развития',
          'Оказывать поддержку по внедрению планов по снижению углеродного следа',
          'Проведение анализа и оценки углеродного следа товаров',
          'Внедрение механизмов декарбонизации при закупках.'
        ]
      }
    }
  }
</script>
