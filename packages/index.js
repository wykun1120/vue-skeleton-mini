import Skeleton from './skeleton'

const components = [
  Skeleton
]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
