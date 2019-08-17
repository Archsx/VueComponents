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














