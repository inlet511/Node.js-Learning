var mongoose = require('mongoose');

//设置使用默认Promise
mongoose.Promise = global.Promise;
//连接数据库
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};