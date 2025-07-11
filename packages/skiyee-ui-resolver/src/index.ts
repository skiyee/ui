import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'

// TODO: 根据不同环境返回不同解析目录
export default function SkResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(?:Sk[A-Z]|sk-[a-z])/)) {
        let kebabCaseName: string

        if (name.startsWith('Sk')) {
          const kebabCase = name.slice(2).replace(/([A-Z])/g, '-$1').toLowerCase()
          kebabCaseName = `sk${kebabCase}`
        }
        else {
          kebabCaseName = name
        }

        return { name, from: `@skiyee/uni-ui/components/${kebabCaseName}.vue` }
      }
    },
  }
}
