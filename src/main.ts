import { Vue } from 'vue-property-decorator'
import buildDependencyContainer from './app.container'
import App from './App.vue'
import store from './store'

class AppBootstrap {
  constructor () {
    this.loadDependencyContainer()
    this.loadVueApp()
  }

  private loadDependencyContainer (): void {
    buildDependencyContainer()
  }

  private loadVueApp (): void {
    Vue.config.productionTip = false

    new Vue({
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}

// eslint-disable-next-line no-new
new AppBootstrap()
