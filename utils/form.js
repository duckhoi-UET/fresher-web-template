/* eslint-disable prefer-promise-reject-errors */
import _each from "lodash/each";
import _isArray from "lodash/isArray";
import _isObject from "lodash/isObject";

export const phoneValidator = (rule, value, callback) => {
  if (
    !value ||
    /((09|03|07|08|05|\+849|\+843|\+847|\+848|\+845)+([0-9]{8})\b)/g.test(value)
  ) {
    callback();
  } else {
    callback(new Error("Nhập đúng đinh dạng số điện thoại"));
  }
};

export const usernameValidator = (rule, value, callback) => {
  if (!value || /^[a-zA-Z(0-9)?_]{6,}$/.test(value)) {
    callback();
  } else {
    callback(
      new Error("Tên tài khoản ít nhất 6 ký tự chỉ bao gồm chữ, số và ký tự _")
    );
  }
};

export const passwordValidtor = (rule, value, callback) => {
  if (!value || /^[a-zA-Z0-9@.$!%*#?&]{8,}$/.test(value)) {
    callback();
  } else {
    callback(
      new Error(
        "Mật khẩu ít nhất 8 kí tự, bao gồm chữ hoa, thường, số và ký tự đặc biệt"
      )
    );
  }
};

export const validEmail = (rule, value, callback) => {
  if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
    callback();
  } else {
    callback(new Error("Nhập đúng định dạng email!"));
  }
};
