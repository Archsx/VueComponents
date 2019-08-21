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

##### 关于JS和CSS

有时候，我在想，能不能在CSS中动态的引用JS的变量，这样就可以用js动态的去生成css，但是目前好像是不行的(就我所认知的范围)

可以做类似的效果，比如在css中穷举不同的class对应不同的css,然后在dom中通过动态绑定class的方式，通过设置不同的class，以设置不同的样式

```
  <dom :class="sth">

  </dom>
  
  // sth 可以为'foo','bar','baz'

  //css部分

  dom.foo{
    //
  }
  dom.bar{
    //
  }
  dom.baz{
    //
  }

```

可以动态绑定:style="sth"，这样可以动态设置margin,padding等更具体的值，这里就不再展开描述了



##### 关于computed和data

首先要附上我在stackoverflow上面提的问题，外国的老哥回答得挺不错的

https://stackoverflow.com/questions/57557941/why-vue-js-computed-get-undefined


这个问题的来源是在写Col.vue的时候，computed和data有点混淆不清楚,造成了本来应该用computed的地方却没有用

首先要看看这个问题，我觉得真的要写的东西很多啊

首先要说的是computed里面定义的计算属性里面有个console.log('computed'),和印象中不同，上面问题中，从来没有打印过'computed'

原因是（引用答案里面的一段话）

>computed properties are computed lazily so unless something asks for calcWidth it won't be evaluated. – skirtle 

至于什么才能触发这个lazy计算呢?可能是dom中需要显示吧，比如{{calcWidth}} ,也有可能是间接的，比如另一个computed属性中(比如foo)使用了calcWidth,但是这样还不行，这个foo必须在dom被需要显示才行,比如{{foo}}.个人观点，可能有遗漏 

代码参考 https://gist.github.com/Archsx/66810568e73709df6c2c9fd37c4760b9


再说说老生常谈的js里面的基础类型和引用类型吧，来看看下面的例子:

```
  <div id="app">
    {{name}}
  </div>

  //script
  var obj = {
    foo:'bar'    
  }
  new Vue({
    el:'#app',
    data:{
      name:obj.foo
    }
  })

  setTimeout(()=>{
    obj.foo = 'baz'
  },2000)


  // 基础类型
  // 上面的代码， 两秒之后，dom并不会更新，还是'baz'


  // 然后我们换一种写法
  
  <div id="app">
    {{name.foo}}
  </div>

  //script

  var obj = {
    foo:'bar'
  }


  new Vue({
    el:'#app',
    data:{
      name:obj
    }
  })

  setTimeout(()=>{
    obj.foo = 'baz'
  },2000)

  // 引用类型
  // 上面的写法，两秒之后，'bar'变成'baz'


  上述两种写法的差别，自己体会



```

还有一个big mistake!我为什么会蠢到写

```
  data(){
    return {
      someData:this.someComputedData // 这里的data需要写成函数的形式，不然this的指向可能有问题，详见原问题
    }
  }

```

这难道不是多此一举吗？直接使用computed属性不就好了?参考Col.vue即可



##### 关于gutter

这里有个场景很有趣，父组件Row.col,需要一个prop叫gutter，同时这个prop也会影响到Col.vue,可是Raw.col使用的是slot的形式，没法使用prop再传递一级，所以这里使用了$children
```
  // Raw.vue
  mounted(){
    this.$children.forEach(vm=>{
      // 妙就秒在这里，用这样的方式改变子组件的data,当然，组件其实就是Vue实例
      vm.gutter = this.gutter;
    })
  }


```

##### 关于media query

```
    // 以前只会
    @media and screen (max-width:768px){

    }

    // 还可以这样限定区间
    @media (min-width:577px) and (max-width:768px){

    }

```




