import { object, string, array, number } from 'yup'
import validationRules from '~/validation/rules'
const { emailRule, passwordRule, passwordRepeatRule } = validationRules()

export const signInSchema = object({
  email: emailRule,
  password: passwordRule,
})

export const signUpSchema = object({
  email: emailRule,
  newPassword: passwordRule,
  passwordConfirm: passwordRepeatRule,
})

export const recoverPasswordSchema = object({
  email: emailRule,
})

export const newPasswordSchema = object({
  newPassword: passwordRule,
  newPasswordRepeat: passwordRepeatRule,
})

export const auditFormSchema = object({
  pages: array().of(
    object().shape({
      url: string().required().url(),
      selector: string(),
    })
  ),
  title: string().required(),
  resultsDir: string(),
  client: number().required(),
  auditor: number().required(),
  reporter: string(),
  width: string(),
  height: string(),
  username: string(),
  password: string(),
})
