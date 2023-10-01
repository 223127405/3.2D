<template>
  <div class="home-view">
    <h2>Welcome to My Portfolio</h2>
    <p>Welcome to my portfolio homepage.</p>
    <router-link to="/about" class="learn-more-link">Learn more about me</router-link>
    <button @click="viewProjects" class="view-projects-button">View Projects</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    viewProjects() {
      this.$router.push('/projects');
    }
  }
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
  background-color: #fff; /* Change this line to set the background color */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.learn-more-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.learn-more-link:hover {
  background-color: #0056b3;
}

.view-projects-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-projects-button:hover {
  background-color: #218838;
}
</style>
