var app = new Vue({
    el:'#app',
    data:{
       todos:[
           {text:'learn html'},
           {text:'learn css'},
           {text:'learn vue'}
       ]
    }
});

// app.seen = true
app.todos.push({text:'push'})