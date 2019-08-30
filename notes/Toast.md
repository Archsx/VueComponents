##### 关于CSS

在这一节中，我们在定义一个动画的时候，使用了
```
  @keyframs foo{
    0% {
        transfrom:translateY(-100%)
    }
  }

  someClass{
    animation:foo 1s
  }

```

但是我们在对某一个dom节点的CSS里面也写了来实现居中

```
  something{
    transfrom:translateX(-50%)
  }

```

虽然粗眼一看，一个是X方向，一个是Y方向，好像不会冲突，，但是实际情况却是两个有一个会被覆盖，毕竟都是transform. 这样在动画中就会有偏差。解决的办法很新奇，以前是一个DOM，现在改成两个。外面的一层只用来实现居中，里面的一层用来实现动画效果

```
  .wrapper{
    position:fixed;
    left:50%;
    transfrom:translateX(-50%)
  }

.inner{
  annimation: someAnimation // 这个someAnimation里面可能包括一些transform相关的
}

```
这样挺神奇的，因为wrapper的高度没有固定，全部是通过里面的inner元素撑开的。这样在动画期间选取wrapper元素查看的话会看到一个很神奇的现象，那就是wrapper已经固定在了应该在的位置，而里面的inner元素才是实现动画的主体



##### 关于创建Vue实例并应用在页面中


以前，在页面中使用一个组件的方法

```
  import someComponents from 'somewhere'  

  export default {
    //...
    components:{
      someComponents
    }
  }

```

现在的需求很麻烦，因为你不知道具体哪个页面需要用到这个组件，难道每个页面都需要去引入这样一个组件吗？

所以这个时候就使用了动态创建的方法

```
  // somePlugin.js



  import Toast from 'ssomewhere'

  const ToastConstructor = Vue.extends(Toast)

  //然后有两种写法

  //写法1
  const instance = new ToastConstructor({
    //注意传入props
    propsData:{
      foo:bar
    }
  }).$mount()


  //写法2

  const instance = new ToastConstructor({
    el:document.createElement('div'),
    propsData:{
      foo:bar
    }
  }) //注意这样写的话就不用.$mount



  //然后不管以上哪种，都需要document.body.appendChild这个DOM实例到页面上

  document.body.appendChild(instance.$el)


  // 除非

  const instance = new ToastConstructor({
    el:'someDOMAlreadyInPage'
    //...
  })

  这样的话就不用再调用document.body.appendChild(instance.$el)




  最后，假如要设置slot的内容的话，应该使用
  const instance = new ToastConstructor({
    propsData:{
      foo:bar
    }
  })
  instance.$slots.default = [message]
  instance.$mount()
  document.body.appendChild(instance.$el)

  









```













