# 前端性能优化

前端性能优化一直是前端开发者在工作中比较重要的一个部分,随着前后端的分离，前端在项目中的比重越来越大，
因此前端的性能优化也显得更加的复杂，其优化的空间也变得更大，因此对前端的技术要求也更高了。

那么前端可以做哪些性能优化呢

## 减少首屏加载时间

首屏加载的时间，指的是打开网站到网站第一个页面出现的时间，这个时间对于用户来说，是十分重要的。
如果首屏加载时间很慢，那么往往就会流失很多的用户。那么怎么减少首屏加载时间呢？可以从如下几个方面进行优化:

### 1、减少DOM元素数量

DOM的加载和显示是比较耗时的，需要浏览器对DOM结构进行分析，
计算，绘制DOM树，挂载内容等，这些操作大都比较耗时。`尽量减少DOM的嵌套层数、使用伪类元素代替不必要的DOM`等这些都可以减少DOM元素数量。

### 2、css文件放在head,JavaScript文件放底部

浏览器（谷歌浏览器，其他的不一定是这样）的渲染过程大致为：构建DOM-->构建CSSOM-->生成Render Tree--> Layout(布局)-->Painting(绘制),
知道了浏览器的渲染机制，我们把css文件放在head里，能尽快的加载css构建CSSOM,而把JavaScript文件放底部，是因为JavaScript代码如果操作了
DOM和CSS则会重新导致页面的重排和重绘，进而影响首屏加载的时间。

## 减少HTTP请求数

### 1、代码压缩合并

### 2、小图标等用iconfont代替

### 3、使用base64格式的图片

### 4、css雪碧图（实际项目中使用的频率比较低）

## 图片懒加载和预加载

### 1、图片懒加载

图片懒加载：当网站图片比较大或者比较多的时候，使用一些较小的图片代替真正的图片，当真实的图片加载好之后再替换掉原先的代替的图片，
这样就可以避免用户一直在等待图片的加载过程，加快网站显示的速度。

### 2、图片预加载

图片预加载：在做单页面应用，特别是一些动画比较多的H5页面的时候，为了动画的流畅性，我们往往会将网站要用到的图片提前进行加载，
等要用到的图片全部加载完成之后，再进入网站首页，因此往往需要在进入首页之前，做一个loading页面，显示网站资源加载的进度，
这样可以让用户知道网站正在加载资源，避免用户的大量流失。

关于图片懒加载和预加载的方法和插件，图片懒加载中`vue-lazyload`这个插件比较好用，
图片预加载，我在之前的文章中 [图片预加载](../javascript/preload.html)有写到过图片的预加载的案例，大家可以进行参考。

## 图片压缩

在很多项目中，图片资源往往作为网站的一个比较大的资源，其优化的空间也比较大，以往很多图片都是在服务端进行压缩，
其实这一步完全可以在前端来完成，从而来减少服务端的压力。前端压缩图片，主要是借助于一些图片压缩软件，一般情况可以
压缩50%-70%左右，从而可以大大减少服务端的压力。

## 提取公共代码
现在项目开发很多都是前后端分离、模块化、组件化的的方式，那么在多页面应用中，往往很多的代码，是可以进行共用的，
将这些公共的代码进行提取，缓存，这样可以减少一些不必要的资源加载。

## 减少重绘和重排 GPU加速

相对于重排，重绘的性能开销要小很多，因此在用户交互方面上，我们要尽可能的减少重排，比如
我们再做动画的时候，尽量改变transform和opacity来做动画，而不是改变其宽高，距离或是显示与否来做动画。

在做动画的时候，可以利用客户端的GPU来对动画进行加速，这样动画具有更好的流畅性。

使用CSS3代码代替JS动画（尽可能避免重绘重排以及回流）。

禁止使用gif图片实现loading效果（降低CPU消耗，提升渲染性能）

## 数据缓存
当页面中数据量比较大的时候，请求的接口比较多的时候，从后台获取数据到数据显示在页面的时间会比较长，
因此如果能将一部分数据进行缓存的话，页面要显示的数据直接从本地缓存中读取，同时我们也要考虑到数据的时效性，就是什么时候数据会过期，
比如当用户进入到页面的时候，对比之前从数据库请求数据的时间和本次请求数据的时间，如果时间在有效期呢，那么就读取本地的缓存的数据，
否则直接从数据库中读取。

前端性能优化，远远不止这些，以上这些是一些常用的性能优化方式，在实际的项目中，还有很多地方可以进行优化，比如css代码的编写、
css选择器的使用、批量增删dom、对高频触发的事件进行节流或消抖、还有服务器端渲染（SSR）、还有前端的安全防范等等，
因此前端性能优化是一个任重道远、不断完善的任务。