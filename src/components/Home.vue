<template>
  <div class="form">
    <div :class="i.ischoose ? 'Item choose-item' : 'Item '" @click="choose(index)" v-for="(i, index) in store.form"
      :key="i.field.value">
      <a-checkbox :value="i.choose" @click="changeChoose(index)"></a-checkbox>
      <a-form-item class="formItem" :disabled="i.disabled.value" :required="i.required.value" :field="i.field.value"
        :label="i.label.value">
        <a-switch v-if="i.type.value == 'switch'" v-model="i.value.value" />
        <!-- <a-select v-else-if="i.type.value == 'select'" v-model="i.value.value"> -->
          <!-- <a-option v-for="k in i.data" :key="k.label" :value="k.value">{{ k.label }}</a-option> -->
          <!-- <a-option  :value="111">111</a-option> -->
        <!-- </a-select> -->
        <a-input v-else v-model="i.value.value" />
      </a-form-item>
      <a-button type="outline" @click="deleteItem(index)">
        <template #icon>
          <icon-minus />
        </template>
      </a-button>
    </div>
    <div class="add">
      <a-button long style="width: 200px;" type="outline" @click="addItem">
        <template #icon>
          <icon-plus />
        </template>
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
//删除
const deleteItem = (index) => {
  store.deleteItem(index)
}
// 新增
const addItem = () => {
  store.addItem()
}
//选中
const changeChoose = (index) => {
  store.changeChoose(index)
}
//选择
const choose = (index) => {
  store.changeItem(index)
}
onMounted(() => {
  store.init()
})
</script>

<style scoped>
.form {
  position: relative;
  width: 100%;
  height: 100%;
}

.Item {
  display: flex;
  width: 100%;
  padding: 10px 0;
}

.formItem {
  margin: 0 20px 0;
}

.add {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
}

.choose-item {
  background-color: #e8ba7a;
}
</style>