const { pathExists, remove } = require("fs-extra");

// 检查是否已有文件夹
exports.checkDicIsExisted = async function(dicPath) {
  return pathExists(dicPath);
};

// 删除路径
exports.removePath = async function(path) {
  try {
    await remove(path);
    return "remove_success";
  } catch (err) {
    console.log(err);
    return "remove_fail";
  }
};
