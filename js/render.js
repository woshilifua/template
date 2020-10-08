import { appendElement, setActive } from './common.js'

const IDS = {
  NAVBAR: {
    ID: 'navbar-nav'
  },
  COURSE: {
    MODULE: {
      ID: 'course-module',
      ID_PHONE: 'course-module-phone'
    },
    TIME: {
      ID: 'course-time',
      ID_PHONE: 'course-time-phone'
    },
    TYPE: {
      ID: 'course-type',
      ID_PHONE: 'course-type-phone'
    }
  }
}

// 渲染导航栏
appendElement(IDS.NAVBAR.ID, () => {
  const current = location.pathname;
  const ele = `#${IDS.NAVBAR.ID} a`
  $(ele).each(function () {
    var $this = $(this);
    if ($this.attr('href').indexOf(current) !== -1) {
      $this.addClass('active')
    }
  })
})

// 设置 active nav-bar 元素


// 渲染课程模块
appendElement(IDS.COURSE.MODULE.ID, () => {
  setActive(IDS.COURSE.MODULE.ID)
})

appendElement(IDS.COURSE.MODULE.ID_PHONE, () => {}
)

// 渲染课程时间
appendElement(IDS.COURSE.TIME.ID, () => {
  setActive(IDS.COURSE.TIME.ID)
})

appendElement(IDS.COURSE.TIME.ID_PHONE, () => {}
)

// 渲染课程类型
appendElement(IDS.COURSE.TYPE.ID, () => {
  setActive(IDS.COURSE.TYPE.ID)
})

// $(document).ready(function () {
//   $('#navbar-nav a').click(function () {
//     $(this).siblings('li').removeClass('active');
//     $(this).addClass('active');
//   });
// });