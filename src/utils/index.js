import { message } from 'antd'
export function debounce (fn, delay = 1000, flag, cb = function () { }) {
  let t = null
  return function () {
    cb()
    return new Promise((resolve, reject) => {
      let _this = this
      const args = Array.prototype.slice.call(arguments, 0, 2)
      args.push(resolve)
      args.push(reject)
      clearTimeout(t)
      if (flag) {
        let exec = !t
        t = setTimeout(() => {
          t = null
        }, delay)
        if (exec) {
          fn.apply(_this, args)
        }
      } else {
        t = setTimeout(() => {

          fn.apply(_this, args)

        }, delay)
      }
    })
  }
}


export function saveDataToStorage (data, key) {
  window.localStorage.setItem(key, JSON.stringify(data))
}

export function getDataFromStorage (key) {
  let res = window.localStorage.getItem(key)
  if (res) {
    res = JSON.parse(res)
  }
  return res
}

export function clearStorageByKey (key) {
  window.localStorage.removeItem(key)
}

export function formatDate (time) {
  if (typeof time === 'string' || !(new Date(time) instanceof Date)) {
    time = new Date(time).getTime()
  }
  const ms_minute = 1000 * 60
  const ms_hour = ms_minute * 60
  const ms_day = ms_hour * 24
  const ms_week = ms_day * 7
  const ms_halfmonth = ms_day * 15
  const ms_month = ms_day * 30
  const ms_year = ms_month * 12
  const now = new Date().getTime()
  const ms_now = now - time
  if (ms_now < 0) {
    return
  }
  const year = ms_now / ms_year
  const month = ms_now / ms_month
  const halfmonth = ms_now / ms_halfmonth
  const week = ms_now / ms_week
  const day = ms_now / ms_day
  const hour = ms_now / ms_hour
  const minute = ms_now / ms_minute
  let res = ''
  if (year > 1) {
    res = `${parseInt(year)}年前`
  } else if (month > 1) {
    res = `${parseInt(month)}个月前`
  } else if (halfmonth > 1) {
    res = `半个月前`
  } else if (week > 1) {
    res = `${parseInt(week)}周前`
  } else if (day > 1) {
    res = `${parseInt(day)}天前`
  } else if (hour > 1) {
    res = `${parseInt(hour)}小时前`
  } else if (minute > 1) {
    res = `${parseInt(minute)}分钟前`
  } else {
    res = '刚刚'
  }
  return res
}
export function formatTime (dateStr) {
  const date = new Date(dateStr)
  let res = ''
  res += date.getFullYear() + '-'
  res += (date.getMonth() + 1) + '-'
  res += date.getDate()
  return res
}
export function markKey (str = '', key) {
  if (!key) {
    return str
  }
  const reg = new RegExp(`${key}`, 'ig')
  const res = str.replace(reg, (value) => {
    return `<span class="red">${value}</span>`
  })
  return res
}

export function remindLogin () {
  message.error({
    style: {
      fontSize: '12px'
    },
    duration: 1,
    content: '请先登陆'
  })
}

export function formatUrlData (str) {
  const [, newStr] = str.split('?')
  if (!newStr) {
    return ''
  }
  const arr = newStr.split('=')
  const obj = {}
  for (let i = 0; i < arr.length; i += 2) {
    if (!arr[i + 1]) {
      break
    }
    obj[arr[i]] = arr[i + 1]
  }
  return obj
}