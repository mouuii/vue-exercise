

Vue.component('todo-item',{
    template: '<li>{{todo.text}}</li>',
    props:['todo']
})


var app = new Vue({
    el:'#app',
    data:{
        items:[
            {text:'dsfas'},
            {text:'dsfaasdfasfs'},
            {text:'dsfasasdfas'}
        ]
    }
});

