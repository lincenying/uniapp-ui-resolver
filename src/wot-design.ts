import type { ComponentResolver } from './types'

function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
}

export function wotDesignResolver(): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (name.match(/^Wd[A-Z]/)) {
                const compName = kebabCase(name)
                return {
                    name,
                    from: `wot-design-uni/components/${compName}/${compName}.vue`,
                }
            }
        },
    }
}
