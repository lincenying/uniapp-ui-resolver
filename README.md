# @lincy/uniapp-ui-resolver

uniapp ui组件库 按需自动导入

目前支持:

TuniaoUI [https://vue3.tuniaokj.com/zh-CN/guide/intro.html]

此版本和TuniaoUI官方版本在组件上无差异, 只是修复了 sass 1.80+ 版本报 !global 警告问题
TuniaoUIFork [https://github.com/lincenying/uniapp-ui-resolver]

Wot Design Uni [https://wot-design-uni.cn/guide/introduction.html]

Usage

```bash
pnpm i -D @uni-helper/vite-plugin-uni-components @lincy/uniapp-ui-resolver
```

### TuniaoUI 使用示例
```ts
import { TuNiaoForkResolver, TuNiaoResolver } from '@lincy/uniapp-ui-resolver'
import Components from '@uni-helper/vite-plugin-uni-components'

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
                // 二选一即可, 官方版用这个
                TuNiaoResolver(),
                // fork版, 用这个
                TuNiaoForkResolver(),
            ],
            dts: 'src/z-components.d.ts',
            directoryAsNamespace: true,
        }),
    ]
}
```

### Wot Design Uni 使用示例
```ts
import { wotDesignResolver } from '@lincy/uniapp-ui-resolver'
import Components from '@uni-helper/vite-plugin-uni-components'

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
