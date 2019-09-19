<template>
  <div class="animated fadeIn">
    Page 2
  </div>
</template>

<script>
export default {
  name: "more",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
