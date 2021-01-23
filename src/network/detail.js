import {request} from "./request";

export function getDetail(id) {
  return request({
    url: 'detail',
    params: {
      iid: id
    }
  })
}

//商品基本信息
export class GoodsInfo {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

//店铺信息
export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score =  shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
