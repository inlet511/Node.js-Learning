var mongoose = require('mongoose');

//设置使用默认Promise
mongoose.Promise = global.Promise;
//连接数据库
mongoose.connect('mongodb://localhost:27017/TodoApp');

//定义模型
var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength: 1,
        trim:true
    },
    completed:{
        type:Boolean,
        default: false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

//声明instance
var newTodo = new Todo({
    text:'Cook dinner'
});

//保存instance
newTodo.save().then(
    (doc)=>{
        console.log('Saved todo:',doc);
    },(err)=>{
        console.log(err);
    }
);  