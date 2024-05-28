<template>
  <!--  <v-btn>12345</v-btn>-->
  <!--  <v-btn-primary>23456</v-btn-primary>-->
  <v-col>
    <v-btn-primary-24 style="margin-right: 10px;">Кнопка</v-btn-primary-24>
    <v-btn-primary-30 style="margin-right: 10px;">Выход</v-btn-primary-30>
    <v-btn-primary-48 style="margin-right: 10px;">Загрузить фото</v-btn-primary-48>
  </v-col>
  <TestDialog/>
</template>

<script setup>


import TestDialog from "@/components/TestDialog.vue";
</script>

<style scoped>

</style>