const { prompt } = require("inquirer");
const chalk = require("chalk");
const { join } = require("path");
const { cwd } = require("process");
const question = require("./question");
const { download, setPkgName } = require("./download");
const { checkDicIsExisted, removePath } = require("./../../utils/utils");

module.exports = async () => {
  console.clear();
  console.log(chalk.redBright("创建 vite + vue3 + ts 项目"));
  let name = process.argv.slice(2)[1];
  if (!name) {
    // 人机交互
    name = (await prompt(question)).name;
    if (!name) {
      return;
    }
  }

  const dir = join(cwd(), name);

  // 检测目录是否已存在
  if (await checkDicIsExisted(dir)) {
    console.clear();
    console.log(chalk.red("当前目录存在同名文件夹"));
    return;
  }

  const repo = "https://github.com/liiiiiiiiiiiir/basic-vite-vue-ts-template.git";
  const downloadResult = await download(repo, name, dir);
  if (["local_success", "git_success"].includes(downloadResult)) {
    if (downloadResult === "git_success") {
      // 删除 .git
      removePath(`${dir}/.git`);
    }
    setPkgName(`${dir}/package.json`, name);
  }
};
