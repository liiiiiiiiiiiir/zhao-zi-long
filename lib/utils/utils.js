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

// 获取后缀名
exports.getExtension = function(name) {
  return name.substring(name.lastIndexOf(".") + 1);
};

const startAddZero = (str) => str.toString().padStart(2, "0");
// 获取时间
exports.getCurrentTime = function(time = +new Date(), type = 0) {
  const currentTime = new Date(time);
  const year = currentTime.getFullYear();
  const month = startAddZero(currentTime.getMonth() + 1);
  const date = startAddZero(currentTime.getDate());
  const hour = startAddZero(currentTime.getHours());
  const minute = startAddZero(currentTime.getMinutes());
  const second = startAddZero(currentTime.getSeconds());

  switch(parseInt(type)) {
  case 0:
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  default:
    return "";
  }
};
