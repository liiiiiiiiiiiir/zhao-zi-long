const { writeFile, mkdirSync } = require("fs");
const { resolve } = require("path");
const { getExtension, getCurrentTime, checkDicIsExisted } = require("./../../utils/utils");
const { JSTem, HTMLTem, VUETemplate } = require("./template");

const extensionArray = ["js", "ts", "html", "vue"];

const genFileContent = (extension, options) => {
  if(extension === "js" || extension === "ts") {
    const time = getCurrentTime();
    return JSTem.replace(/#{date}#/, time);
  } else if(extension === "html") {
    return HTMLTem.replace(/#{title}#/, options.fileName);
  } else if(extension === "vue") {
    return VUETemplate;
  } else {
    return "";
  }
};
const generateFile = (fileName, tem) => {
  writeFile(resolve(__dirname, fileName), tem, {}, function (err) {
    if (err) {
      throw err;
    }
    console.log("创建成功");
  });
};

module.exports = async () => {
  let file = process.argv.slice(2)[1];
  const extension = getExtension(file).toLowerCase();
  console.log(extensionArray.includes(extension));
  if (extensionArray.includes(extension)) {
    const fileArray = file.split("/");
    const fileName = fileArray.at(-1);
    const dirPath = fileArray.slice(0, fileArray.length - 1).join("/");
    const currentDirPath = resolve(__dirname, dirPath);
    if(await checkDicIsExisted(currentDirPath)) {
      const template = genFileContent(extension, { fileName: fileName.split(".")[0] });
      generateFile(file, template);
    } else {
      mkdirSync(currentDirPath, {});
      const template = genFileContent(extension, { fileName: fileName.split(".")[0] });
      generateFile(file, template);
    }
  } else {
    mkdirSync(resolve(__dirname, file), {});
  }

};
