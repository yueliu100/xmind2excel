const xml2json = require("./xml2json");
const template_map_config = require("./template-map-config");

let titles = [];
let grades = [];
/**
 *
 * @param {*} json 解析title的json 对象
 * @param {*} type 解析类型，1-xmind8解析来的json，0-xmindzen解压的json
 */
async function getTitles(json, type) {
  if (type === 1) {
    const pods = json["xmap-content"].sheet[0].topic;
    pods.forEach((item) => {
      recursion(item.children, 0);
    });
  } else if (type === 0) {
    const pods = json[0].rootTopic;
    recursionXmindZen(pods, 0);
  }
  return {
    titles,
    grades,
  };
}
/**
 * content.json的递归函数
 * @param {*} json 递归对象
 * @param {*} grade 层级
 */
function recursionXmindZen(json, grade) {
  json.children.attached.forEach((child) => {
    if (!child.children) {
      titles.push({ grade, title: child.title });
      grades.push(grade);
    } else {
      titles.push({ grade, title: child.title });
      grades.push(grade);
      recursionXmindZen(child.children, grade + 1);
    }
  });
}
/**
 * 递归函数获取xml转来的json
 * @param {*} list 递归的数组
 * @param {*} grade 层级
 */
function recursion(list, grade) {
  debugger;
  list.forEach((child) => {
    if (Array.isArray(child.topics) && child.topics.length !== 0) {
      child.topics.forEach((child_topic) => {
        if (
          Array.isArray(child_topic.topic) &&
          child_topic.topic.length !== 0
        ) {
          child_topic.topic.forEach((topic_item_title) => {
            if (topic_item_title.title && !topic_item_title.children) {
              titles.push({ grade, title: topic_item_title.title[0] });
              grades.push(grade);
            } else {
              titles.push({ grade, title: topic_item_title.title[0] });
              recursion(topic_item_title.children, grade + 1);
            }
          });
        }
      });
    }
  });
}

async function detectXmind(json, type) {
  const getTitleResult = await getTitles(json, type);
  if (!getTitleResult.code) {
    const grades = getTitleResult.grades;
    const maxGrade = Math.max(...grades);
    let config_grades = [];
    template_map_config.forEach((element) => {
      if (element.grade) {
        config_grades.push(element.grade);
      }
    });
    const maxConfigGrade = Math.max(...config_grades);
    if (maxConfigGrade !== maxGrade) {
      const error_msg = {
        code: 000501,
        msg: "最大值配置与实际文件层级不符",
      };
      return error_msg;
    }
    return getTitleResult.titles;
  }
}
module.exports = detectXmind;