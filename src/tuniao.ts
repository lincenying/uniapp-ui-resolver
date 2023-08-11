import type { ComponentResolver } from './types'
import { splitWords } from './utils'

export function TuNiaoResolver(): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (name.match(/^(Tn[A-Z]|tn-[a-z])/)) {
                const words = splitWords(name).map(item => item.toLowerCase())
                let dir = words[1]
                let file = words[1]
                if (words[2]) {
                    if (words[2] === 'group' || words[2] === 'item')
                        dir = `${words[1]}-${words[2]}`
                    else
                        dir = words[1]

                    file = `${words[1]}-${words[2]}`
                }
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
