//延迟
export const delay = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

//获取url参数
export const getUrlQuery = url => {
  //   let url = window.location.search;
  //   let url = search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach(item => {
      let tempArr = item.substring(1).split("=");
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

//处理domain
export const handleDomain = domain => {
  let str = "www.";
  if (domain.indexOf(str) === 0) {
    domain = domain.substring(str.length);
  }
  return domain;
};

//openFrame
export const onOpenFrame = callback => {
  window.addEventListener("message", function(event) {
    let data = event.data;
    if (data.eventName === "open") {
      callback();
    }
  });
};

//doCloseFrame
export const doCloseFrame = callback => {
  window.addEventListener("message", function(event) {
    let data = event.data;
    if (data.eventName === "do-close") {
      callback();
    }
  });
};

//将数字用“,”分隔
export const formatNumber = value => {
  let num = new Number(value);
  var c =
    num.toString().indexOf(".") !== -1
      ? num.toLocaleString()
      : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
};

//浏览时间
export const formatGlanceTime = value => {
  let seconds = value;
  if (seconds == 0) {
    return "0分钟";
  }

  let minutes = seconds / 60;

  if (minutes < 60) {
    if (minutes < 1) {
      return "小于一分钟";
    }

    minutes = Math.floor(minutes);
    return `约${formatNumber(minutes)}分钟`;
  }

  let hours = minutes / 60;
  if (hours < 24) {
    hours = Math.floor(hours);
    return `约${formatNumber(hours)}小时`;
  }

  let day = hours / 24;
  day = Math.floor(day);
  return `约${formatNumber(day)}天`;
};

//获取url信息List
export const getInfoList = info => {
  const getRank = value => {
    if (value > 100) {
      return 100;
    } else {
      return value;
    }
  };

  const keyToUnit = (key, value) => {
    let unit = "";
    if (key === "rank-baidu") {
      if (value >= 100) {
        unit = "以外";
      } else {
        unit = "位";
      }
    } else if (key === "rank-360") {
      if (value >= 100) {
        unit = "以外";
      } else {
        unit = "位";
      }
    } else if (key === "rank-sougou") {
      if (value >= 100) {
        unit = "以外";
      } else {
        unit = "位";
      }
    } else if (key === "index-num-baidu") {
      unit = "个";
    } else if (key === "index-num-360") {
      unit = "个";
    } else if (key === "index-num-sougou") {
      unit = "个";
    } else if (key === "display") {
      unit = "次";
    }

    return value + unit;
  };

  let chartData = info;
  let chartDataList = [];
  if (chartData.baiduRank) {
    chartDataList.push({
      key: "百度排名",
      value: keyToUnit("rank-baidu", getRank(chartData.baiduRank))
    });
  }
  if (chartData["360Rank"]) {
    chartDataList.push({
      key: "360排名",
      value: keyToUnit("rank-360", getRank(chartData["360Rank"]))
    });
  }
  if (chartData.sougouRank) {
    chartDataList.push({
      key: "搜狗排名",
      value: keyToUnit("rank-sougou", getRank(chartData.sougouRank))
    });
  }
  if (chartData.baiduIndexNum) {
    chartDataList.push({
      key: "百度索引量",
      value: keyToUnit("index-num-baidu", chartData.baiduIndexNum)
    });
  }
  if (chartData["360IndexNum"]) {
    chartDataList.push({
      key: "360索引量",
      value: keyToUnit("index-num-360", chartData["360IndexNum"])
    });
  }
  if (chartData.sougouIndexNum) {
    chartDataList.push({
      key: "搜狗索引量",
      value: keyToUnit("index-num-sougou", chartData.sougouIndexNum)
    });
  }
  if (chartData.display) {
    chartDataList.push({
      key: "展现量",
      value: keyToUnit("display", chartData.display)
    });
  }
  return chartDataList;
};

//提取数字
export const getNumber = str => {
  //   var reg = /[1-9][0-9]*/g;
  //   var numList = str.match(reg);

  //   let numStr = "";
  //   for (let i = 0; i < numList.length; i++) {
  //     numStr += numList[i];
  //   }

  console.log(str);

  var num = str.toString().replace(/[^\d]/g, "");

  return Number(num);
};
