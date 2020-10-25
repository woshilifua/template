import TMPS from "../data/template.js";

export function setActive(id, tag) {
  const ele = `#${id} ${tag}`;
  const first = $(ele)[0];
  $(first).addClass("active");
  $(ele).click(function () {
    $(this).siblings(`${tag}`).removeClass("active");
    $(this).addClass("active");
  });
}

export function triggleButton(buttonId, id) {
  const ele = `#${id}`;
  const button = $(`#${buttonId}`);
  $(ele).click(function () {
    button.html($(this).text());
  });
}

export function appendElement(id, cb) {
  const {
    tmp,
    dropdownTmp,
    dromdownItemStartTmp,
    dropdownItemTmp,
    list,
  } = TMPS[id];
  let el = $(`#${id}`);
  let result = [];
  list.forEach((item) => {
    const currentTmp = item.children ? dropdownTmp : tmp;
    const tmpStr = replaceHolder(currentTmp);
    Object.keys(item).forEach((key) => {
      tmpStr.replace(`$${key}`, item[key]);
    });
    if (item.children) {
      const subTmp = addDropItems(
        dromdownItemStartTmp,
        "</div>",
        dropdownItemTmp,
        item
      );
      tmpStr.append(subTmp);
      tmpStr.addStartAndEnd('<span class="nav-item dropdown">', "</span>");
    }
    result.push($(tmpStr.getStr()));
  });
  el.append(result);
  if (cb instanceof Function) {
    cb();
  }
}

const addDropItems = function (start, end, temp, item) {
  start = start.replace("$id", item.id);
  let result = start;
  item.children.forEach((item) => {
    const tmpStr = replaceHolder(temp);
    Object.keys(item).forEach((key) => {
      tmpStr.replace(`$${key}`, item[key]);
    });
    result += tmpStr.getStr();
  });
  result += end;
  return result;
};

const replaceHolder = function (strTmp) {
  var str = strTmp;
  function replace(key, val) {
    str = str.replace(key, val);
  }
  function getStr() {
    return str;
  }
  function append(subStr) {
    str += subStr;
  }
  function addStartAndEnd(start, end) {
    str = start + str + end;
  }
  return {
    replace: replace,
    getStr: getStr,
    append: append,
    addStartAndEnd: addStartAndEnd,
  };
};
