function friendlyDate(datsStr){
  let dateObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''
  switch(true){
    case millieSecond < 60000 :
      time = '刚刚'
      break;
    case millieSecond < 3600*1000 :
      time = Math.floor(millieSecond/60000) + '分钟前'
      break;
    case millieSecond < 3600*1000*24 :
      time = Math.floor(millieSecond/(3600*1000)) + '小时前'
      break;
    case millieSecond < 3600*1000*24*30 :
      time = Math.floor(millieSecond/(3600*1000*24)) + '天前'
      break;
    case millieSecond < 3600*1000*24*30*12 :
      time = Math.floor(millieSecond/(3600*1000*24*30)) + '个月前'
      break;
  }
  return time
}

export default {
  install(Vue , options){
    Vue.prototype.friendlyDate = friendlyDate;
  }
}
