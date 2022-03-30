<template>
<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="loginBox">
           
            <form class="form-group h-100 d-flex flex-column justify-content-between p-5">
                 <!-- @submit.prevent="userLogin"-->
                <h1><b>會員登入</b></h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="account">
                    <!-- v-model="user.account -->
                    <label for="floatingInput">Account:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <!-- v-model="user.Password -->
                    <label for="floatingPassword">Password:</label>
                </div>
                   
                <router-link to="/"><button class="button-30">會員登入 </button></router-link>
                     
                
                <p class="titleLogin">
            <router-link to="/forgotPasswordPage">忘記密碼?</router-link>  
            </p> 
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
            user:{
                account:"",
                email:"",
                password:"",
            },
        };
    },
//     methods: {
//         userLogin() {
//             databaseAuth.signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
//                 this.$router.push("/admin");
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//         },
//     },
};
</script>
<style scoped>
* {
    text-decoration: none;
}
.loginBox {
    background-color: rgb(241, 147, 4);
     height: 50vh; 
     width: 200vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 20px; */
    /* padding-left: 100px; */
    margin: 200px;
       border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2); 
}
/* input */
.form-control {
       border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2); 
}

@keyframes typing {
    from { width: 0 }
  } 
.titleLogin {
    width: 10em;
    overflow: hidden;
    white-space: nowrap;
    /* border-right: .05em solid; */
    animation: typing 4s steps(11),
    caret 10s steps(10) infinite;
    /* margin-left: 1vw; */
    margin-left:7em;
}

</style>