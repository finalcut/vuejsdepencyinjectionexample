<template>
  <div>
    <h1>Kanye West Quotes</h1>
    <p>Quote: {{ quote }}</p>
    <button @click="getQuote">Get a quote!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'inversify-props'
import IKanyeWestService from '@/services/IKanyeWestService'
import { Action, Getter } from 'vuex-class'

@Component
export default class App extends Vue {
  @Inject()
  private kanyeWestService!: IKanyeWestService

  @Getter
  private quote!: string

  @Action
  private fetchKanyeQuote!: () => Promise<void>

  protected async mounted (): Promise<void> {
    await this.getQuote()
  }

  private async getQuote (): Promise<void> {
    this.fetchKanyeQuote()
  }
}
</script>
