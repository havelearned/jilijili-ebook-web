import { Notify } from 'quasar'

export const error = (msg, html) => Notify.create({
  message: msg,
  timeout: 5000,
  html: !!html,
  color: 'negative'
})
export const info = (msg, html) => Notify.create({
  message: msg,
  html: !!html,
  color: 'positive'
})
export const warn = (msg, html) => Notify.create({
  message: msg,
  html: !!html,
  color: 'warning'
})
export const retMsg = (r) => {
  if (r.success) {
    info(r.message)
  } else {
    error(r.message)
  }
}
