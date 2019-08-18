##### 关于git branch

```
  git push origin 本地分支名:远程分支名

  eg:

  git push origin grid:grid

  感觉下面这个有点类似

  git push --set-upstream origin grid 

  但是上面这句在执行 git push origin grid:grid 之后 ，有了新的修改再次push时还是会出现，这时候我们如果写git push -u origin grid 可以push成功，但是不知怎么的登录github.com这里变成了pull request,所以还是老实写git push --set-upstream origin grid 吧
```


##### 再谈css选择器

  这叫属性选择器


```
  <style>
    .col[data-span="2"]{
      width:8.333333%
    }
    .col[data-span="22"]{
      width:91.666666%
    }  
  
  </style>

  //...
  <div class="row">
    <div class="col" data-span="2"></div>
    <div class="col" data-span="22"></div>
  </div>


```


##### flex迷惑行为

参考以下代码
```
  <style>
    .p{
      display:flex;
    }  

    .c{
      height:100px;
      background:grey
    }
  
  
  </style>



  <div class="p">
    <div class="c"></div>
    <div class="c"></div>
  </div>

```

本来天真的以为，flex很智能，上面两个class为c的div的宽度虽然没指定，那么就会自动设置为50%，但是我还是太天真了
居然在浏览器中世纪显示结果为宽度0 很惊讶对吧


那我设置flex-grow会怎样呢？
```
  .c{
    //...
    //设置为0的话，相当于没有设置，因为0就是默认值
    flex-grow:0

    //奇迹出现了，这样两个div的话，宽度自动为50%
    //假如是三个div的话，宽度就自动为33.33%,以此类推
    flex-grow:1

  }
```

假如不设置flex-grow,也不设置flex-wrap，还是两个div

```

  .c{
    //两个div，宽度为80%，不折行，实际效果是：两个都为50%.
    width:80%
  }


```

##### 关于less

```
  //假如css书写的时候需要在字符串中插入变量,直接在使用"@{variable}"就行，这点和ES6里面的模板字符串很像，只不过没有用``(反引号)

  [span="@{value}"]

  //平时使用变量就直接 @variable 就行

  color:@custom-red




```
我也不知道为什么，VSCode有时候对less里面的高版本才有的less语法会报错。害我浪费了一些时间

##### 关于绑定class时为数组

都知道绑定dom上的多个class的时候可以使用数组的形式

```
  <dom :class="['foo','bar']">

  </dom>

  //可是假如比较复杂

  // 假如这些prop没写默认值，外部也没传入，那将会出现class="col-undefined span-undefined" 严重影响美观
  <dom :class="['col-'+someprop,'span-'+ someprop]">
  </dom>

  解决办法

  <dom :class="[someprop && 'col-' + someprop ]"></dom>

```

##### 关于中间出现间隔

```
  <div class="wrapper">
    <div></div>
    <div></div>
  </div>

  如何让里面的两个div中间产生20px空白间距?

  也许你想用flex以及css的calc

  .wrapper{
    display:flex;
    justify-content:space-around
  }

  .wrapper > div {
    width:calc(100% - 10px)
  }

  应该没什么问题，但是，这只是两个div，万一有三个，四个，五个。。。那么calc就要重写

  解决办法，使用padding以及负margin 

  .wrapper{
    margin:0 -10px //-10怎么来的？需要的间隔/2 再变成负数即可
  }

  .wrapper > div{
    padding:0 10px // 同上
  } 

  万一这些div上面有背景色，这样看不出效果怎么办?

  .wreapper > div{
    background-color:grey;
    background-clip:content-box //这句设置background不包括padding
  }





```



##### 关于空数组

这种问题，不容小视.因为这种问题常常会带来不必要的困惑

```
  var a = []


  console.log(a) // 此时显示[],但是又可以点进去发现里面是有内容的


  a.push(1)



  // 这样类似的困惑还包括之前在segmentfault以及掘金等文章常见的vue生命周期console的困惑


  //原音很简单，就是一个时间问题，打印的时候是空数组，但是后来不是。

  // 后来遇到这样的困惑我都是console.log(JSON.stringify(sth))


```



##### 关于created和mounted的区别       

以前我只知道,created只是初始化完成，但是选取不到DOM,而mounted表示元素已经挂载到页面上

这里有个简单的类比

```
  var div = document.createElement('div') // created 只是在内存中生成dom对象，还未挂载到页面上

  var childDiv = document.createElement('div') //child created

  div.appendChild(childDiv) //child mounted


  document.body.appendChild(div) // mounted 已经把dom挂载到页面上



```

##### 关于$children

根据Vue文档，vm.$children 表示当前实例的直接子组件(slot插上去的也算，比如Row.vue配合使用Col.vue,在Row里面可以使用这个获取到插在上面的Col.vue),类型为Array<Vue instance>,看见了吗，是一个数组.比之前坑人的somedom.children要好用多了吧

> 当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用 $children 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源。















