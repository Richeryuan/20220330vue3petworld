<template>
<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="AccountBox">
            <div class="accountImg">
            <img src="111" alt="123">
            </div>  
            <form class="form-group h-100 d-flex flex-column justify-content-between p-5">
                 <!-- @submit.prevent="userRegistration" -->
                <!-- <h1><b>會員中心</b></h1><br> -->
                <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="floatingInput" placeholder="account">
                    <!-- v-model="user.account -->
                    <label for="floatingInput">Account:</label>

                </div>
               

                 <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <!-- v-model="user.Password -->
                    <label for="floatingPassword">Password:</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <!-- v-model="user.email -->
                    <label for="floatingInput">Email:</label>
                </div>
                 <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="floatingInput" placeholder="phone">
                    <!-- v-model="user.email -->
                    <label for="floatingInput">Phone:</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Address">
                    <!-- v-model="user.email -->
                    <label for="floatingInput">Address:</label>
                </div>
                  <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Job">
                    <!-- v-model="user.email -->
                    <label for="floatingInput">Job:</label>
                </div>
                  <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Age">
                    <!-- v-model="user.email -->
                    <label for="floatingInput">Age:</label>
                </div>

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
        return {
            user: {
                account: "",
                email: "",
                password: "",
            },
        };
    },
//     methods: {
//         userRegistration() {
//         databaseAuth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((res) => {
//             res.user.updateProfile({
//             displayname: this.user.name,    
//             })
//             .then(() =>{
//                 this.$router.push("/login");
//             });
//         })
//         .catch((error) => {
//             alert(error.message);
//         });    
//         },
//     },
};
</script>
<style>

* {
    text-decoration: none;
}
.router-link {
  text-decoration: none;
}
.AccountBox {
    background-color: rgb(241, 147, 4);
     /* height: 50vh;  */
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
.form-control {
       border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2); 
}
.accountImg { 
    background-color: rgb(0, 0, 0);
    position:relative;
    bottom: 260px;
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2); 
}
</style>