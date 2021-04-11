<template>
  <b-form @submit="onSubmit">
    <b-form-group id="input-group-2" label="Name" label-for="input-2">
      <b-form-input
        required
        id="input-2"
        v-model="form['your-name']"
      ></b-form-input>
      <small v-if="errors" class="error">{{ errors["-ve-your-name"] }}</small>
    </b-form-group>

    <b-form-group id="input-group-1" label="Email" label-for="input-1">
      <b-form-input
        id="input-1"
        required
        v-model="form['your-email']"
        type="email"
      ></b-form-input>
      <small v-if="errors" class="error">{{ errors["-ve-your-email"] }}</small>
    </b-form-group>

    <b-form-group id="input-group-3" label="Messages" label-for="message">
      <b-form-textarea
        id="textarea"
        v-model="form['your-message']"
        placeholder="Enter something..."
        rows="6"
        max-rows="6"
      ></b-form-textarea>
      <small v-if="errors" class="error">{{
        errors["-ve-your-message"]
      }}</small>
    </b-form-group>

    <b-button v-if="!submiting" type="submit" variant="primary"
      >Submit</b-button
    >
    <div v-if="submiting && !sent" class="p-3">
      <b-spinner type="grow"></b-spinner>
    </div>
    <div v-if="sent" class="p-3">Thank you!</div>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: null,
      submiting: false,
      sent: false,
      form: {
        "your-name": "",
        "your-email": "",
        "your-message": ""
      },
      url: `${process.env.VUE_APP_API_URL}contact-form-7/v1/contact-forms/83/feedback`
    };
  },
  methods: {
    onSubmit(e) {
      this.submiting = true;
      e.preventDefault();
      const formData = new FormData();
      Object.keys(this.form).forEach(key => {
        formData.append(key, this.form[key]);
      });

      axios.post(this.url, formData).then(res => {
        this.errors = null;
        // console.log(res.data)

        if (res.data.status === "mail_sent") {
          console.log(res.data.status);
          this.sent = true;
        } else {
          this.errors = {};
          this.submiting = false;
          res.data.invalid_fields.forEach(el => {
            this.errors[el.error_id] = el.message;
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
form {
  //   background: rgba($color: #fff, $alpha: 0.7);
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;

  textarea {
    min-height: 150px;
    max-height: 150px !important;
  }

  label {
    // color: $blue;
    text-transform: uppercase;
  }
  small.error {
    color: $error;
  }
}
</style>
