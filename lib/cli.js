#!/usr/bin/env node

const { program } = require("commander");
const commands = require("./action");
const { readFileSync } = require("fs");

const pkgInfo = JSON.parse(readFileSync("package.json", "utf-8"));

program.version(pkgInfo.version).parse(process.argv);

for (const key in commands) {
  const item = commands[key];

  program.command(item.command).description(item.description).action(item.action);
}

// 获取命令行参数
program.parse(process.argv);
