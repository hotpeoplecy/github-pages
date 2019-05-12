(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{174:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("上一篇文章 "),a("router-link",{attrs:{to:"./../webpack/todolist.html"}},[t._v("webpack配置(一)")]),t._v("里我们构建了一个简单的的web服务\n这篇文章，我们将会在原来的基础上来优化我们的配置。")],1),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("代码热加载需要使用webpack的两个自带的插件，因此我们得先引入webpack这个库，然后使用相关的插件")]),t._v(" "),t._m(2),a("p",[t._v("那么什么是热加载？在这里顺便提一下。")]),t._v(" "),a("p",[t._v("热加载的基本原理，构建 bundle 的时候，加入一段 HMR runtime 的 js 和一段和服务沟通的 js 。\n文件修改会触发 webpack 重新构建，服务器通过向浏览器发送更新消息，\n浏览器通过 jsonp 拉取更新的模块文件，jsonp 回调触发模块热替换逻辑，\n从而实现每次修改某个 js 文件后，页面局部更新。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"webpack配置-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置-二","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack配置(二)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码的热加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码的热加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码的热加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HotModuleReplacementPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoEmitOnErrorsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"开发环境和生产环境编译代码映射问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境和生产环境编译代码映射问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发环境和生产环境编译代码映射问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"css单独分离打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css单独分离打包","aria-hidden":"true"}},[this._v("#")]),this._v(" css单独分离打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"浏览器代码缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器代码缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器代码缓存")])}],!1,null,null,null);s.default=e.exports}}]);