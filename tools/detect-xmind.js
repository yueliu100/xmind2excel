const Excel = require("exceljs");
const workbook = new Excel.Workbook();
const fs = require("fs");
const xml2json = require("./xml2json");
const template_map_config = require("./template-map-config");

async function detectXmind(xmindFile) {
    const xmlJson = await xml2json(xmindFile);
    console.log(xmlJson["xmap-content"].sheet)
    const pods=xmlJson["xmap-content"].sheet[0].topic
    
    return xmlJson["xmap-content"].sheet[0]
}
const xmind_file="/Users/sunzongzheng/liuyue-code/Test_exchange/content.xml"
detectXmind(xmind_file).then(result=>{
    debugger
    console.log(result)
    debugger
})
