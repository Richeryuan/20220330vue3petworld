<template>

    <div class="container px-5">
      <div class="row pt-5 justify-content-center">
        <button
          class="button-30 col-3"
          role="button"
          :class="{ active: isAccount }"
          @click="changeToAccount"
        >
          <span class="front">會員中心</span>
        </button>
        <button
          class="button-30 col-3"
          role="button"
          :class="{ active: isDonateFood }"
          @click="changeToDonateFood"
        >
          <span class="front1">捐賑資訊</span>
        </button>
         <button
          class="button-30 col-3"
          role="button"
          :class="{ active: isPetAdoption }"
          @click="changeToPetAdoption"
        >
          <span class="front2">寵物認養</span>
        </button>
      </div>
      <div class="row pb-5">
        <div class="col-12 m-auto panel">
          <AccountPanel v-if="isAccount" />
          <DonateFoodPanel v-if="isDonateFood" />
          <PetAdoptionPanel v-if="isPetAdoption" />
        </div>
      </div>
    </div>
</template>
<script>
import AccountPanel from '@/components/AccountPanel.vue';
import DonateFoodPanel from '@/components/DonateFoodPanel.vue';
import PetAdoptionPanel from '@/components/PetAdoptionPanel.vue';

export default {
  components: {
    AccountPanel,
    DonateFoodPanel,
    PetAdoptionPanel,
  },
  data() {
    return {
      isAccount: true,
      isDonateFood: false,
      isPetAdoption:false,
    };
  },
  methods: {
    changeToAccount() {
      this.isAccount = true;
      this.isDonateFood = false;
      this.isPetAdoption = false;
    },
    changeToDonateFood() {
      this.isAccount = false;
      this.isDonateFood = true;
      this.isPetAdoption = false;
    },
        changeToPetAdoption() {
      this.isAccount = false;
      this.isDonateFood = false;
      this.isPetAdoption = true;
    },
  },
};
</script>
<style>

  </style>