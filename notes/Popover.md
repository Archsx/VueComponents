##### 关于事件冒泡

假如在Dom结构中一个父节点设置position为relative，子节点设置position为absolute，并且left:0,top:100%;,这样子节点在视觉上就在父节点外面，点击子节点的话，点击事件会冒泡到父节点上面吗？

答案是： 会