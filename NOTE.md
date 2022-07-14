# cli开发过程

## 注意事项

1. cli.js 首行需要 **`#!/usr/bin/env node`** 表示使用node执行

## 笔记

1. process.argv：返回一个数组，带有启动node进程时传入的命令行参数
2. command字符串：`<>` 表示必选参数, `[]` 表示可选参数
