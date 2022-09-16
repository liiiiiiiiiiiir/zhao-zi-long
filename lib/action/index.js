module.exports = {
  create: {
    command: "create [name]",
    description: "创建新项目",
    action: require("./create/createAction")
  },
  touch: {
    command: "touch <file>",
    description: "添加文件",
    action: require("./touch/touchAction")
  },
  greet: {
    command: "greet",
    description: "打个招呼",
    action: require("./greet/greetAction")
  },
  hello: {
    command: "hello",
    description: "打个招呼",
    action: require("./greet/greetAction")
  }
};
