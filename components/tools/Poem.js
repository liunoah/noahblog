function generatePoem() {
    const subjects = ['你', '我', '他', '她', '它'];
    const adjectives = ['美丽的', '温柔的', '勇敢的', '聪明的', '善良的'];
    const verbs1 = [
      "教练", "导师", "领袖", "首席执行官", "创始人",
      "斗士", "勇士", "战斗机", "勇敢者", "守卫者",
      "探险家", "冒险家", "旅行家", "驾驶员", "探索者",
      "天才", "智者", "大师", "专家", "奇才",
      "英雄", "拯救者", "救星", "传奇", "救世主",
      "超人", "异能者", "超级英雄", "神奇女侠", "绿巨人",
      "艺术家", "创作者", "设计师", "美学家", "音乐家",
      "实干家", "行动派", "执行者", "决策者", "领袖者",
      "专家", "顾问", "导师", "行家", "权威",
      "灵魂人物", "灵魂导师", "启示者", "引路人", "激励者"
    ];
    const verbs = ['闪耀着', '散发着', '充满着', '散发着', '洋溢着'];
    const objects = ['爱', '力量', '希望', '勇气', '阳光'];
  
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const ver1 = verbs1[Math.floor(Math.random() * verbs1.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
  
    return `${subject}，${adjective}${ver1},${verb}${object}`;
  }
export default generatePoem