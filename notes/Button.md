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