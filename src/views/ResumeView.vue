<template>
    <div class="resume-view">
      <div class="resume-header">
        <div class="resume-photo">
          <img src="data:image/jpeg;base64,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" alt="Profile Photo" />
        </div>
        <div class="resume-details">
          <h2>Aryan Arora</h2>
          <p>Email: aryanarora235rja.com</p>
          <p>Phone: 0478232218</p>
        </div>
      </div>
  
      <div class="resume-content-container">
        <div class="resume-content">
          <h3>Education</h3>
          <ul>
            <li>
              <b>Bachelor of Information Technology</b><br />
              Deakin University, Burwood<br />
              March/2023 – Expected completion date: November 2025<br />
              Achievements: #c, c++, Python, Java, Html
            </li>
            <li>
              <b>DAV Public School</b><br />
              Amritsar, India<br />
              March/2019 – June/2022<br />
            </li>
          </ul>
        </div>
  
        <div class="resume-content">
          <h3>Employment</h3>
          <ul>
            <li>
              <b>TEAM MEMBER – Dench Bakery</b><br />
              (March 2023 - Present)
              <ul>
                <li>Trained in packaging and labeling.</li>
                <li>Specialized in training and mentoring new hires.</li>
                <li>Managed the inventory.</li>
                <li>Paid attention to detail and took feedback positively.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResumeView',
  };
  </script>
  
  <style scoped>
  .resume-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #f5f5f5;
  }
  
  .resume-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .resume-photo {
    width: 200px;
  }
  
  .resume-photo img {
    width: 100%;
    border-radius: 50%;
  }
  
  .resume-details {
    margin-left: 20px;
    text-align: left;
  }
  
  .resume-content-container {
    display: flex;
  }
  
  .resume-content {
    flex: 1;
    max-width: 400px;
    text-align: left;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin: 0 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #333;
  }
  
  h2 {
    font-size: 36px;
    margin-top: 0;
    color: #333;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 18px;
    margin: 5px 0;
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
  
  b {
    font-weight: bold;
  }
  </style>
  