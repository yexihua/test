<template>
  <a-form-item v-for="i in form" :key="i.name" :label="i.name">
    <a-switch v-if="i.type=='switch'" v-model="i.value"/>
    <a-select v-else-if="i.type=='select'" v-model="i.value">
      <a-option v-for="k in i.data" :key="k.label" :value="k.value">{{k.label}}</a-option>
    </a-select>
    <a-input v-else v-model="i.value" />
  </a-form-item>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
let form = computed(() => {
  let formConfig = [];
  for (let i in store.itemNow) {
    if (store.itemNow[i].name) {
      formConfig.push(store.itemNow[i]);
    }
  }
  return formConfig;
});
onMounted(() => {});
</script>

<style scoped>
</style>