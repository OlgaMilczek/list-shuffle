<template>
  <div class="card" :class="{ 'shadow': withShadow }">
    <slot />
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Box'
})
export class Box extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  public readonly withShadow!: boolean
}

export default Box
</script>
