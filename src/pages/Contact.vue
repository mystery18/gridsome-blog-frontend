<template>

  <Layout>

    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/contact-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have questions? I have answers.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div class="my-5">
              <form>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="inputName"
                    type="text"
                    placeholder="Enter your name..."
                    v-model="form.name"
                  />
                  <label for="inputName">Name</label>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="Enter your email..."
                    v-model="form.email"
                  />
                  <label for="inputEmail">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="inputPhone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    v-model="form.phone"
                  />
                  <label for="inputPhone">Phone Number</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="inputMessage"
                    placeholder="Enter your message here..."
                    style="height: 12rem"
                    v-model="form.message"
                  ></textarea>
                  <label for="inputMessage">Message</label>
                </div>
                <br />
                <button class="btn btn-primary text-uppercase" type="submit" @click.prevent="onSumit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>

</template>

<script>
import axios from 'axios'
export default {
  name: "ContactPage",
  data(){
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async onSumit() {
      try {
        const { data } = await axios({
          method: 'POST',
          url: 'http://localhost:1337/contacts',
          data: this.form
        })
        alert('发送成功')
      } catch (err) {
        alert('失败，请重试')
      }
    }
  }
};
</script>

<style>
</style>