<template>

<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="forgetPasswordBox">
            <!--  @submit.prevent="forgotPasswordPanel" -->
            <form class="form-group h-100 d-flex flex-column justify-content-between p-5">
                <h1><b>請輸入您的Email</b></h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email:</label>
                </div>
                <!-- v-model="user.email -->
                  <div class="box d-flex flex-column justify-content-between p-5">
                <router-link to="/"><button class="button-30" role="button">回首頁
                    <!-- <span class="front">送出註冊</span> -->
                </button></router-link>
                </div>

               
            </form>
        </div>
    </div>
</div>
</template>
 <script>
// import { databaseAuth } from '@/config/databaseConfig.js';

export default {
    data() {
      return{
        user: {
          email: '',
            }
        };
    },
    // methods: {
    //     forgetPassword() {
    //         databaseAuth.sendPasswordResetEmail(this.user.email)
    //         .then(() => {
    //             alert('請查看您的信箱以重設密碼')
    //             this.user = {
    //                 email: ''
    //             }
    //         }).catch((error) => {
    //             alert(error)
    //         })            
    //                 }
    // }
};
</script>
