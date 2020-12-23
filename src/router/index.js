import { ColorPicker } from 'element-ui'
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'observable',
      component: () => import('@/modules/observable'),
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }
  ]
})
// 1.对于vue是一套渐进式框架爱的理解。渐进式代表的含义是：没有多做职责之外的事情，vue.js只提供了vue-cli生态中最核心的组件系统和双向数据绑定。
//   像vuex、vue-router都属于围绕vuejs开发的库
// 2.vuejs的两个核心是：双向数据绑定和组件系统。组件的核心选项：模板（template）、data（初始数据）、接收外部参数（props）、方法（methods）、
// 生命周期钩子函数（beforeCreate(),created()//beforeMount(),mounted()//beforeUpdate(),updated()//beforeDestory(),destoryed()）、私有资源（assets）
//3. v-if和 v-show 都是控制元素显示隐藏的，不过v-if是操作dom的添加和删除，v-show和v-hide相当于display：block和display：none
//5. v - on可以监听多个方法，比如在input输入框中  可以同时监听输入，光标移入，和移出（input,foucs，blur),监听鼠标移入移出（mouseenter,mouseleave）按顺序执行
// 9.写在$nextTick内的方法在dom渲染完成后调用，在进入页面计算盒子宽高时可用到
// 11.v-for比v-if优先，所以渲染时v-if会重复运行，不建议这两个放在一起用
// 12.子组件调用父组件：
// 第一种：直接在子组件用this.$parent.event来调用父组件的方法
// 第二种：用$emit向父组件触发一个事件，父组件监听这个时间就行了（可用props获取父组件的数据，用$emit传参给父组件）
// 第三种：在父组件中把方法传入子组件，子组件通过props接收方法
// 13.keep-alive：写在这里面的组件不会被重复渲染
// 14.把可复用的功能单独作为一个文件，命名时与业务无关，以该组件的功能命名，可复用的组件只负责展示，如何获取数据跟它无关，在需要的父组件中用import..from...引用
// 组件可分为通用组件（可复用组件）和业务组件（一次性组件）
// 通用组件不会因组件使用的位置、场景变化，主要用作展示数据
// 业务组件是父组件功能的一部分，有获取数据，交互，应用通用组件的能力
// 16.mounted(),created(),destoryed()
// 18.this.array
// 21.每一个循环的数据都有自己的index，设置默认选择的nowindex为0，当nowindex=index时为选中状态，切换时修改nowindex的值
// 22.v-model语法糖：在input中相当于 value=“” @input=“”
// 23.自定义过滤器：时间过滤器，日期过滤器，金额
// 24.单页面应用的优缺点。优：所有的文件都会通过引入的方式载入在初始页面，快；缺：
// 27.在引入的子组件是哪个通过自定义的方式传参，子组件通过props接受参数

// v- model的修饰符有：
//   v-model.lazy="value" 意义: 在光标离开input才会更新数据
//   v-model.trim="value" 意义: 输入框过滤首尾的空格
//   v-model.trim="number" 意义: 先输入数字就会限制只能输入数字
// 事件（v-on:click）的修饰符有：
//   @click.stop="test" 意义：阻止事件冒泡，相当于event.stopPropagation()
//   @click.prevent="test" 意义：阻止默认行为，相当于调用了event.preventDefault()方法，比如表单的提交、a标签的跳转就是默认事件
//   @click.self="test" 意义：假如父子节点上都有方法，点击子节点会触发父节点上的方法，加上self后就只会调用自身的方法了
//   @click.once="test" 意义：事件只能用一次，无论点击几次，执行一次之后都不会再执行

// vue中key的作用：当列表循环时，需要用key来给每一个节点做唯一标识，diff算法就可以正确的识别此节点，找到正确的位置直接操作节点，可以更高效的更新虚拟dom

// 在vue-cli项目中，更新vue版本：
// 直接更新npm update vue--save，如果报错的话就把node_modules删了再更新，然后npm install 安装依赖

// vue中如何使用event对象
// 不需要传参时直接这样写：@click="check"  需要传参时@click="check($event,name)", 但是@check="check(name)"也能接收参数哈哈哈

// vue中的data为什么是一个函数
// 项目中的data为啥需要使用return返回呢？用组件化来写vue项目，每个.vue文件都是一个个可复用的组件，如果data是一个普通对选哪个，那么所有
// 复用这个组件的功能就会应用同一份数据，造成数据污染；把data封装成一个函数后，只有在用这个组件时才生成数据

// vue的生命周期和钩子函数
// 生命周期是指vue实例对象从创建之初到销毁的过程, vue所有功能的实现都是围绕其生命周期进行的,
// 在生命周期的不同阶段调用对应的钩子函数实现组件数据管理和DOM渲染两大重要功能

// 8个钩子函数
// beforeCreate：在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法
// create：data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作
// beforeMount：执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的
// mounted：执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行
// beforeUpdate： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步
// updated：页面显示的数据和data中的数据已经保持同步了，都是最新的
// beforeDestory：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁
// destroyed： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。

// 监听键盘事件中的按键
// @keyup.键名="click"比如@keyup.ctrl="click"
// 对于elementui的el - input需要在后面加上.native, （@keyup.enter.native="submit"） 因为elementui对input进行了封装，原生的不起作用





