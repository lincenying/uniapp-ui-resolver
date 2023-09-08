# @lincy/uniapp-ui-resolver

uniapp ui组件库 按需自动导入

目前支持:

TuniaoUI [https://vue3.tuniaokj.com/zh-CN/guide/intro.html]

Wot Design Uni [https://wot-design-uni.cn/guide/introduction.html]

Usage

```bash
pnpm i -D @uni-helper/vite-plugin-uni-components @lincy/uniapp-ui-resolver
```

### TuniaoUI 使用示例
```ts
import Components from '@uni-helper/vite-plugin-uni-components'
import { TuNiaoResolver } from '@lincy/uniapp-ui-resolver'

export default {
    plugins: [
        Components({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            extensions: ['vue', 'tsx', 'jsx'],
            resolvers: [
                TuNiaoResolver(),
            ],
            dts: 'src/z-components.d.ts',
            directoryAsNamespace: true,
        }),
    ]
}
```

### Wot Design Uni 使用示例
```ts
import Components from '@uni-helper/vite-plugin-uni-components'
import { wotDesignResolver } from '@lincy/uniapp-ui-resolver'

export default {
    plugins: [
        Components({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            extensions: ['vue', 'tsx', 'jsx'],
            resolvers: [
                wotDesignResolver(),
            ],
            dts: 'src/z-components.d.ts',
            directoryAsNamespace: true,
        }),
    ]
}
```

License

MIT
