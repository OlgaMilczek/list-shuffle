<template>
  <div class="d-grid" :style="{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }">
    <template v-for="(item, index) in list">
      <slot v-bind:item="{item, index}" />
    </template>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Grid'
})
export class Grid extends Vue {
  @Prop({ type: Number, required: false, default: 3 })
  public readonly numberOfColumns!: number

  @Prop({ type: Array, required: true })
  public readonly list!: Array<unknown>
}

export default Grid
</script>
<style lang="scss" scoped>
@import "src/assets/scss/bootstrap/variables";

.d-grid {
  grid-gap: $grid-gutter-width;
}

</style>
