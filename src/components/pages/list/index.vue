<template>
  <div>
    <h2>hello {{ greeting }}</h2>
  </div>
</template>

<script>
export default {
  name: 'list',
  data: () => {
    return {
      greeting: 'list page'
    }
  }
}
</script>
