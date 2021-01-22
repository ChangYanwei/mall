// 对首页数据的请求
import {request} from "./request";

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}
