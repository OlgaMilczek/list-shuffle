<template>
  <div id="app" class="container p-5">
    <div class="row pb-4">
      <div class="col-8">
        <InputWithLabel :model.sync="title" label="Change title" inputId="title" :disable="activeItemIndex === null" />
      </div>

      <div class="col-4">
        <button class="btn btn-primary w-100 h-100" @click="shuffleList"> shuffle list </button>
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

import { Grid, InputWithLabel } from '@/components/atoms'
import { Item } from '@/components/molecules'

import { Container } from '@/data/Container'

@Component({
  components: { Grid, Item, InputWithLabel }
})
export default class App extends Vue {
  public container = new Container()
  public activeItemIndex: number | null = null

  public get list (): Array<Record<string, unknown>> {
    return this.container.list
  }

  public get title (): string {
    if (this.activeItemIndex === null) {
      return ''
    }
    return this.container.list[this.activeItemIndex].title as string
  }

  public set title (value: string) {
    if (this.activeItemIndex === null) {
      return
    }

    this.container.list[this.activeItemIndex].title = value
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
    this.activeItemIndex = null
  }
}
</script>
