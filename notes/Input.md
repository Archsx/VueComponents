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