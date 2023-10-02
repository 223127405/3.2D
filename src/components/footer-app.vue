<template>
  <footer>
      <div class="footer-content"> 
          <div class="copyright">
              &copy; 2023 ARYAN ARORA
          </div>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/aryan-arora-324964267/" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>

          </div>
      </div> 
  </footer>
</template>

<script>
export default {
  name: 'FooterApp',
};
</script>

<style scoped>

footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-media a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  margin-left: 10px;
}
</style>
