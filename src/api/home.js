import axios from "./index";
//获取轮播图
export function getSliders() {
    //每个接口返回都是promise
    return axios.get("/sliders");
}
//获取所有课程
export function getLessons(offset, limit, type) {
    return axios.get(`/lessons/${offset}/${limit}/${type}`);
}
