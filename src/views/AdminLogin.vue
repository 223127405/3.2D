<template>
  <div class="admin-login">
    <h2>Admin Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
  login() {
    const adminCredentials = {
      username: 'Aryan',
      password: '1234',
    };

    if (this.username === adminCredentials.username && this.password === adminCredentials.password) {
      this.$store.dispatch('loginAdmin', { username: this.username, password: this.password })
        .then(success => {
          if (success) {
            this.$router.push('/blog-page');
          } else {
            alert('Invalid credentials. Please try again.');
          }
        });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}

};
</script>

<style scoped>
.admin-login {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input {
  padding: 10px;
  width: 100%;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
