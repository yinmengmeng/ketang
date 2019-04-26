let express = require("express");
let axios = require("axios");
let app = express();
let lessons = require("./mock/lessons");
app.listen(3000, () => {
    console.log("server listen port 3000");
});
app.use(function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == "options") {
        res.send(200); //让options尝试请求快速结束
    } else {
        next();
    }
});
//后端也可以用axios
//我想访问视频的网站，先访问我的服务，我的服务访问视频的服务，把数据返回给我的前端
app.get("/sliders", function(request, response) {
    axios
        .get(
            "http://www.html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1556083106792"
        )
        .then(function(res) {
            response.json(
                res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list
            );
        });
});
//获取课程接口
//offsset 从第几条开始取
//limit 每次取多少条
app.get("/lessons/:offset/:limit/:type", (req, res, next) => {
    let { offset, limit, type } = req.params;
    let lists = JSON.parse(JSON.stringify(lessons));
    if (type !== "all") {
        lists = lists.filter((item, index) => {
            return item.type === type;
        });
    }
    offset = parseInt(offset);
    limit = parseInt(limit);
    let newAry = lists.slice(offset, offset + limit);
    let hasMore = offset + limit >= lists.length ? false : true;
    res.json({ hasMore, list: newAry });
});
