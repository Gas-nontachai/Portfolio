<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-left">
                <span>{{ t('footer.copyright') }}</span>
            </div>
            <div class="footer-right">
                <nav>
                    <ul>
                        <li><a href="https://github.com/Gas-nontachai" target="_blank"><i class="mdi mdi-github"></i>
                                GitHub</a></li>
                        <li><a href="https://web.facebook.com/NontachaiProsri/" target="_blank"><i
                                    class="mdi mdi-facebook"></i> Facebook</a>
                        </li>
                        <li><a href="mailto:bigboy2546.77@gmail.com"><i class="mdi mdi-email"></i> Email</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-left {
    flex: 1;
    text-align: left;
}

.footer-right {
    flex: 1;
    text-align: right;
}

.footer nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
}

.footer nav ul li {
    margin: 0 10px;
}

.footer nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

.footer nav ul li a:hover {
    color: #ff6347;
    text-decoration: underline;
}
</style>