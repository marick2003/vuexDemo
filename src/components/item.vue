<template>
    <div>
        <li>
            <div
            :class="{bold: isFolder}"
            @click="toggle"
            @dblclick="changeType">
            {{ model.name }}
            <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
            <item
                class="item"
                v-for="(model, index) in model.children"
                :key="index"
                :model="model">
            </item>
            <li class="add" @click="addChild">+</li>
            </ul>
        </li>
    </div>
</template>
<script>
export default {
    props: {
    model: Object
  },
  ///componets 用自身元件 要name
  name: 'item',

  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
<style scoped>

</style>
