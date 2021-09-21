<template>
  <div v-if="show" class="simple-modal">
    <div class="simple-modal__backdrop">
      <div class="simple-modal__container">
        <div class="simple-modal__header">
          <slot name="header">
            Modal title
          </slot>
          <button class="simple-modal__close-btn" @click="closeModal">
            <img src="../assets/Images/close.svg" alt="" />
          </button>
        </div>
        <div class="simple-modal__body">
          <slot name="body">
            Modal body
          </slot>
        </div>
        <div class="simple-modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.simple-modal {
  &__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s ease;
    z-index: 9999;
  }

  &__container {
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  &__header {
    padding-left: 24px;
    padding-top: 22px;
    padding-bottom: 19px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06);
    border-radius: 4px 4px 0px 0px;
  }

  &__body {
    padding-top: 28px;
    padding-left: 27px;
    padding-right: 25px;
  }

  &__close-btn {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 17px;
    right: 17px;
  }

  &__footer {
    margin-top: 50px;
    padding: 24px;
    background-color: #f3f4f6;
  }
}
</style>
