<template>
  <div class="header">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
    <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
    <router-link to="/resume" class="nav-link">Resume</router-link>
    <router-link to="/blog-post" class="nav-link">Blog</router-link>
    <router-link to="/admin-login" class="nav-link">Admin Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderApp',
};
</script>

<style scoped>
.header {
  background-color: #333;
  padding: 10px;
  color: #fff;
  display: flex;
  justify-content: space-around;
}

.nav-link {
  color: blue; /* Change to blue color */
  text-decoration: none;
  font-size: 16px; /* Set font size */
  margin: 0 10px; /* Add some space around the links */
}

.nav-link-blog {
  color: blue;
  font-size: 16px;
  margin: 0 10px;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
