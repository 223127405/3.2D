<template>
  <div class="about-view">
    <div class="fade-in" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false">
      <h2>About Me</h2>
      <p v-if="!isMouseOver">
        I am a dedicated and detail-oriented individual with a strong background
        in customer service and a passion for utilizing technology to enhance
        customer experiences. My studies and previous experiences have equipped
        me with excellent communication skills and the ability to effectively
        address customer inquiries and concerns. I am eager to contribute my
        technical knowledge and collaborative approach to create positive
        outcomes for both clients and the team.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      isMouseOver: false
    };
  }
};
</script>

<style scoped>
.about-view {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.fade-in {
  transition: opacity 0.5s;
}

.fade-in:hover {
  opacity: 0;
}

h2 {
  font-size: 24px;
  margin-top: 20px;
  color: #555;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}
</style>
