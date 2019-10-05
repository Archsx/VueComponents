##### 关于事件冒泡

假如在Dom结构中一个父节点设置position为relative，子节点设置position为absolute，并且left:0,top:100%;,这样子节点在视觉上就在父节点外面，点击子节点的话，点击事件会冒泡到父节点上面吗？

答案是： 会


##### 关于appendChild

```
  var child = node.appendChild(child)

  // node是要插入子节点的父节点

  // child 是参数同时也是返回值

```

这里有一点需要注意，假如child这个节点本来就存在于DOM树当中，那么当child会先从它原先的位置移除，然后再插入到新的地方，在Popover这个组件里面就是这样的，为了把slot里面的DOM放到document.body里面