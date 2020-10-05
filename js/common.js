
import TMPS from '../data/template.js'

export function setActive(id) {
  const ele = `#${id} li`
  const first = $(ele)[0]
  $(first).addClass('active')
  $(ele).click(function () {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
  });
}

export function appendElement(id, cb) {
  const { tmp, list } = TMPS[id]
  let el = $(`#${id}`)
  let result = []
  list.forEach(item => {
    const tmpStr = replaceHolder(tmp)
    Object.keys(item).forEach(key => {
      tmpStr.replace(`$${key}`, item[key])
    })
    result.push($(tmpStr.getStr()))
  })
  el.append(result)
  if (cb instanceof Function) {
    cb()
  }
}

const replaceHolder = function (strTmp) {
  var str = strTmp
  function replace(key, val) {
    str = str.replace(key, val)
  }
  function getStr() {
    return str
  }
  return {
    replace: replace,
    getStr: getStr
  }
}