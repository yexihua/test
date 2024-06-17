<template>
  <div class="homeView">
    <Header></Header>
    <div class="content">
      <div :class="store.codeShow ? 'home show' : 'home'">
        <Home></Home>
      </div>
      <div :class="store.codeShow ? 'aside show' : 'aside'">
        <Aside></Aside>
      </div>
      <formCode :class="store.codeShow ? '' : 'show'"></formCode>
      <!-- <Code></Code> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import Home from '../components/Home.vue'
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'
import formCode from '../components/formCode.md'
// import Code from '../components/code.vue?raw'
import Code from '../components/code.vue'

import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
</script>

<style scoped>
.homeView {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}



.content {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #E6CEAC;
}

.show {
  display: none
}

.home {
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  padding: 2%;
}

.aside {
  height: 100%;
  width: 20%;
  border-left: 1px solid black;
  box-sizing: border-box;
  padding: 2%;
}
</style>