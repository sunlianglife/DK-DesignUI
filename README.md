# 配置说明文档

### 第一步

```bash
yarn
```

### 第二步
```bash
yarn start  运行
```

```bash
yarn build  打包
```

### 第三步

```bash
yarn publish  上传
```

### 本地调试

```bash
yarn link  创建链接
```

```bash
yarn unlink  关闭链接
```

### 使用方法

#### 基础组件

```bash
import {} from 'mega-design-library'
```
#### 高级组件

```bash
import {} from 'mega-design-library/lib/pro'
```

#### 通用样式

```bash
@import '~mega-design-library/lib/style.css'
```

or

```bash
import 'mega-design-library/lib/style.css'
```

#### 通用方法

```bash
import {} from 'mega-design-library/lib/tool'
```

### commit 规范
```bash
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
```