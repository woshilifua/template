import { appendElement, setActive, triggleButton } from "./common.js";

const IDS = {
  NAVBAR: {
    ID: "navbar-nav",
  },
  COURSE: {
    MODULE: {
      ID: "course-module",
      ID_PHONE: "course-module-phone",
      ID_BUTTON: "course-module-button",
    },
    TIME: {
      ID: "course-time",
      ID_PHONE: "course-time-phone",
      ID_BUTTON: "course-time-button",
    },
    TYPE: {
      ID: "course-type",
      ID_PHONE: "course-type-phone",
    },
  },
};

// 渲染导航栏
appendElement(IDS.NAVBAR.ID, () => {
  const current = location.pathname;
  const ele = `#${IDS.NAVBAR.ID} a`;
  $(ele).each(function () {
    var $this = $(this);
    if ($this.attr("href").indexOf(current) !== -1) {
      $this.addClass("active");
    }
  });
});

// 渲染课程模块
appendElement(IDS.COURSE.MODULE.ID, () => {
  setActive(IDS.COURSE.MODULE.ID, "li");
});

// 渲染课程模块 移动端
appendElement(IDS.COURSE.MODULE.ID_PHONE, () => {
  const BUTTON_ID = `${IDS.COURSE.MODULE.ID_BUTTON}`;
  const ID = `${IDS.COURSE.MODULE.ID_PHONE} a`;
  triggleButton(BUTTON_ID, ID);
});

// 渲染课程时间
appendElement(IDS.COURSE.TIME.ID, () => {
  setActive(IDS.COURSE.TIME.ID, "li");
});

// 渲染课程时间 移动端
appendElement(IDS.COURSE.TIME.ID_PHONE, () => {
  const BUTTON_ID = `${IDS.COURSE.TIME.ID_BUTTON}`;
  const ID = `${IDS.COURSE.TIME.ID_PHONE} a`;
  triggleButton(BUTTON_ID, ID);
});

// 渲染课程类型
appendElement(IDS.COURSE.TYPE.ID, () => {
  setActive(IDS.COURSE.TYPE.ID, "li");
});
