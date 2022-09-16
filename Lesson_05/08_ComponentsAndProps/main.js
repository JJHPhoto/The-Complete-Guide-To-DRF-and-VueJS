const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          username: "alice",
          content: "First Comment"
        },
        {
          username: "bob",
          content: "Hello world"
        },
        {
          username: "ironman",
          content: "I'll save the world with iron"
        },
        {
          username: "batman",
          content: "I am vengence!"
        },
      ]
    }
  }
})

app.component("comment", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div>
      <div class="card-body">
        <p>{{ comment.username }}</p>
        <p>{{ comment.content }}</p>
      </div>
      <hr>    
    </div>
  `
})

const mountedApp = app.mount('#app')