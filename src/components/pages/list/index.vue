<template>
  <div>
    <h2>hello {{ greeting }}</h2>
    <div><Button @click="handleClick">Element Button</Button></div>
    <div>
      <el-input v-model="text" placeholder="这里输入文字"></el-input>
    </div>
  </div>
</template>

<script>
import { Button, Input } from 'element-ui'

export default {
  name: 'list',
  data: () => {
    return {
      greeting: 'list page',
      text: 'hello'
    }
  },
  methods: {
    handleClick () {
      // eslint-disable-next-line
      console.log(`click el button`)
    }
  },
  components: {
    Button,
    'el-input': Input
  }
}
</script>
