<template>
  <div class="container" style="margin-bottom: 30px">
    <form @submit.prevent="createMessage">
      <div class="form-group">
        <input
          type="text"
          name="message"
          class="form-control"
          placeholder="Please enter message!"
          v-model="newMessage"
        />
        <p class="text-danger" v-if="errorText">{{ errorText }}</p>
      </div>

      <button class="btn btn-primary" type="submit" name="action">
        Submit message
      </button>
    </form>
  </div>
</template>

<script>
import firebase1 from "@/firebase/init";

export default {
  name: "MessageCreation",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        firebase1.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "Message not entered! Please enter a message!";
      }
    }
  }
};
</script>
