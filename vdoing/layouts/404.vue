<template>
  <div class="theme-container">
    <div class="theme-vdoing-content">
      <span>404</span>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `Who am I? Where am i?`,
  `This is a Four-Oh-Four.`,
  `It seems that our link is broken~`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-vdoing-content
  margin 3rem auto
  padding 1.5rem
  span
    font-size 6rem
    color $accentColor
</style>
