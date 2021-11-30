<template>
  <div id="app" class="container p-5">
    <div class="row">
      <div class="col pb-4">
        <button class="btn btn-primary" @click="shuffleList"> shuffle list </button>
      </div>
    </div>
   <Grid :list="list">
     <template v-slot={item}>
        <Item :item="item.item" :isActive="item.index === activeItemIndex" @click.native="() => onItemClick(item.index)" />
     </template>
   </Grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { Grid } from '@/components/atoms'
import { Item } from '@/components/molecules'

import { Container } from '@/data/Container'

@Component({
  components: { Grid, Item }
})
export default class App extends Vue {
  public container = new Container()
  public activeItemIndex: number | null = null

  public get list (): Array<Record<string, unknown>> {
    return this.container.list
  }

  public onItemClick (index: number): void {
    if (this.activeItemIndex === index) {
      this.activeItemIndex = null
      return
    }
    this.activeItemIndex = index
  }

  public shuffleList (): void {
    this.container.shuffleList()
  }
}
</script>
