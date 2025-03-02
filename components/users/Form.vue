<template>
  <a-form-model
    ref="form"
    :model="form"
    :rules="rules"
    layout="vertical"
    :colon="false"
    autocomplete="off"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
      <a-form-model-item label="Full Name" prop="fullName">
        <a-input
          v-model="form.fullName"
          placeholder="Full Name"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item label="Username" prop="userName">
        <a-input
          v-model="form.userName"
          placeholder="Username"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item label="Password" prop="password">
        <a-input-password
          v-model="form.password"
          placeholder="Password"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item label="Phone Number" prop="phone">
        <a-input
          v-model="form.phone"
          placeholder="Phone Number"
          autocomplete="off"
        />
      </a-form-model-item>
    </div>
    <a-form-model-item label="Email" prop="email">
      <a-input v-model="form.email" placeholder="Email" autocomplete="off" />
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import _cloneDeep from "lodash/cloneDeep";
import _map from "lodash/map";
import {
  passwordValidtor,
  phoneValidator,
  usernameValidator,
} from "@/utils/form";

const defaultForm = {
  userName: "",
  password: "",
  fullName: "",
  phone: "",
  email: "",
};

export default {
  components: {},

  props: {
    user: Object,
  },

  data() {
    return {
      form: this.user
        ? _cloneDeep({
            ...this.user,
            password: "",
          })
        : _cloneDeep(defaultForm),
      rules: {
        fullName: [
          {
            required: true,
            message: "Please enter your name",
            trigger: "blur",
          },
        ],
        userName: [
          {
            required: true,
            message: "Please enter your username",
            trigger: "blur",
          },
          { validator: usernameValidator, trigger: "blur" },
        ],
        password: [
          ...[
            !this.user
              ? {
                  required: true,
                  message: "Please enter your password",
                  trigger: "blur",
                }
              : {},
          ],
          { validator: passwordValidtor, trigger: "blur" },
        ],

        phone: [{ validator: phoneValidator, trigger: "blur" }],
        email: [
          {
            type: "email",
            message: "Please enter a valid email format",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
        }
      });
    },
  },
};
</script>
