const Excel = require("exceljs");
const workbook = new Excel.Workbook();
const fs = require("fs");
const xml2json = require("./xml2json");
const template_map_config = require("./template-map-config");

let titles = [];
let grades = [];
async function getTitles(xmindFile) {
  xml2json(xmindFile).then((result) => {
    if (!result.code) {
      const pods = result["xmap-content"].sheet[0].topic;
      pods.forEach((item) => {
        recursion(item.children, 0);
      });
    }
  });
}

function recursion(list, grade) {
  list.forEach((child) => {
    if (Array.isArray(child.topics) && child.topics.length !== 0) {
      debugger;
      child.topics.forEach((child_topic) => {
        if (
          Array.isArray(child_topic.topic) &&
          child_topic.topic.length !== 0
        ) {
          child_topic.topic.forEach((topic_item_title) => {
            if (topic_item_title.title && !topic_item_title.children) {
              debugger;
              titles[grade] = topic_item_title.title;
              grades.push(grade);
              debugger;
            } else {
              debugger;
              titles[grade] = topic_item_title.title;
              debugger;
              grade += 1;
              // console.log(grade);
              debugger;
              recursion(topic_item_title.children, grade);
            }
          });
        }
      });
    }
  });
}
const xmind_file = "/Users/szdt00136/Documents/测试点/测试/content.xml";
detectXmind(xmind_file).then((result) => {
  console.log(titles)
  console.log(grades)
});
