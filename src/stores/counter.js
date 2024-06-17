import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import formItem from '../utils/formItem'

export const useCounterStore = defineStore('counter', () => {
  const form = ref([
    new formItem(0)
  ])
  const itemNow=ref(new formItem(0))//当前展示的配置数据
  const itemNumber=ref(1)//表单项生成表示数
  const codeShow=ref(false)//展示代码
  const init=()=>{//初始化
    form.value=[new formItem(0)]
    form.value[0].ischoose=true
    itemNow.value=form.value[0]
  }
  const addItem = () => {//单个新增
    form.value.push(new formItem(itemNumber.value))
    itemNumber.value++
  }
  const deleteItem = (key) => {//单个删除
    form.value.splice(key, 1)
  }
  const addItems = (number) => {//批量新增
    for (let i = 0; i < number; i++) {
      form.value.push(new formItem(itemNumber.value))
      itemNumber.value++
    }
  }
  const chooseDetele = () => {//选中删除
    for(let i in form.value){
      if(form.value[i].choose&&form.value[i].choose){
        changeItem(0)
      }
    }
    form.value=form.value.filter(item=>item.choose==false)
  }
  const changeChoose = (key) => {//选中变更
    form.value[key].choose = !form.value[key].choose
  }
  const changeItem = (index) => {//当前选中项变更
    for(let i in form.value){
      form.value[i].ischoose=false
    }
    form.value[index].ischoose=true
    itemNow.value=form.value[index]
  }
  const changeCodeShow=()=>{//代码展示页开关
    codeShow.value=!codeShow.value
  }

  return { form,itemNow,codeShow,changeCodeShow,init,changeItem, changeChoose, addItem, deleteItem, addItems, chooseDetele }
})
