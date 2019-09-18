##### provide和inject来了

来了来了，真的来了，这两个解决的是什么问题呢？假如有一个数据，从爷组件到孙组件都可能使用，假如是一个方法，那么每个组件都定义一个相同的方法?假如是一个数据，如何在不使用vuex的情况下保证这是同一个数据?所以这里provide和inject就派上用场了，只要在爷组件里面provide了，那么他的所有子组件都可以共享！

```
  // 爷组件

  export default {
    provide(){
      return {
        eventBus:this.eventBus
      }
    }
  }

  // 任何一个子组件

  export default {
    inject:['eventBus'],
    created(){
      // 这个写法和使用方法有点像props
      console.log(this.eventBus)
    }
  }




```


##### .sync语法糖

假如子组件要修改父组件传入子组件的prop(毕竟直接在组件里面修改this.props = foo 会被警告并且不符合单向数据流的概念)，那么按照以前的写法，我们可能会这样写
```
  // Parent.vue

  <child @someEvent="handle" :someProp="parentData">

  </child>
  export default {
    //...
    methods:{
      handle(value){
        this.parentData = value
      }
    }
  }


  // Child.vue

  //...
  // this.$emit('someEvent',foo)


```

现在有了语法糖.sync了,避免了冗余的函数
```
  <g-tab :selected.sync="parentData">    

  </g-tab>


  //上面等价于
  <g-tab :selected="parentData" @update:selected="selected = valueFromChild">


  </g-tab>


```




