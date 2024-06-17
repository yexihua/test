
```
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
import { onMounted, ref } from 'vue'
```

const form = ref( {{store.form}})   
<script setup>
import { onMounted, ref } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
onMounted(() => {
    console.log(store.form)
})
</script>

```
</script>

<style scoped>
.form{
    width: 600px;
}
</style>
```


