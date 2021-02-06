Survey.StylesManager.applyTheme("winterstone");

var json = {
  title: "好久不见",
  showProgressBar: "bottom",
  //showTimerPanel: "top",
  //maxTimeToFinishPage: 10,
  //maxTimeToFinish: 25,
  firstPageIsStarted: true,
  startSurveyText: "开始答题",
  goNextPageAutomatic: true,
  showNavigationButtons: true,
  pages: [
    {
      questions: [
        {
          type: "html",
          html:
            "世上有太多的问题，可能永远也得不到答案。勇敢地追寻下去，本身已有足够的意义。",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "civilwar",
          title: "有个人一觉醒来黄袍加身，请问他是谁？",
          choices: ["大树", "地瓜", "稻子", "驴"],
          correctAnswer: "稻子",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "libertyordeath",
          title: "时光流转，总有新的名字，下列哪个选项未曾成为过群名",
          choicesOrder: "random",
          choices: [
            "别忘却身心的和睦",
            "幽暗的最高频道",
            "不切实际的春水",
            "在安全的雨中相见",
          ],
          correctAnswer: "不切实际的春水",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "magnacarta",
          title: "才华横溢的群友，各自有各自的爱好，下列哪个人的爱好是发红包",
          choicesOrder: "random",
          choices: ["GUGU", "George", "GIGI", "Grandmom"],
          correctAnswer: "GUGU",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "ichiban",
          title: "在下列词语中，哪一个词和猫最有关系",
          choicesOrder: "random",
          choices: ["ichiban", "ashahi", "kawaii", "wasabi"],
          correctAnswer: "ichiban",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "industry",
          title:
            "工业革命的一大标志是机器可以制造机器，下列那种机器曾广泛地在群聊中使用",
          choicesOrder: "random",
          choices: ["复读机", "洗衣机", "大电视机", "冰箱"],
          correctAnswer: "复读机",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "taotao",
          title:
            "来自重庆的唐先生是腰的听众，那么下列歌手中，哪一位可能是他所不喜欢的？",
          choicesOrder: "random",
          choices: ["毛不易", "陈升", "李志", "张悬"],
          correctAnswer: "毛不易",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "firstlove",
          title: "公众号的栏目中，最先开始运营的是哪一个",
          choicesOrder: "random",
          choices: ["爱听腰的你是谁", "听腰之前", "图记情书"],
          correctAnswer: "爱听腰的你是谁",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "thankstoliwenliang",
          title: "在去年的冬天，我们曾勇敢地说NO，下列哪首歌不是腰的创作",
          choicesOrder: "random",
          choices: ["不是情书", "不只是南方", "不完全果皮箱", "不会说话的爱情"],
          correctAnswer: "不会说话的爱情",
        },
      ],
    },
  ],
  completedHtml:
    "<h4>亲爱的朋友，8道题你对了<b>{correctedAnswers}道</b><hr>打开支付宝包口令红包<hr>输入“关于勇敢和真诚的回忆咱们都不要抹去”<hr>领取一份小欢喜，祝他也快乐。</h4>",
};

window.survey = new Survey.Model(json);

//survey.onComplete.add(function (result) {
//  document.querySelector("#surveyResult").textContent =
//   "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//});

var app = new Vue({
  el: "#surveyElement",
  data: {
    survey: survey,
  },
});
