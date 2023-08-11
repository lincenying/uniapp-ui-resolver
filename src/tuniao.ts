import type { ComponentResolver } from './types'
import { splitWords } from './utils'

export function TuNiaoResolver(): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (name.match(/^(Tn[A-Z]|tn-[a-z])/)) {
                const words = splitWords(name).map(item => item.toLowerCase())
                const dir = words[1]
                const file = words[2] ? `${words[1]}-${words[2]}` : words[1]
                const component = `@tuniao/tnui-vue3-uniapp/components/${dir}/src/${file}.vue`

                return {
                    name,
                    from: component,
                    sideEffects: '',
                }
            }
        },
    }
}
