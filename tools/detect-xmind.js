const Excel = require("exceljs");
const workbook = new Excel.Workbook();
const fs = require("fs");
const xml2json = require("./xml2json");
const template_map_config = require("./template-map-config");

async function detectXmind(xmindFile) {
 xml2json(xmindFile).then((result) => {
  debugger;
  console.log(result);
  console.log(result["xmap-content"].sheet);
});
  const xmlJson = await xml2json(xmindFile);
  console.log(xmlJson["xmap-content"].sheet);
  const pods = xmlJson["xmap-content"].sheet[0].topic;
  debugger;
  let maxCount = 0;
  jsonParser(pods)
  return deepSearchKeyValue;
}

function jsonParser(json,grade) {
  for (let key in json) {
    if (key === "topic") {
      debugger;
      grade += 1;
      if (maxCount < count) {
        debugger
        maxCount = count;
      }
    }
    const element = json[key];
    if (
      (element.length !== 0 && typeof element === "object") ||
      typeof element === "object"
    ) {
      jsonParser(element);
      count++;
    } else {
      console.log("----eles -->  " + key + ":" + element + " ");
    }
  }
  debugger;
}

const xmind_file = "/Users/szdt00136/Documents/测试点/测试/content.xml";
detectXmind(xmind_file).then((result) => {
  debugger;
  console.log(maxCount);
  debugger;
});
