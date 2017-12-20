var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page/list-index', {
    title: 'Express' ,
      category_list:[
          {name:'推荐',code:1},
          {name:'资讯',code:2},
          {name:'转店',code:3},
          {name:'选址',code:4},
          {name:'经营',code:5},
          {name:'管理',code:6},
          {name:'名店',code:7},
          {name:'微漫画',code:8}
      ],
      carouse_list:[
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"深圳南山店海底捞"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"稍息担担面"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"河南一步来思考对方"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"加上对方考虑卡死了快点返利卡水电费离开家阿萨德六块腹肌拉水电费"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"个我日将阿斯蒂芬"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"个苟且而温柔个去哦个文瑞去玩儿黑科技阿萨德航空发克里斯多夫嘉实多看风景哈乐山大佛"},
      ],
      info_list:[
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"深圳南山店海底捞"},
          {img_url:'',id:1,url:"http://lalalla",title:"个苟且而温柔个去哦个文瑞去玩儿黑科技阿萨德航空发克里斯多夫嘉实多看风景哈乐山大佛"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"深圳南山店海底捞"},
          {img_url:'',id:1,url:"http://lalalla",title:"河南一步来思考对方"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"个苟且而温柔个去哦个文瑞去玩儿黑科技阿萨德航空发克里斯多夫嘉实多看风景哈乐山大佛"},
          {img_url:'imgs/baibeiying_29.png',id:1,url:"http://lalalla",title:"个苟且而温柔个去哦个文瑞去玩儿黑科技阿萨德航空发克里斯多夫嘉实多看风景哈乐山大佛"},

      ]
  });
});

module.exports = router;
