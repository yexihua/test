<template>
    <div class="header">
        <a-button @click="i.fun" v-for="i in buttons" :key="i.name" type="text">{{ i.name }}</a-button>
        <a-modal :visible="visible" @ok="handleOk(1)" @cancel="handleOk(0)">
            <template #title>
                提示
            </template>
            <a-form-item extra="将在尾部新增指定数量的初始表单项" field="number" label="新增数量">
                <a-input-number v-model="form.number"  class="input-demo" :min="0" />
            </a-form-item>
        </a-modal>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {useCounterStore} from '../stores/counter'
const visible = ref(false);
const store=useCounterStore()
const form = reactive({
    number: 0
})
const buttons = reactive([
    {
        name: '批量新增',
        fun: () => {
            visible.value = !visible.value
        }
    },
    {
        name: '选中删除',
        fun: () => {
            store.chooseDetele()
        }
    },
    {
        name: '代码展示',
        fun: () => {
            store.changeCodeShow()
        }
    }
])
const handleOk = (i) => {
    if (i) {
        store.addItems(form.number)
    } 
    visible.value = !visible.value
    form.number = 0
}
</script>

<style scoped>
.header {
    background-color: #c2c2c2;
    display: flex;
    justify-content: flex-start;
}
</style>