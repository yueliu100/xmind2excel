// import fs from "fs";
// import compressing from "compressing"
// import path from "path"
const fs = require("fs");
const path = require("path");
const compressing = require("compressing");

async function getFile(src) {
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
    return compressing.zip.uncompress(rs, path.dirname(src)+"/"+path.basename(src,".xmind")).then((resolve)=>{
        const success_msg={
            code:2000,
            msg:"解压成功"
        };
        return success_msg
    }).catch((e)=>{
      console.log(e)
        const error_msg={
            code:10000,
            msg:"解压失败"
        }
        return error_msg
    });
  }
}
getFile("/Users/szdt00136/Documents/测试点/URS测试点.xmind").then(result=>{
  console.log(result)
})