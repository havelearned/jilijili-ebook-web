<template>
    <q-card class="my_card" v-for="(item,index) in bookData" :key="index" >
      <div class="q-pa-md column">
        <div class="my_card_img">
          <q-img class="my_card_img" :src="item.imageUrl" fit="cover">
            <q-icon @click="addCat(item.productId)" class="absolute-top-right "
                    size="lg" color="orange" name="shopping_cart"
                    v-close-popup v-ripple>
              <q-tooltip>加入购物车</q-tooltip>
            </q-icon>
          </q-img>
        </div>
        <div class="my_card_font_arch">
          {{ ellipsis(item.productName, 8) }}
        </div>
        <div class="my_card_font_stong">
          {{ ellipsis(item.productName, 8) }}
        </div>
      </div>
    </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { ellipsis } from '@/boot/datatype'
import { AddshopCat } from '@/utils/constants'

export default defineComponent({
  props: {
    // 这里是字符串,后续必须是对象{}
    bookData: {
      default: [],
      require: true
    }
  },
  name: 'bookItem',
  data () {
    return {}
  },
  methods: {
    ellipsis,
    addCat (id) {
      this.$emit(AddshopCat, id)
      console.log(id)
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/bookItem";

</style>
