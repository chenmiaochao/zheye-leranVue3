<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a href="#" class="navbar-brand">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inlint-item"><a href="#" class="btn btn-outline-light my-2">登録</a></li>
      <li class="list-inlint-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`こんにちわ ${user.name}`">
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
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
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
