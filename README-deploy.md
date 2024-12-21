1. 环境要求
采用了npm高于20版本运行 | node -v v22.2.0;
```shell
nvm use 22.2.0  # 低了 他也不支持
```

3. 启用 Corepack 并安装 pnpm
   如果你还没有启用 Corepack 或者安装 pnpm，请先执行以下命令：
```shell
corepack enable
corepack prepare pnpm@9.15.0 --activate  # 这将确保你使用的是与项目兼容的 pnpm 版本。
```

2. 安装依赖
   在项目的根目录下运行以下命令来安装所有依赖项：
```shell
pnpm install
```

3. 启动开发服务器
   安装完依赖后，你可以通过下面的命令启动开发服务器：
```shell
pnpm run docs:dev # 这条命令等同于 vuepress-vite dev src，它会从 src 目录开始构建并启动一个热重载的开发服务器。
# 如果你想清除缓存再启动开发服务器，可以使用：
pnpm run docs:clean-dev
```

4. 构建生产环境版本
   当你准备构建用于生产的静态文件时，可以使用如下命令：
```shell
pnpm run docs:build # 这将生成可以在生产环境中部署的静态文件。
```

5. 更新包（可选）
   如果需要更新 vuepress-theme-hope 主题或相关插件到最新版本，可以使用以下命令：
```shell
pnpm run docs:update-package # 请注意，这个命令依赖于 vp-update 工具，它可能不是默认安装的工具，具体取决于你的项目配置和需求。
```