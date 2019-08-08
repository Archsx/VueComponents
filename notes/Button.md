#### 如何定义 CSS 变量

目前觉得这个学了没用，因为前端工程化不会这样写的。毕竟有 stylus 和 less 等工具

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

#### 引入 parcel 之后项目结构发生的变化

1> 创建 src 文件夹，并在 src 文件夹里面新建 app.js 这个文件。将原来写在 index.html 里面的 new Vue(...)初始化这一部分放在 app.js 文件中，在 index.html 中通过 script 标签引入 app.js

2> 删除 button.js，之前 button.js 里面的内容是全局注册一个 button 组件，模板也写在那里面。现在改为单独创建一个 button.vue,然后写 template，还有把原来 index.html 里面定义的 css 样式改写为 less 样式放在 button.vue 中，

3> 删除之前在 index.html 中通过 script 标签引入的 button.js 和 vue(现在的依赖通过 import 来做),改为在 app.js 中通过 import Vue(这里要在 package.json 中配置 vue 的 alias),以及 import Button from 'xxx'并全局注册这个 button 组件

#### 动态设置 class

通过父组件向子组件传入 props 的形式，动态设置子组件的 class，方老师在视频中演示了一种比较让人迷惑的写法(个人看法)，如下：

```
  //Button.vue
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    //...
  </button>

  //Parent.vue 使用上面的Button组件

  <g-button icon-position="right">


  </g-button>



```

总之就是想从父组件传入一个 className

```
  //其实有一些简单的写法

  // 意外收获,假如这个class是要设置在子组件最外层的元素上面的话,直接在父组件上写class就行

  <g-button class="hhhh">


  <g-button>

  //实际结果为

  <button class="g-button hhhh">
   //
  </button>


  或者直接在子组件里面设置class

  //parent.vue

  <g-button icon-position="right">

  </g-button>

  //Button.vue

  <button class="g-button" :class="iconPosition">

  <button>


  //实际结果为
  <button class="g-button right">

  <button>


```

下面这段话来自链接：https://michaelnthiessen.com/dynamically-add-class-name/

> We can even use an object to define the list of dynamic classes, which gives us some more flexibility.
> For any key/value pair where the value is true, it will apply the key as the classname.

简单的说就是定义一个对象，假如 key 对应的 value 为 true，那么 class 就包含 key

```
  // 文中的例子

  <template>
    <span :class="{
      "dark-theme":darkMode,
      "light-theme":!darkMode
    }">

    </span>
  </template>



```

后来我还自己尝试了一下,如果传入多个值的话，这样也行

```
  //parent.vue
  <g-button :test="['foo','bar']">

  </g-button>


  //Button.vue

  <button>
    <svg :class="test">
      //
    </svg>
  <button>


  //实际效果
  <button>
    <svg class="foo bar">

    </svg>
  </button>



```
