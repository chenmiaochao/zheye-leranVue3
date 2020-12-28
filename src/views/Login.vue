<template>
<div>
  <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">电子邮箱</label>
        <validate-input
          :rules="emailRules" v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        />
        {{emailVal}}
        </div>
        <div class="mb-3">
          <label class="form-label">密码</label>
          <validate-input
            :rules="passwordRules"
            v-model="passwordVal"
            placeholder="请输入密码"
            type="password"
          />
        </div>
        <template #submit>
          <span class="btn btn-danger">Submit</span>
        </template>
    </validate-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const emailVal = ref('111@test.com')

    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordVal = ref('111111')
    const passwordRules: RulesProp = [
      { type: 'required', message: '请输入密码' }
    ]
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const payload = {
          email: emailVal.value,
          password: passwordVal.value
        }
        store.dispatch('loginAndfetch', payload).then(data => {
          console.log(data)
          router.push('/')
        })
      }
    }
    return {
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onFormSubmit
    }
  }
})
</script>
