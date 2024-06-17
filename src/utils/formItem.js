class formItem {
    label = {
        name: '名称',
        value: '表单项'
    }//表单名
    field = {
        name: '字段',
        value: 'field'
    }//表单字段
    value = {
        name: '默認輸入',
        value: ''
    }//输入
    disabled = {
        type: 'switch',
        name: '是否禁用',
        value: false
    }//禁用
    required = {
        type: 'switch',
        name: '必填',
        value: false
    }//必填
    type = {
        type: 'select',
        name: '输入类型',
        value: 'input',
        data: [
            {
                label: '输入框',
                value: 'input'
            },
            {
                label: '开关',
                value: 'switch'
            },
            // {
            //     label: '选择器',
            //     value: 'select'
            // }
        ]
    }//输入类型
    ischoose = false//是否是选中状态
    start = true//是否为初始表单项
    choose = false//是否点选
    constructor(index) {
        this.label.value = this.label.value + `${index}`
        this.field.value = this.field.value + `${index}`
    }
}
export default formItem