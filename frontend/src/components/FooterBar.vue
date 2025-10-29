<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-info">
        <p class="brand">{{ t('footer.rights') }}</p>
        <p class="address">{{ t('footer.address') }}</p>
        <p class="contact">
          {{ t('footer.contactLabel') }}
          <a href="tel:010-5804-0340">010-5804-0340</a> |
          {{ t('footer.emailLabel') }}
          <a href="mailto:jjm102@naver.com">jjm102@naver.com</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fafafa;
  border-top: 1px solid #eee;
  color: #555;
  font-size: 14px;
  padding: 10px 0;
  margin-top: 40px;
  text-align: center;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.footer-info p {
  margin: 6px 0;
}

.brand {
  font-weight: 600;
  color: #222;
}

a {
  color: #1677ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
