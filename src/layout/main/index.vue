<template>
  <q-layout view="hHh lpR fFf" class="">
    <q-header reveal class="bg-black text-white">
      <q-toolbar class="row">
        <q-toolbar-title class="col-4" style="font-weight: 200;" @click="$router.replace({path:'/'})">
          <q-avatar><img src="@/assets/images/logo/logo.svg" alt="首页"></q-avatar>
          电子书商城
        </q-toolbar-title>
        <q-tabs inline-label v-model="tab" class="text-orange col-4 flex justify-center items-center">
          <q-tab name="1" icon="home" label="首页" @click="$router.replace({path:'/home'})"/>
          <q-tab name="2" icon="books" label="电子书列表" @click="$router.push({path:'/eBookList'})"/>
          <q-tab name="3" icon="person_pin" label="作者"/>
          <q-tab name="4" icon="help" @click="testRequest" label="关于"/>
          <q-tab name="5" icon="help" label="其他"/>
        </q-tabs>
        <q-btn-group class="q-pa-xs col-4 flex justify-end items-center q-gutter-xs" push flat>
          <q-btn icon="search"></q-btn>
          <q-btn icon="collections_bookmark"></q-btn>
          <q-btn id="shopChat" icon="shopping_cart"
                 @click="$router.push({ path: '/mall/cart' })">
            <q-badge floating color="red" align="bottom"
                     :label="catItem" v-show="catItem"></q-badge>
          </q-btn>
          <q-btn size="lg" dense push color="orange">登录</q-btn>
        </q-btn-group>
      </q-toolbar>
    </q-header>
    <q-page-container style="
    background-image: linear-gradient(90deg, #290404 0%, #3c3d3c 55%, #756a6a 100%);

">
      <router-view/>
    </q-page-container>

    <q-footer bordered elevated reveal class="bg-black text-white">
      <div class="column ">
        <q-toolbar class="row">
          <div class="q-pa-md text-h4">ElectronicBookMall</div>
          <q-space/>
          <q-btn-group push flat>
            <q-btn flat icon="email"></q-btn>
            <q-btn flat icon="person"></q-btn>
            <q-btn flat icon="phone"></q-btn>
          </q-btn-group>
        </q-toolbar>
      </div>
      <div class="row q-md-md">
<!--        <div class="text-h5">南宁理工学院 计算机与科学 2007班 罗家炬 20060727</div>-->
        <!--        <div class="text-h5"> Privacy policy</div>-->
        <q-space/>
<!--        <div class="text-h5">+86 17754576486</div>-->
<!--        <div class="text-h5">191865173@qq.com</div>-->
      </div>
    </q-footer>
  </q-layout>
</template>
<script>
import { defineComponent } from 'vue'
import { AddshopCat } from '@/utils/constants'
import anime from 'animejs'

export default defineComponent({
  name: 'mainLayout',
  data () {
    return {
      catItem: 0,
      tab: '1',
      comment: false// 命令弹窗控制
    }
  },
  created () {

  },

  mounted () {
    this.saveShopChatPos()
    this.changShopCatStatus()
  },
  methods: {
    testRequest () {
      this.$api.get('/shop/products/list').then(res => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    saveShopChatPos () {
    },
    changShopCatStatus () {
      this.$bus.on(AddshopCat, (data) => {
        this.catItem += 1
        const button = document.getElementById("shopChat")
        console.log(button)
        anime({
          targets: button,
          translateX: [-5, 5, -5, 5, 0], // 设置X轴的抖动动画
          duration: 1000, // 动画持续时间（1秒）
          easing: 'easeInOutSine' // 缓动函数
        })

        console.log('加入购物车=>', data)
      })
    }
  }
})
</script>
<style scoped lang="scss">

</style>
