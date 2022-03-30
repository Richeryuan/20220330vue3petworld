<template>

    <div class="container px-5">
      <div class="row pt-5 justify-content-center">
        <button
          class="button-30 col-2"
           role="button"
          :class="{ active: isRegister }"
          @click="changeToRegister"
        >會員註冊
          <!-- <span class="front">會員註冊</span> -->
        </button>
        <button
          class="button-30 col-2"
           role="button"
          :class="{ active: isLogin }"
          @click="changeToLogin"
        >會員登入
          <!-- <span class="front">會員登入</span> -->
        </button>
      </div>
      <div class="row pb-5">
        <div class="col-12 m-auto panel">
          <LoginPanel v-if="isLogin" />
          <RegisterPanel v-if="isRegister" />
        </div>
      </div>
    </div>
</template>
<script>
import LoginPanel from '@/components/LoginPanel.vue';
import RegisterPanel from '@/components/RegisterPanel.vue';

export default {
  components: {
    LoginPanel,
    RegisterPanel,
  },
  data() {
    return {
      isLogin: true,
      isRegister: false,
    };
  },
  methods: {
    changeToRegister() {
      this.isLogin = false;
      this.isRegister = true;
    },
    changeToLogin() {
      this.isLogin = true;
      this.isRegister = false;
    },
  },
};
</script>
<style>


  </style>