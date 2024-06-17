<template>
    <a-form v-model="form" class="form">
        <a-form-item v-for="i in form" :key="i.field
        .value" :field="i.field.value" :disabled="i.disabled.value" :required="i.required.value" :label="i.label.value">
            <a-switch v-if="i.type.value == 'switch'" v-model="i.value.value" />
            <a-input v-else v-model="i.value.value" />
        </a-form-item>
    </a-form>
</template>

<script setup>
import {ref } from 'vue'
const form = ref( [ { "label": { "name": "名称", "value": "表单项0" }, "field": { "name": "字段", "value": "field0" }, "value": { "name": "默認輸入", "value": "" }, "disabled": { "type": "switch", "name": "是否禁用", "value": false }, "required": { "type": "switch", "name": "必填", "value": false }, "type": { "type": "select", "name": "输入类型", "value": "input", "data": [ { "label": "输入框", "value": "input" }, { "label": "开关", "value": "switch" } ] }, "ischoose": true, "start": true, "choose": false } ])

</script>

<style scoped>
.form{
    width: 600px;
}
</style>