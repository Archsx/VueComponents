##### 先说css

新学了两个选择器:not和[]
```
  :not(:last-child){
    margin-right:.5em
  }

  input[data-v-a231b7]{
    
  }

```
##### 如果可能要渲染多个DOM但是不想额外写一个DIV来包裹这些dom

采用template标签来包裹


##### 对input的disabled进行控制


对于class和style都遇到过怎么用变量进行控制，可是disabled这样的属性呢？其实也很简单
```
  //当variable为真时就是disabled
  <dom :disabled="variable">
  </dom>

```

##### 关于原生事件的传递

这个问题也困扰了很久，但是还是不清楚其实现

```
  <input @change="handleChange">

  </input>

  //...
  methods:{
    //注意看，在dom结构中我们并没有写传入的参数是什么，可是这里默认把event事件传了进来
    handleChange(e){
      console.log(e)
    }
  }


  <input @change="handleChange(1)">

  </input>

  methods:{
    handleChange(a,e){
      console.log(a)//1
      //以为这里的e还会是event事件？并没有这么智能。
      console.log(e)//undefined
    }
  }

  <input @change="handleChange(1,$event)">
  </input>


  methods:{
    handleChange(a,e){
      console.log(a) //1
      //如上所示,我们必须用$event这个变量来代表这个事件.
      console.log(e) //event
    }
  }


```


##### 让组件支持v-modal

首先需要明白的是，v-modal是语法糖.
这常常和双向绑定联系在一起
```
  <g-input v-modal="sth">
  </g-input>

  //等价于
  <g-input :value="sth" @input="sth=$event.target.value">

  </g-input>

  //从上面可以看出，其实v-modal的使用范围有一点狭窄
  //首先，子组件必须接受一个prop叫做value，
  //第二，子组件必须emit('input',e.target.value),注意到了吗，这里的事件需为input事件，所以其实这里就暗示了子组件里面常常有一个input


  //所以v-modal双向绑定其实有点狭窄，常用的场景就是sth(js里面的变量的值)变了，input这个输入框里面的值就会变(:value=sth)
  // input输入框里面的值变化了，sth就变化了(sth="$event.target.value")

  //假如在一般的自定义组件(但是里面没有input输入框这种)上使用v-modal,可以想象这样的话value和input事件是有多尴尬。











```



