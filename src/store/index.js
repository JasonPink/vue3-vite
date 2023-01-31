import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'hello world',
      age: 27,
      name: 'joker'
    }
  },
  getters: {
    getNameAge(state) {
      return `${state.name}***${state.age}`
    }
  },
  actions: {
    changeState() {
      this.age++
      this.name += '2'
    }
  }
})
