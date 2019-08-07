#### 如何定义CSS变量

目前觉得这个学了没用，因为前端工程化不会这样写的。毕竟有stylus和less等工具



```
//定义

:root{
  --button-height:32px
}

//使用(注意这个写法)

.someClass{
  height:var(--button-height)
}


```


#### 引入parcel之后项目结构发生的变化
1> 创建src文件夹，并在src文件夹里面新建app.js这个文件。将原来写在index.html里面的new Vue(...)初始化这一部分放在app.js文件中，在index.html中通过script标签引入app.js


2> 删除button.js，之前button.js里面的内容是全局注册一个button组件，模板也写在那里面。现在改为单独创建一个button.vue,然后写template，还有把原来index.html里面定义的css样式改写为less样式放在button.vue中，

3> 删除之前在index.html中通过script标签引入的button.js和vue(现在的依赖通过import来做),改为在app.js中通过import Vue(这里要在package.json中配置vue的alias),以及import Button from 'xxx'并全局注册这个button组件