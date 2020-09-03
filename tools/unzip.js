const fs = require("fs");
const path = require("path");
const compressing = require("compressing");

async function unzipFile(src) {
  if (!path.dirname(src)) {
    const error_msg = {
      code: 00040,
      msg: "输入文件路径找不到",
    };
    return error_msg;
  } else if (path.extname(src) !== ".xmind") {
    const error_msg = {
      code: 00041,
      msg: "输入文件类型有误",
    };
    return error_msg;
  } else {
    const rs = fs.createReadStream(src);
    debugger;
    return compressing.zip
      .uncompress(rs, path.dirname(src) + "/" + path.basename(src, ".xmind"))
      .then((resolve) => {
        const success_msg = {
          code: 200,
          msg: "解压成功",
        };
        return success_msg;
      })
      .catch((e) => {
        console.log(e);
        const error_msg = {
          code: 10000,
          msg: "解压失败",
        };
        return error_msg;
      });
  }
}
module.exports=unzipFile
