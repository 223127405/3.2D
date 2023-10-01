<template>
    <div class="projects-view">
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div> 
  </template>
  
  <script>
  import projectsData from '@/projects.json';
  
  export default {
    name: 'ProjectsView',
    data() {
      return {
        projects: projectsData
      };
    }
  };
  </script>
  
  <style scoped>
  .projects-view {
    text-align: left;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #333;
  }
  
  h2 {
    font-size: 24px;
    margin-top: 20px;
    color: #555;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    color: #555;
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    color: #555;
  }
  </style>
  