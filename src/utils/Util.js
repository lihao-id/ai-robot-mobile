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