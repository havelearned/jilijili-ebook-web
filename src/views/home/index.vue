<template>
  <div>
    <!--  打字机效果:title_auto_show -->
    <div class="text-h2 q-pa-sm text-white title_auto_show  ">
      <TypeiComponent class="no-wrap" :strings="'阅读让世界变得更大 | Reading makes the world bigger'"/>
    </div>
    <!--  推荐的电子书 -->
    <div class="row q-pa-lg-lg">
      <div class="col-6 q-pa-md">
        <q-card bordered class="card_bg">
          <q-card-section class="card_font text-white">
            想要找点什么阅读?
          </q-card-section>

          <q-card-section class="card_label text-grey"
                          style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">
            <TypeiComponent class="no-wrap" :strings="`
          人生是一段奇妙而短暂的旅程，我们在其中探索、成长和体验。每个人都有自己的故事，每个人都有自己的梦想和目标。在这个过程中，我们会遇到挫折和困难，但也会有喜悦和成功。
人生的真谛在于珍惜当下，感恩所拥有的一切。不要被过去的遗憾和未来的焦虑所困扰，而是要活在当下，用心感受每一个瞬间的美好。
人生是一本书，我们是自己的作者。在帮助他人的同时，也会找到自己的价值和意义。`"/>
          </q-card-section>
          <q-card-actions>
            <q-btn outline color="orange">立即阅读</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-6 q-pa-md">
        <q-card bordered class="card_bg">
          <q-carousel swipeable animated thumbnails infinite class="full-width"
                      v-model="slide">
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"/>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"/>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"/>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"/>
          </q-carousel>
        </q-card>

      </div>
    </div>
  </div>

  <!-- 畅销的电子书 -->
  <div class="q-pa-lg bg-black">
    <div class="text-h4 q-pa-lg text-white">畅销书籍</div>
    <div class="text-white row q-gutter-lg justify-center items-center ">
<!--      -->
      <q-card bordered dark v-for="(item,index) in list"
              :key="item.productId"
              @click="$router.push({path:`/details`,query:{
                productId:`${item.productId}`,}})"
              class="q-card-1 " >
        <div v-if="index === list.length-1" class=" h2 bg-orange flex justify-center items-center"
             style="height: 256px;font-weight: 700;">
          <p class="text-black">
            查看所有
          </p>
        </div>
        <div v-else>
          <q-card-section >
            <div class="column justify-center items-center">
              <div class="row text-h5">
                <q-space/>
                <q-icon class="absolute-right" size="lg" name="sell" v-ripple v-touch-swipe>
                  <q-tooltip>加入购物车</q-tooltip>
                </q-icon>
              </div>
              <div class="text-h4 ">{{ellipsis(item.productName,8)}}</div>
            </div>
          </q-card-section>
          <q-card-section class="full-width flex justify-center "  >
              <q-btn-group class="column" flat>
                <q-btn color=""  icon="comment">5
                  <q-tooltip>评论</q-tooltip>
                </q-btn>
                <q-btn colo="gray">
                  <template v-slot:default>
                    4.5
                    <q-icon name="star_border"></q-icon>
                    (120)
                    <q-tooltip>收藏</q-tooltip>
                  </template>
                </q-btn>
                <q-btn color="orange" size="lg" >
                  <template v-slot:default>
                    $20
                    <q-icon name="paid"></q-icon>
                    <q-tooltip>价格</q-tooltip>
                  </template>
                </q-btn>
              </q-btn-group>
          </q-card-section>
        </div>

      </q-card>
    </div>

  </div>

  <!-- 推荐作者  -->
  <div class="q-ma-md bg-black text-white">
    <div class="row q-pa-md">
      <div class="col-6 column">
        <div class="text-h4">
          接下来为您推荐的作者!
        </div>
        <div class="q-pa-md">

          <q>
            你来对地方了。告诉我们你过去喜欢什么标题或流派，
          </q>
          <br/>
          <q>
            我们会给你令人惊讶的有见地的推荐。
          </q>

        </div>
      </div>
      <div class="col-6 flex justify-end">

        <q-icon size="100px" name="menu" v-ripple></q-icon>
      </div>
    </div>

  </div>
  <!-- 受欢迎的作家 -->
  <div class="q-pa-lg bg-black">
    <div class="text-h4 q-pa-lg text-white">受欢迎的作家</div>
    <div class="q-gutter-md row flex justify-center items-center">
      <q-card dark style="width: 300px" v-for="(item,index) in 10" :key="index">
        <div class="row">
          <div class="col-3"
               style="background-image: url('https://picdl.sunbangyan.cn/2023/10/23/77d92bb115e9329c77ebf178514a116b.jpg')">
          </div>
          <div class="col-9 bg-white">
            <q-card-section class="text-black">
              <div class="column">
                <div>20本书</div>
                <div style="font-weight: 700;font-size: 20px">Fyodor</div>
                <div style="font-weight: 700;font-size: 20px">Dostoyevskiy</div>
              </div>
            </q-card-section>
          </div>
        </div>
        <q-icon class="absolute-right bg-black q-ma-md" size="lg" name="sell"
                style="border-radius: 50%"></q-icon>

      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TypeiComponent from '@/components/typeiComponent.vue'
import { mixins } from '@/boot/mixins'
import { ellipsis } from '@/boot/datatype'

export default defineComponent({
  name: 'viewHome',
  mixins: [mixins],
  components: { TypeiComponent },
  data () {
    return {
      slide: 1,
      columns: [
        { name: 'productId', align: 'center', label: '商品id', field: 'productId' },
        { name: 'categoryId', align: 'center', label: '分类id', field: 'categoryId' },
        { name: 'categories', align: 'center', label: '分类信息', field: 'categories' },
        { name: 'productName', align: 'center', label: '商品名称', field: 'productName' },
        { name: 'description', align: 'center', label: '信息', field: 'description' },
        { name: 'price', align: 'center', label: '价格', field: 'price' },
        { name: 'stockQuantity', align: 'center', label: '库存', field: 'stockQuantity' },
        { name: 'imageUrl', align: 'center', label: '图片地址', field: 'imageUrl' },
        { name: 'createdTime', align: 'center', label: '创建时间', field: 'createdTime' },
        { name: 'updatedTime', align: 'center', label: '更新时间', field: 'updatedTime' }
      ],
      url: {
        list: ''
      }
    }
  },
  methods: {
    ellipsis,
    fineData () {
      this.searchForm.size = 9
      this.$api.get('/shop/products/list', {
        params: this.searchForm
      }).then(res => {
        this.list = res.data.records
      }).catch((error) => {
        console.log(error)
      })
    }

  },
  created () {
    this.fineData()
    console.log(this.list)
  },
  mounted () {
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/home/index";

</style>
