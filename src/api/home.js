import axios from "./index";
//获取轮播图
export function getSliders() {
    //每个接口返回都是promise
    return axios.get("/sliders");
}
