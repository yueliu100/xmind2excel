const arr = [
  {
    children: [
      {
        topics: [
          {
            $: {
              type: "attached",
            },
            topic: [
              {
                $: {
                  type: "attached",
                },
                title: ["注册"],
                children: [
                  {
                    topics: [
                      {
                        $: {
                          type: "attached",
                        },
                        topic: [
                          {
                            $: {
                              type: "attached",
                            },
                            title: ["验证码+密码"],
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    children: [
      {
        topics: [
          {
            $: {
              type: "attached",
            },
            topic: [
              {
                $: {
                  type: "attached",
                },
                title: ["注册"],
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const titles = [];

function walk(list, grade) {
  list.forEach((item) => {
    debugger;
    item.children.forEach((child) => {
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
                debugger;
              } else {
                debugger;
                titles[grade] = topic_item_title.title;
                debugger;
                grade += 1;
                console.log(grade);
                debugger;
                walk(topic_item_title.children, grade);
              }
            });
          }
        });
      }
    });
  });
}

walk(arr, 0);

console.log(titles);
console.log(titles.length);
