<template>
  <div class="q-ma-md">
    <div class="flex justify-center" v-if="!loading">
      <!--      书籍信息-->
      <q-card class="my-card q-pa-lg-lg flex justify-between no-wrap bg-black " flat square>
        <div class="col-6">
          <q-img :src="product.imageUrl" class="q-ma-md" width="300px" height="440px">
            <q-icon name="bookmark_border" size="lg" color="gray" class="absolute-right q-ma-md">
              <q-tooltip>收藏</q-tooltip>
            </q-icon>
            <template v-slot:error>
              <q-icon name="bookmark_border" class="absolute-right q-ma-md">
                <q-tooltip>收藏</q-tooltip>
              </q-icon>
              <div class="absolute-center flex-center">
                书籍封面加载失败!!!
              </div>
            </template>
          </q-img>
        </div>
        <div class="text-white">
          <q-card-section class="q-gutter-md">
            <div class="text-h4">{{ product.productName }}</div>
            <div class=" text-h2">{{ product.productName }}</div>
          </q-card-section>
          <q-card-section class="full-width">
            <q-tr>
              <q-td>
                <q-icon name="menu"></q-icon>
                4.32 (100)
              </q-td>
              <q-td>4个阅读者</q-td>
            </q-tr>
            <q-tr>
              <q-td>分类</q-td>
              <q-td>历史</q-td>
            </q-tr>
            <q-tr>
              <q-td>发布时间</q-td>
              <q-td>2023-05-05 14:32:18</q-td>
            </q-tr>
            <q-tr>
              <q-td>语言</q-td>
              <q-td>中文</q-td>
            </q-tr>
            <q-tr>
              <q-td>总页数</q-td>
              <q-td>1023</q-td>
            </q-tr>
            <q-tr>
              <q-td>平均阅读完时间</q-td>
              <q-td>5~6小时</q-td>
            </q-tr>
            <q-tr>
              <q-td>书籍类型</q-td>
              <q-td>羊皮卷</q-td>
            </q-tr>
            <q-tr>
              <q-td>发布者</q-td>
              <q-td>admin</q-td>
            </q-tr>
            <q-tr style="font-size: 24px;font-weight: 700;">
              <q-td style="color: grey;text-decoration: line-through double red; ">$12.50</q-td>
              <q-td class="text-red">优惠价:${{ product.price }}</q-td>
            </q-tr>
            <q-tr style="font-size: 24px;font-weight: 700;">
              <q-th>
                <q-btn class="qbtn_1" color="yellow" text-color="black" size="lg" label="购买">
                  <span>购买</span>
                </q-btn>
              </q-th>
              <q-th>
                <q-btn @click="toCat" color="yellow" outline text-color="yellow" label="加入购物车">
                </q-btn>
              </q-th>
            </q-tr>
          </q-card-section>
        </div>
      </q-card>
      <!--简介-->
      <q-card class="col-5 bg-black q-pa-lg" flat>
        <div class=" q-ma-lg bg-white"
             style="width: 400px;border: white solid 2px;border-radius: 10px">
          <q-card-section>
            <div class="text-h3">内容简介</div>
            <!--            <q-btn class="absolute-right q-ma-md" size="lg" flat icon-right="stop"></q-btn>-->
            <q-btn class="absolute-right q-ma-md" size="lg" flat icon-right="not_started"></q-btn>
          </q-card-section>
          <q-card-section>
            {{ ellipsis(product.description, 300) }}
          </q-card-section>
          <q-separator/>
          <q-space/>
          <q-card-actions>
            <q-space/>
            <q-btn flat label="阅读预览" icon="remove_red_eye"/>
            <q-space/>
          </q-card-actions>
        </div>
      </q-card>
    </div>

    <div class="flex justify-center" v-else>
      <div class="q-pa-md">
        <div class="q-gutter-md row">
          <q-skeleton width="350px" height="400px"/>
          <q-skeleton width="300px" height="400px" class="q-gutter-xs">
            <tr v-for="n in 10" :key="n">
              <td class="text-left">
                <q-skeleton animation="blink" type="text" width="85px"/>
              </td>
              <td class="text-right">
                <q-skeleton animation="blink" type="text" width="50px"/>
              </td>
            </tr>

            <div class="row">
              <q-skeleton size="100px" class="row">
                <tr>
                  <td>
                    <q-skeleton class="col-6" width="150px" height="30px"/>
                  </td>
                  <td>
                    <q-skeleton class="col-6" width="150px" height="30px"/>
                  </td>
                </tr>
              </q-skeleton>
              <q-space/>
              <q-skeleton size="100px" class="row">
                <tr>
                  <td>
                    <q-skeleton class="col-6" width="150px" height="30px"/>
                  </td>
                  <td>
                    <q-skeleton class="col-6" width="150px" height="30px"/>
                  </td>
                </tr>
              </q-skeleton>
            </div>
          </q-skeleton>
          <q-skeleton width="200px" height="400px"/>
        </div>
      </div>
      <q-separator/>
    </div>

    <div class="column ">
      <!--  推荐书书籍  -->
      <div class="column q-pa-md  flex justify-center " style="margin: 0 auto">
          <div class="text-h5">
            为您推荐
            <q-separator color="blue" size="xs"/>
          </div>
        <q-scroll-area style="height: 360px; width: 130vmin">
          <div class="q-gutter-md row no-wrap flex justify-center">
            <bookItem :book-data="recommendList" v-for="(item,index) in 6" :key="index"></bookItem>
          </div>
        </q-scroll-area>
        <q-separator/>
      </div>

      <!--  评论-->
      <div class=" " style="margin:0 auto; width: 70%;">
        <div class="row">
          <div class="text-h5">
            评论信息
          </div>
          <q-space/>
          <q-btn outline size="lg" text-color="black" label="我要点评"></q-btn>
          <q-separator/>
        </div>

        <q-table
          grid
          ref="tableRef"
          :rows="list"
          :columns="columns"
          row-key="name"
          filter="filter"
          :loading="loading"
          v-model:pagination="pagination"
          @request="onRequest"
          hide-header
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="form.context" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
          </template>
          <template v-slot:item="props">
            <div class="flex justify-center">
              <q-card v-for="(item,index) in 4" :key="index" class="my_card_comment q-ma-md">
                <div class="column">
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-avatar size="48px">
                        <img src="https://cdn.quasar.dev/img/avatar.png"/>
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Mary</q-item-label>
                      <q-item-label caption>2 new messages</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      3 min ago
                    </q-item-section>
                  </q-item>
                  <div>
                    <q-btn dense color="purple" round icon="email" class="q-ml-md">
                      <q-badge color="red" floating>199</q-badge>
                    </q-btn>
                  </div>
                  <div class="q-pa-md">
                    '评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容'
                  </div>
                  <div class="q-pa-md">
                    <q-btn outline label="阅读更多" color="black"/>
                  </div>
                </div>
              </q-card>
            </div>
          </template>
        </q-table>

      </div>
    </div>
  </div>

</template>
<script>
import { defineComponent } from 'vue'
import BookItem from '@/views/details/bookItem.vue'
import { AddshopCat } from '@/utils/constants'
import { mixins } from '@/boot/mixins'
import { ellipsis } from '@/boot/datatype'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'details',
  mixins: [mixins],
  components: { BookItem },
  data () {
    return {
      currProductId: '',
      product: {},
      recommendList: [],
      showCart: true,
      cartItemStyle: {
        left: '0px',
        top: '0px'
      },
      columns: [
        {}
      ],
      url: {
        recommend: '/shop/products/search'
      }

    }
  },
  created () {
    this.findProduct()
    this.findRecommend()
  },
  mounted () {
  },
  methods: {
    ellipsis,
    filter () {

    },
    onRequest () {
    },
    findRecommend () {
      this.loading = true
      if (this.currProductId) {
        const param = {
          size: 5,
          productId: this.currProductId
        }
        this.$api.get(this.url.recommend, { params: param }).then(res => {
          this.recommendList = res.data.records
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    // 得到当前商品信息
    findProduct () {
      this.loading = true
      this.currProductId = this.$route.query.productId
      if (this.currProductId) {
        this.$api.get(`/shop/products/${this.currProductId}`).then(res => {
          this.product = res.data
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    /**
     * 加入购物车
     */
    toCat () {
      const port = {}
      this.$bus.emit(AddshopCat, port)
    },
    moveCartItemTo (x, y) {
      this.cartItemStyle.left = x + 'px'
      this.cartItemStyle.top = y + 'px'
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/styles/details';

</style>
