import * as yup from 'yup'

const registerValidation= yup.object().shape({
  username: yup.string().required('Username is required'),
  email:yup.string().email().required('Email is required'),
  password:yup.string().required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'),null],'Passwords must match').required('confirm password is required')
})

export {registerValidation}