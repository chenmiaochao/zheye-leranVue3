<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-brand">者也专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inlint-item"><router-link to="/login" class="btn btn-outline-light my-2">登録</router-link></li>
      <li class="list-inlint-item"><router-link to="/login" class="btn btn-outline-light my-2">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`こんにちわ ${user.nickName}`">
        <dropdown-item><a href="#" class="dropdown-item">新規記事</a></dropdown-item>
        <dropdown-item disabled><a href="#" class="dropdown-item">編集</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">ログアウト</a></dropdown-item>

        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { UserProps } from '../store'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
