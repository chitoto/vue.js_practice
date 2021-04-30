var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    languages: ['javascript', 'Ruby', 'Python']
  },
  methods: {
    onclick: function() {
      this.message = "clicked!"
    }
  }

})
