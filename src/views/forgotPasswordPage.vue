<template>

<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="forgotPasswordBox">
            <!--  @submit.prevent="forgotPasswordPanel" -->
            <form class="form-group h-100 d-flex flex-column justify-content-between p-5">
                <h1><b>請輸入您的Email</b></h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email:</label>
                </div>
                <!-- v-model="user.email -->
                <router-link to="/checkCodePage"><button class="button-30" role="button">確定</button></router-link>
            </form>
        </div>
    </div>
</div>
</template>

<style>


.forgotPasswordBox {
    background-color: rgb(241, 147, 4);
     height: 50vh; 
     width: 80vh; 
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



</style>

 <script>
import forgotPasswordPanel from '@/components/forgotPasswordPanel.vue';

export default {
    components: {
        forgotPasswordPanel
    },
}
</script>