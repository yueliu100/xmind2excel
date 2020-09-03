var parseString = require("xml2js").parseString;
const xml2js = require("xml2js");
var fs = require("fs");
const path = require("path");
const { resolve } = require("path");
const { rejects } = require("assert");
/**
 * xml转成json文件
 * @param {*} file_url string xml的绝对路径
 * @return
 */
async function xml2json(file_url) {
  if (typeof file_url === "string" && path.extname(file_url) === ".xml") {
    var parser = new xml2js.Parser();
    const data = fs.readFileSync(file_url);
    return await new Promise((resolve, rejects) => {
      parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log("Done");
        debugger;
        if (err) rejects(err);
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
const xml_url = "/Users/szdt00136/Documents/测试点/测试/content.xml";
xml2json(xml_url).then((result) => {
  debugger;
  console.log(result);
  console.log(result["xmap-content"].sheet);
});
