import http from "http/http";
var Mock = require("mockjs");

const BASE_URL = "http://www.stypt.cn";

export const test = () => {
  Mock.mock("http://www.baidu.com", "get", {
    "list|10": [
      {
        "id|+1": 1,
        name: "@cname"
      }
    ]
  });

  return http({
    method: "get",
    url: "http://www.baidu.com"
  });
};

//获取url信息
export const getUrlInfo = ({ domain }) => {
  Mock.mock(RegExp(BASE_URL + "/count/all/info.*"), "get", options => {
    return Mock.mock({
      Result: {
        "360Rank|1-1000": 1,
        "baiduRank|1-1000": 1,
        "sougouRank|1-1000": 1,
        "clickTimes|1-9999": 1,
        "totalGlanceTime|1-99999": 1
      }
    });
  });

  return http({
    method: "get",
    url: BASE_URL + "/count/all/info",
    params: {
      url: domain
    }
  });
};
