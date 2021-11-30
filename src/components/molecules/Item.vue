<template>
  <Box :class="{ 'border-primary': isActive }" :withShadow="isActive" >
    <div class="p-3">
      <template v-for="(value, name) in item">
        <span :key="name">{{ name }}: <b>{{ value }}</b></span>
      </template>
    </div>
  </Box>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'

import { Box } from '@/components/atoms'

@Component({
  name: 'Item',
  components: { Box }
})
export class Item extends Vue {
  @Prop({ type: Object, required: true })
  public readonly item!: Record<string, unknown>

  @Prop({ type: Boolean, required: false, default: false })
  public readonly isActive!: boolean
}

export default Item
</script>
