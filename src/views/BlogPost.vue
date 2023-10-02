<template>
  <div class="page-content">
    <div v-if="isAdmin">
      <h2>Add New Blog</h2>
      <form @submit.prevent="addBlog">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" v-model="newBlog.title" required /> 
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea v-model="newBlog.content" required></textarea>
        </div> 
        <button class="btn">Create</button>
      </form>
    </div>

    <h2>All Blogs</h2>
    <ul>
      <li v-for="blog in blogs" :key="blog.id" @click="viewBlog(blog.id)">
        <h3>{{ blog.title }}</h3>
      </li>
    </ul>

    <div v-if="selectedBlog">
      <h2>{{ selectedBlog.title }}</h2>
      <p>{{ selectedBlog.content }}</p>
      <button v-if="isAdmin" class="btn" @click="editBlog(selectedBlog.id)">Edit</button>
      <button v-if="isAdmin" class="btn" @click="deleteBlog(selectedBlog.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      isAdmin: false,
      blogs: [
        { id: 1, title: 'First Blog', content: 'This is the content of the first blog.' },
        { id: 2, title: 'Second Blog', content: 'This is the content of the second blog.' },
      ],
      newBlog: { title: '', content: '' },
      selectedBlog: null,
    };
  },
  methods: {
    addBlog() {
      const id = generateUniqueId();
      this.blogs.push({ id, ...this.newBlog });
      this.newBlog = { title: '', content: '' };
    },
    editBlog(blogId) {
      this.selectedBlog = this.blogs.find(blog => blog.id === blogId);
    },
    deleteBlog(blogId) {
      this.blogs = this.blogs.filter(blog => blog.id !== blogId);
      this.selectedBlog = null;
    },
    viewBlog(blogId) {
      this.selectedBlog = this.blogs.find(blog => blog.id === blogId);
    },
  },
};

function generateUniqueId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
</script>

<style scoped>
.page-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.btn {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button.btn:hover {
  background-color: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  cursor: pointer;
}

h2, h3, p {
  color: #333;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
}

p {
  color: #555;
}
</style>
