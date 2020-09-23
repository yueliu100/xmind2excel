const internal_config_value = {
  priority: "priority",
  id: "id",
};
//grade 从0开始配置
const config = [
  { key: "A", value: internal_config_value.id },
  { key: "B", value: "", grade: 0 },
  { key: "C", value: "", grade: 1 },
  { key: "D", value: "", grade: 2 },
  { key: "E", value: internal_config_value.priority },
  { key: "G", value: "", grade: 3 },
  { key: "I", value: "", grade: 4 },
];
module.exports = config;
