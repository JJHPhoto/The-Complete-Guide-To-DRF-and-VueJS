const app = Vue.createApp({
  data() {
    return {
      users: [
        {
          id: 123,
          name: "phil",
          profession: "bossman"
        },
        {
          id: 143,
          name: "mark",
          profession: "carpenter"
        },
        {
          id: 423,
          name: "keith",
          profession: "reviewer"
        },
        {
          id: 163,
          name: "jill",
          profession: "author"
        },        {
          id: 123,
          name: "bets",
          profession: "boss"
        },
      ]
    }
  }

})

const mountedApp = app.mount("#app")