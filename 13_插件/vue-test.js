/*
IIFE
 */
(function (window) {
  const MyPlugin = {}

  // 插件对象必须有一个install()
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue的myGlobalMethod()执行')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = binding.value + '-----my-directive'
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的$myMethod()执行')
    }
  }

  window.MyPlugin = MyPlugin
})(window)