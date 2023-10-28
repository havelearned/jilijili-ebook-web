<template>
  <div class="q-page " style="height: 100%;">
    <div class="column">
      <!--      顶部-->
      <div class="full-width bg-orange">
        <q-list class="flex justify-center">
          <q-item class="">
            <q-item-label class="q-ma-md-md products_title_font">ALL BootS</q-item-label>
          </q-item>
          <q-item class="  ">
            <q-item-label class="q-ma-md-md products_title_font">ALL BootS</q-item-label>
          </q-item>
          <q-item class="  ">
            <q-item-label class="q-ma-md-md products_title_strong_font">
              <div class="dot bg-red" v-show="showDot" ref="dot" style="height: 50px;width: 50px"></div>

              检索电子书</q-item-label>
          </q-item>
          <q-item class="  ">
            <q-item-label class="q-ma-md-md products_title_font">ALL BootS</q-item-label>
          </q-item>
          <q-item class="  ">
            <q-item-label class="q-ma-md-md products_title_font">ALL BootS</q-item-label>
          </q-item>
        </q-list>
      </div>
      <!-- 主题 -->
      <div class="flex justify-center items-start ">
        <div class="page_bg_by_products">
          <div class=" ">
            <q-table color="white" grid
                     :rows="list"
                     :columns="columns"
                     :loading="false"
                     :rows-per-page-options="[10,20,50,100]"
                     selection="multiple"
                     v-model:pagination="pagination"
                     v-model:selected="selected"
                     @request="query"
                     separator="cell"
                     :row-key="productId"
                     grid-header>
              <template v-slot:header>
                  <div class="q-ma-md text-white  flex justify-center items-center ">
                    <!--                  <q-btn class="q-ma-xs text-white" outline label="历史"-->
                    <!--                         dense v-for="(item,index) in 4" :key="index">-->
                    <!--                    <q-icon name="clear"></q-icon>-->
                    <!--                  </q-btn>-->
                    <q-input color="white" borderless dense debounce="300"
                             style="width: 50vmin;"
                             v-model.trim="searchForm.productName" class="bg-white"
                             placeholder="书名或者作者">
                      <template v-slot:before>
                        <q-btn color="orange" icon-right="search" @click="query" />
                      </template>
                      <template v-slot:after>
                        <q-btn icon-right="sort" color="black"></q-btn>
                      </template>
                    </q-input>
                  </div>
              </template>
              <template v-slot:item="item">
                <div class="flex justify-center">
                  <item style="width: 80vmin" class="q-ma-xs " :book-item="item.row"
                        :key="item.row.productId"/>
                </div>
              </template>
              <template v-slot:loading>
                <Loading/>
              </template>

            </q-table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { defineComponent } from 'vue'
import item from '@/views/ebook/item.vue'
import Loading from '@/views/ebook/loading.vue'
import { mixins } from '@/boot/mixins'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'books',
  mixins: [mixins],
  components: {
    Loading,
    item
  },
  data () {
    return {
      showDot: false,

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
      simple: [
        {
          label: '分类',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [
            {
              label: '历史',
              icon: 'restaurant_menu'
            },
            {
              label: '计算机',
              icon: 'room_service',
              disabled: true,
              children: [
                { label: 'java' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: '数学',
              icon: 'photo',
              children: [
                {
                  label: '离散数学  ',
                  img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
                }
              ]
            }
          ]
        }
      ],
      url: {
        list: '/shop/products/list'
      }

    }
  },
  created () {
    this.findList()
  },
  methods: {
    filter () {

    },
    findList () {
      this.loading = true
      this.pagination.size = 10
      this.$api.get(this.url.list, {
        params: { ...this.searchForm, ...this.pagination }
      }).then(res => {
        this.list = res.data.records
        this.pagination.size = res.data.size
        this.pagination.page = res.data.current
        this.pagination.rowsNumber = res.data.pages
      })
    },
    animateDto () {

    }
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/ebook";
</style>
