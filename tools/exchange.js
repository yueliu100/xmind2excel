const config = require("./template-map-config");
const unzip = require("./unzip");
const path = require("path");
const fs = require("fs");
const xml2json = require("./xml2json");
const detectXmind = require("./detect-xmind");

async function exchangeData(xmindFile, excelUrl) {
  debugger;
  const unzip_result = await unzip(xmindFile);
  if (unzip_result.code === 200) {
    debugger;
    const unzip_dir =
      path.dirname(xmindFile) + "/" + path.basename(xmindFile, ".xmind");
    //遍历解压后的文件夹里是否存在content.json
    //如果不存在那么将xml解析为json
    //如果存在直接处理json

    //遍历解压后的文件夹
    const unzip_file_list = fs.readdirSync(unzip_dir);
    let require2json = 0;
    for (element in unzip_file_list) {
      if (element.indexOf("content.json") === -1) {
        debugger;
        require2json = 1;
        break;
      }
    }
    if(require2json===1){
      debugger
        const xmlJsonData=await xml2json(unzip_dir+"/content.xml")
        //xml转成json
        if(xmlJsonData.code==undefined){
            //TODO 构造写入Excel的rows
            const titles = await detectXmind(xmlJsonData,1);
            if (!titles.code) {
              // titles.forEach(element=>{
                
              // })
              debugger
              return titles
            }
        }
    } else {
      //TODO 直接处理解压的json
    }
  }
}

const xmind_file = "/Users/szdt00136/Documents/测试点/测试.xmind";
exchangeData(xmind_file).then(result=>{
  console.log(result)
});