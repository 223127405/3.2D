<template>
    <div>
      <h2>Blog Page</h2>
  
      <!-- Display the list of blogs -->
      <div v-for="(blog, index) in blogs" :key="index" class="blog-item">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.content }}</p>
  
        <!-- Show edit and delete buttons if isAdminLoggedIn -->
        <div v-if="isAdminLoggedIn" class="admin-buttons">
          <button @click="editBlog(index)">Edit</button>
          <button @click="deleteBlog(index)">Delete</button>
        </div>
      </div>
  
      <!-- Add Blog button (only visible if isAdminLoggedIn) -->
      <div v-if="isAdminLoggedIn" class="admin-buttons">
        <button @click="addBlog">Add Blog</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [],
      };
    },
    computed: {
      isAdminLoggedIn() { 
        return this.$store.getters.isAdminLoggedIn;
      }, 
    },
    methods: {
      addBlog() {
        const newBlog = {
          title: "New Blog",
          content: "uhh la la la le lo ",
        };
        this.blogs.push(newBlog);
      },
      editBlog(index) {
        const updatedContent = prompt("Edit content:", this.blogs[index].content);
        if (updatedContent !== null) {
          this.blogs[index].content = updatedContent;
        }
      },
      deleteBlog(index) {
        if (confirm("Are you sure you want to delete this blog?")) {
          this.blogs.splice(index, 1);
        }
      },
    },
    created() {
      // Preload initial blogs when admin is logged in
      if (this.isAdminLoggedIn) {
        this.blogs = [
          { title: "First Blog", content: "Content for the first blog." },
          { title: "Second Blog", content: "Content for the second blog." },
        ];
      }
    },
  };
  </script>
  
  <style scoped>
  .blog-item {
    margin-bottom: 20px;
  }
  
  .admin-buttons button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .admin-buttons button:hover {
    background-color: #0056b3;
  }
  
  .admin-buttons {
    text-align: center;
  }
  </style>
  