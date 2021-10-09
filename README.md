# vue3-ts-cms-template

## 一. 运行项目

```js
npm install

npm run serve
```
## 二. 编辑器及npm源初始化配置

### 2.1 设置.npmrc

设置项目共用统一的npm源，有利于排查安装错误，也有利于新人接手项目

```js
register="http://registry.npm.taobao.org"
```

### 2.2. 集成editorconfig配置

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

```yaml
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

VSCode需要安装一个插件：EditorConfig for VS Code

![image-20210722215138665](https://tva1.sinaimg.cn/large/008i3skNgy1gsq2gh989yj30pj05ggmb.jpg)

### 2.3. 设置gitignore

```js
.DS_Store
node_modules
/dist


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## 三. 代码规范配置

### 3.1. 使用ESLint检测

1.在前面创建项目的时候，我们就选择了ESLint，所以Vue会默认帮助我们配置需要的ESLint环境。

2.VSCode需要安装ESLint插件：

![image-20210722215933360](https://tva1.sinaimg.cn/large/008i3skNgy1gsq2oq26odj30pw05faaq.jpg)

3.解决eslint和prettier冲突的问题：

安装插件：（vue在创建项目时，如果选择prettier，那么这两个插件会自动安装）

```shell
npm i eslint-plugin-prettier eslint-config-prettier -D
```

添加prettier插件：

```json
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    'plugin:prettier/recommended'
  ],
```

### 3.2 使用prettier工具

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

1.安装prettier

```shell
npm install prettier -D
```

2.配置.prettierrc文件：

* useTabs：使用tab缩进还是空格缩进，选择false；
* tabWidth：tab是空格的情况下，是几个空格，选择2个；
* printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；
* singleQuote：使用单引号还是双引号，选择true，使用单引号；
* trailingComma：在多行输入的尾逗号是否添加，设置为 `none`；
* semi：语句末尾是否要加分号，默认值true，选择false表示不加；

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

3.创建.prettierignore忽略文件

```js
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```



4.VSCode需要安装prettier的插件

![image-20210722214543454](https://tva1.sinaimg.cn/large/008i3skNgy1gsq2acx21rj30ow057mxp.jpg)

5.测试prettier是否生效

* 测试一：在代码中保存代码；
* 测试二：配置一次性修改的命令；

在package.json中配置一个scripts：

```json
    "prettier": "prettier --write ."
```

### 3.3. git Husky和eslint

虽然我们已经要求项目使用eslint了，但是不能保证组员提交代码之前都将eslint中的问题解决掉了：

* 也就是我们希望保证代码仓库中的代码都是符合eslint规范的；

* 那么我们需要在组员执行 `git commit ` 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；

那么如何做到这一点呢？可以通过Husky工具：

* husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push

如何使用husky呢？

这里我们可以使用自动配置命令：

```shell
npx husky-init && npm install
```

这里会做三件事：

1.安装husky相关的依赖：

![image-20210723112648927](https://tva1.sinaimg.cn/large/008i3skNgy1gsqq0o5jxmj30bb04qwen.jpg)

2.在项目目录下创建 `.husky` 文件夹：

```
npx huksy install
```



![image-20210723112719634](https://tva1.sinaimg.cn/large/008i3skNgy1gsqq16zo75j307703mt8m.jpg)

3.在package.json中添加一个脚本：

![image-20210723112817691](https://tva1.sinaimg.cn/large/008i3skNgy1gsqq26phpxj30dj06fgm3.jpg)

接下来，我们需要去完成一个操作：在进行commit时，执行lint脚本：

![image-20210723112932943](https://tva1.sinaimg.cn/large/008i3skNgy1gsqq3hn229j30nf04z74q.jpg)

这个时候我们执行git commit的时候会自动对代码进行lint校验。

## 四. git commit规范

### 4.1 Commitizen

通常我们的git commit会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。

![](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw17gaqjj30to0cj3zp.jpg)

但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen

* Commitizen 是一个帮助我们编写规范 commit message 的工具；

1.安装Commitizen

```shell
npm install commitizen -D
```

2.安装cz-conventional-changelog，并且初始化cz-conventional-changelog：

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这个命令会帮助我们安装cz-conventional-changelog：

![image-20210723145249096](https://tva1.sinaimg.cn/large/008i3skNgy1gsqvz2odi4j30ek00zmx2.jpg)

并且在package.json中进行配置：

![](https://tva1.sinaimg.cn/large/008i3skNgy1gsqvzftay5j30iu04k74d.jpg)

这个时候我们提交代码需要使用 `npx cz`：

* 第一步是选择type，本次更新的类型

| Type     | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增特性 (feature)                                           |
| fix      | 修复 Bug(bug fix)                                            |
| docs     | 修改文档 (documentation)                                     |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc) |
| refactor | 代码重构(refactor)                                           |
| perf     | 改善性能(A code change that improves performance)            |
| test     | 测试(when adding missing tests)                              |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等） |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                     |
| revert   | 代码回退                                                     |

* 第二步选择本次修改的范围（作用域）

![image-20210723150147510](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8ca15oj30r600wmx4.jpg)

* 第三步选择提交的信息

![image-20210723150204780](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8mq3zlj60ni01hmx402.jpg)

* 第四步提交详细的描述信息

![image-20210723150223287](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8y05bjj30kt01fjrb.jpg)

* 第五步是否是一次重大的更改

![image-20210723150322122](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw9z5vbij30bm00q744.jpg)

* 第六步是否影响某个open issue

![image-20210723150407822](https://tva1.sinaimg.cn/large/008i3skNgy1gsqwar8xp1j30fq00ya9x.jpg)

我们也可以在scripts中构建一个命令来执行 cz：

![image-20210723150526211](https://tva1.sinaimg.cn/large/008i3skNgy1gsqwc4gtkxj30e207174t.jpg)



#### 4.2 代码提交验证

如果我们按照cz来规范了提交风格，但是依然有同事通过 `git commit` 按照不规范的格式提交应该怎么办呢？

* 我们可以通过commitlint来限制提交；

1.安装 @commitlint/config-conventional 和 @commitlint/cli

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2.在根目录创建commitlint.config.js文件，配置commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3.使用husky生成commit-msg文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

### 五. 样式初始化




```css
// reset.css
body {
  margin: 0;
  padding: 0
}
html,body,#app {
  width: 100%;
  height: 100%
}


// index.css
 @import './reset.css'
```

```js
// main.ts
import 'normalize.css'
import './assets/style/index.css'
```

## 六. 第三方库集成

### 6.1 vue集成typescript

```js
// props使用ts
type Todo = {
  id: number;
  name:string;
  completed: boolean;
}

type TitleInfo = {
  value: string;
  color: string;
}
import {defineProps} from 'vue'
import type {PropType} from 'vue'
import type {Todo, TitleInfo} from '../types'

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})

//ref-api
const title = ref("")
const items = ref([] as Todo)

// reactive-api

const account = reactive({
  username:"", // 基本数据类型使用类型推断
  password: "",
  items: [] as Todo[] // 引用数据类型使用类型断言
})


```

### 6.2 vue配置环境变量

创建环境变量配置文件以 .env开头，以.当前环境结尾,
使用processon.env.VUE_APP_BASE_NAME读取

```js
//.env.development
VUE_APP_BASE_NAME = jams

//.env.production
VUE_APP_BASE_NAME = jams
```

### 6.3 vue配置webpack解决跨域问题

创建vue.config.js文件

```js

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: { '^/api': '' }
      }
    }
  }
}

```


### 6.4 vuex集成typescript

为根store的状态定义类型，需要在createStore中传入范型

```js
// store/index.ts
import { createStore, Store } from 'vuex'

export type State = {
  counter: string
  todo?: TodoState
  login?: LoginState
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: { todo, login }
})

```

composition api支持store类型

```js
// store/index.ts
+ import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export type State = {
  counter: string

}
+ export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: { todo, login }
})

```

在组件内使用时，在useStore中传入key

```js
const store = useStore(key)

```

模块化ts支持

在Module中传入范型类型,分别为当前模块的state接口和根接口

```js
//store/module/login.ts
export interface LoginState {
  token: string
  userInfo: any
  userMenus: any
}

export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: []
  },
  mutations: {
  }
} as Module<LoginState, State>

```

注册在根状态上的类型上

```js
//store/index.ts

export type State = {
  todo?: TodoState
  login?: LoginState
}

```


### 6.5 element-plus按需引入

```js
npm install unplugin-vue-components
```

在vue.config.js中配置文件

```js
// vue.config.js

/* eslint-disable @typescript-eslint/no-var-requires */
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}


```

## 七. 登录及动态路由逻辑

1. 用户输入用户名密码点击登录，发送用户名，密码给服务器，服务器校验后返回token及用户id
2. 将token存储在vuex及本地缓存中
3. 调用获取用户身份信息的接口获取用户名、角色等信息
4. 将userInfo存储在vuex及本地缓存中
5. 调用获取用户导航信息的接口，获取菜单信息
6. 将用户导航信息存储在vuex及本地缓存中
7. 根据配置的全部路由表以及返回的userMenu,生成动态的asyncRoute，然后通过addRoute添加路由信息
8. 在main.ts中触发loadLoginDispath方法，解决vuex及动态路由刷新失效
9. 在beforeEach路由钩子中验证是否存在token，如果存在放行，不存在跳转登录页
10. 在响应拦截中，当服务器返回401，清空token本地缓存信息



