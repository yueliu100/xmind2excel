const xml2js = require("xml2js");
var fs = require("fs");
const path = require("path");
/**
 * xml转成json文件
 * @param {*} file_url string xml的绝对路径
 * @return json
 */
async function xml2json(file_url) {
  console.log('获取到的请求参数:'+file_url,typeof(file_url))
  debugger
  if (typeof file_url === "string" && path.extname(file_url) === ".xml") {
    debugger
    var parser = new xml2js.Parser();
    const data = fs.readFileSync(file_url);
    debugger
    return await new Promise((resolve, reject) => {
      parser.parseString(data, function (err, result) {
        if (err) reject(err);
        debugger
        resolve(result);
      });
    });
  } else { 
    const error_msg = {
      code: 00041,
      msg: "xml文件类型有误",
    };
    console.log(error_msg);
    debugger
    return error_msg;
  }
}
module.exports=xml2json