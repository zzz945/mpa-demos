import {validateEmail, validatePhone, validateOnlyNumber} from 'mpa-common-library/utils/_validator.js'

export default {
  phone: {
    validator: (rule, value, cb) => {
      if (!value || !validatePhone(value)) {
        cb(new Error('Phone is not valid'))
      }
      cb()
    }
  },
  // empty is valid
  phone2: {
    validator: (rule, value, cb) => {
      if (value && !validatePhone(value)) {
        cb(new Error('Phone is not valid'))
      }
      cb()
    },
  },
  email: {
    validator: (rule, value, cb) => {
      if (!value || !validateEmail(value)) {
        cb(new Error('Email is not valid'))
      }
      cb()
    }
  },
  email2: {
    validator: (rule, value, cb) => {
      if (value && !validateEmail(value)) {
        cb(new Error('Email is not valid'))
      }
      cb()
    }
  },
  age: {
    validator: (rule, value, cb) => {
      if (!value || !validateOnlyNumber(value)) {
        cb(new Error('Age is not valid'))
      }
      cb()
    }
  },
  age2: {
    validator: (rule, value, cb) => {
      if (value && !validateOnlyNumber(value)) {
        cb(new Error('Age is not valid'))
      }
      cb()
    }
  },
  name: {
    required: true
  }
}