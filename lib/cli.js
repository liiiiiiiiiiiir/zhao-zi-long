#!/usr/bin/env node

const { program } = require("commander");
const commands = require("./action");
const { version } = require("../package.json");

program.name("ziLong")
  .description("A Cli To Generator Vue3 Template")
  .version(version);

for (const key in commands) {
  const item = commands[key];

  program.command(item.command).description(item.description).action(item.action);
}

// 获取命令行参数
program.parse(process.argv);
