const Excel = require("exceljs");
const workbook = new Excel.Workbook();
const fs = require("fs");
const template_map_config = require("./template-map-config");

async function detectTemplate(filename) {
  const data = fs.createReadStream(filename);
  debugger;
  const readData = await workbook.xlsx.read(data);
  debugger;
  const template_conetent = readData.model.sheets;
  let template_rows = template_conetent[0].rows;
  let template_addresses = [];
  let detect_msg = {};
  //如果模板匹配规则为空，则返回配置错误
  if (template_map_config.length === 0) {
    debugger;
    console.log("模板格式有误");
    detect_msg = {
      code: 000401,
      msg: "匹配规则配置有误",
    };
  } else {
    debugger;
    //如果 模板内容为空则返回格式错误
    if (template_rows.length !== 0) {
      template_rows.forEach((element) => {
        element.cells.forEach((cell) => {
          template_addresses.push(cell.address);
        });
      });
      template_map_config.forEach((element) => {
        if (template_addresses.indexOf(element.key) === -1) {
          console.log("配置规则key包含模板不存在的单元格");
          detect_msg = {
            code: 000402,
            msg: "配置规则key包含模板不存在的单元格",
          };
        } else {
          result_msg = {
            code: 200,
            msg: "配置规则与模板配置检测成功",
          };
        }
      });
    } else {
      console.log("模板格式有误");
      result_msg = {
        code: 000400,
        msg: "模板格式有误",
      };
    }
  }
  return detect_msg
}

const excel_file = "/Users/szdt00136/Documents/项目文件/知蓝平台/模板.xlsx";
detectTemplate(excel_file).then((result) => {
  debugger;
  console.log(result);
  debugger;
});
