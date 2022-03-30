<template>

<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="DonateFoodBox">
            <!--  @submit.prevent="forgotPasswordPanel" -->
            <form class="form-group h-100 d-flex flex-column justify-content-between p-5">
                <!-- <h1><b>認養紀錄</b></h1> -->

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
<style>

.DonateFoodBox {
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
</style>