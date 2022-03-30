<template>

<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="logoutBox">

            <!-- <form class="form-group h-100 d-flex flex-column justify-content-between p-5"> -->
                <div class="logouttitle">
                <h1><b>帳號已登出</b></h1> 
                </div>     
            <!-- </form> -->
        </div>
    </div>
</div>
</template>
<script>

</script>

<style scoped>


.logoutBox {
    background-color: rgb(241, 147, 4);
     height: 50vh; 
     width: 200vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-left: 100px; */
    margin: 200px;
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2); 
}

    @keyframes typing {
    from { width: 0 }
  } 
.logouttitle {
    width: 15em;
    overflow: hidden;
    white-space: nowrap;
    /* border-right: .05em solid; */
    animation: typing 4s steps(11),
    caret 10s steps(10) infinite;
    /* margin-left: 1vw; */
    margin-left:1em;

}

</style>
