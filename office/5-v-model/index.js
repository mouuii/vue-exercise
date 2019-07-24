var app = new Vue({
    el:'#app',
    data:{
      message:"hello world  thank"
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

