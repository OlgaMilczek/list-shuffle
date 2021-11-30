<template>
  <div class="form-floating">
    <input type="email" class="form-control"
           :id="inputId" :placeholder="placeholder" :disabled="disable"
           v-model="_model" >
    <label :for="inputId">{{ label }}</label>
  </div>
</template>

<script lang="ts">

import { Component, Prop, PropSync, Vue } from 'vue-property-decorator'

@Component({
  name: 'InputWithLabel'
})
export class InputWithLabel extends Vue {
  @PropSync('model')
  public _model!: string

  @Prop({ type: String, required: true })
  public readonly inputId!: string

  @Prop({ type: Boolean, required: false, default: false })
  public readonly disable!: boolean

  @Prop({ type: String, required: true })
  public readonly label!: string

  @Prop({ type: String, required: false })
  public readonly placeholder!: string

  @Prop({ type: String, required: false, default: 'text' })
  public readonly type!: string
}

export default InputWithLabel
</script>
