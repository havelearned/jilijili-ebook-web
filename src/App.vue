<template>
  <router-view/>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  components: {},
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  },
  methods: {
    /**
     * 解决 ResizeObserver问题
     * 具体含义: https://blog.csdn.net/qq_65032048/article/details/133083131#:~:text=%E6%8A%A5%E9%94%99%20%E2%80%9DResizeObserver%20loop%20completed,with%20undelivered%20notifications%E2%80%9C%E3%80%82%20%E6%8A%A5%E9%94%99%E7%9A%84%E5%8E%9F%E5%9B%A0%EF%BC%9A%E5%9C%A8%E9%A1%B5%E9%9D%A2%E7%BB%98%E5%88%B6%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C%E9%A1%B5%E9%9D%A2%E7%AA%81%E7%84%B6%E5%8F%91%E7%94%9F%E8%B0%83%E6%95%B4%E5%A4%A7%E5%B0%8F%E7%9A%84%E4%BA%8B%E4%BB%B6%EF%BC%8C%E5%AF%BC%E8%87%B4%E4%BA%86%E6%A0%B7%E5%BC%8F%E5%92%8C%E5%B8%83%E5%B1%80%E9%83%BD%E9%9C%80%E8%A6%81%E9%87%8D%E6%96%B0%E8%AF%84%E4%BC%B0%EF%BC%8C%E8%BF%99%E4%B8%AA%E8%B0%83%E6%95%B4%E5%A4%A7%E5%B0%8F%E5%AF%BC%E8%87%B4%E7%9A%84%E5%B8%83%E5%B1%80%E5%8F%98%E5%8C%96%EF%BC%8C%E5%B0%86%E5%BB%B6%E8%BF%9F%E5%88%B0%E4%B8%8B%E4%B8%80%E5%B8%A7%E6%9D%A5%E7%BB%98%E5%88%B6%E3%80%82%20%E8%BF%99%E6%97%B6%E6%88%91%E4%BB%AC%E5%B0%86%E4%B8%8B%E9%9D%A2%E7%9A%84%E4%BB%A3%E7%A0%81%E6%94%BE%E5%85%A5app.vue%E7%9A%84%3Cscript%3E%E4%B8%AD%E5%B0%B1%E8%83%BD%E8%A7%A3%E5%86%B3%E4%BB%A5%E4%B8%8A%E9%97%AE%E9%A2%98%E3%80%82
     * @constructor
     */
    ResizeObserverFun () {
      const debounce = (fn, delay) => {
        let timer = null

        return function () {
          const context = this

          const args = arguments

          clearTimeout(timer)

          timer = setTimeout(function () {
            fn.apply(context, args)
          }, delay)
        }
      }

      const _ResizeObserver = window.ResizeObserver

      window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
        constructor (callback) {
          callback = debounce(callback, 16)

          super(callback)
        }
      }
    }

  },
  mounted () {
    this.ResizeObserverFun()
  }
}
</script>
