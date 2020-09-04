var parseString = require("xml2js").parseString;
const xml2js = require("xml2js");
var fs = require("fs");
const path = require("path");
/**
 * xml转成json文件
 * @param {*} file_url string xml的绝对路径
 * @return json
 */
async function xml2json(file_url) {
  if (typeof file_url === "string" && path.extname(file_url) === ".xml") {
    var parser = new xml2js.Parser();
    const data = fs.readFileSync(file_url);
    return await new Promise((resolve, reject) => {
      parser.parseString(data, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  } else { 
    const error_msg = {
      code: 00041,
      msg: "xml文件类型有误",
    };
    console.log(error_msg);
    return error_msg;
  }
}
module.exports=xml2json