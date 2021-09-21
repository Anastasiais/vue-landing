<template>
  <div>
    <div class="card" @click="onCardClick">
      <div class="card__content">
        <span class="card__title">{{ card.title }}</span>
        <span class="card__number-value">{{ card.number }}</span>
        <span class="card__descr">{{ card.descr }}</span>
      </div>
      <img :src="card.src" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onCardClick() {
      this.$emit('openModal', this.cardIndex);
    },
  },
};
</script>

<style>
.card {
  cursor: pointer;
}
</style>
