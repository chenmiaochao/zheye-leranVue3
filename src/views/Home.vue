<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <h2>{{biggerColumnLen}}</h2>
      <div class="row py-lg-5">
        <div class="col-lg-6 com-md-8 mx-auto">
          <img src="../assets/4.png" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作,自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps, ColumnProps } from '../store'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    // 因为vue3中store是响应式的,所以读取state(状态),最好的方法是computed
    const list = computed(() => store.state.columns)
    const biggerColumnLen = computed(() => store.getters.biggerColumnLen)
    return {
      list,
      biggerColumnLen
    }
  }
})
</script>
