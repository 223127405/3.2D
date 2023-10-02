<template>
    <div class="contact-view">
      <h2>Contact Information</h2>
      <p>
        Address: Melbourne, Australia<br> 
        Tel: 0478232218<br> 
        Email: aryanarora235rja@gmail.com<br>
        LinkedIn: <a href="https://www.linkedin.com/in/aryan-arora-324964267/" target="_blank">
          
    <i class="fab fa-linkedin"></i>
</a>

      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
  };
  </script>
  
  <style scoped>
  .contact-view {
    padding: 20px;
    text-align: center;
    background-color: #fff; /* Change this line to set the background color */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #333;
  }
  
  .contact-view h2 {
    font-size: 24px;
    color: #333; 
  }
  
  .contact-view p {
    font-size: 16px;
    line-height: 1.5;
    color: #555; 
  }
  
  .contact-view a {
    color: #007BFF;
    text-decoration: none;
  }
  
  .contact-view a:hover {
    text-decoration: underline;
  }
  </style>
