const config = require("./template-map-config");
const unzip = require("./unzip");
const path = require("path");
const fs = require("fs");
const xml2json=require('./xml2json')

async function exchangeData(xmindFile, toUrl) {
  const unzip_result = await unzip(xmindFile);
  if (unzip_result.code === 200) {
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
        require2json = 1;
        break;
      }
    }
    if(require2json===1){
        const xmlJsonData=await xml2json(unzip_dir+"/content.xml")
        //xml转成json
        if(xmlJsonData.code==undefined){
            //构造写入Excel的rows
            //TODO
        }

    }
  }
}
