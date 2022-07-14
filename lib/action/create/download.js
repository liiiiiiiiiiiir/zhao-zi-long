const fs = require("fs");
const { copy, readJSON, writeJSON } = require("fs-extra");
const { clone } = require("isomorphic-git");
const http = require("isomorphic-git/http/node");
const ora = require("ora");

exports.download = async function (repo, name, dir) {
  const process = ora({ spinner: "dots" });
  process.info("准备中...");
  process.start("模板下载中...");
  try {
    await clone({ fs, http, dir, url: repo });
    process.succeed("git 下载成功");
    return "git_success";
  } catch (err) {
    const copyResult = await useLocalTem(dir);
    if (copyResult === "local_success") {
      process.succeed("local 下载成功");
      return copyResult;
    }
    process.fail("下载失败");
    console.log(err);
    return copyResult;
  }
};

// 修改package.json的name
exports.setPkgName = async function (path, name) {
  const json = await readJSON(path);
  json.name = name;
  writeJSON(path, json, { spaces: 2 });
};

// 使用本地模板
const useLocalTem = async (dir) => {
  try {
    await copy("lib/template", dir);
    return "local_success";
  } catch(err) {
    console.log(err);
    return "copy_fail";
  }
};
