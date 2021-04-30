var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    count: 0,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo',
      age: 27
    },
    colors: ['Red', 'Green', 'Blue'],
    toggle: false
  }
})
