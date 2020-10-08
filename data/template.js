const courseModuleList = [
  { name: '全部', href: '#' },
  { name: '募资模块', href: '#' },
  { name: '投资模块', href: '#' },
  { name: '投后模块', href: '#' },
  { name: '风控模块', href: '#' },
  { name: '退出模块', href: '#' },
  { name: '管理模块', href: '#' },
  { name: '法律模块', href: '#' },
  { name: '税收模块', href: '#' },
  { name: '行业模块', href: '#' },
  { name: '园区招商', href: '#' },
]

const courseTimeList =  [
  {name: '全部', href:'#'},
  {name: '本月', href:'#'},
  {name: '上月', href:'#'},
  {name: '今年', href:'#'},
  {name: '去年', href:'#'},
]
export default {
  'navbar-nav': {
    tmp: '<a class="nav-item nav-link header-item col text-center" href="$href"><span class="pb-3">$name</span></a>',
    list: [
      { name: '首页', href: './index.html'},
      { name: '超级互动课堂', href: '#'},
      { name: '学院课程', href: './course.html'},
      { name: '在线大讲堂', href: './online.html'},
      { name: '报告云解读', href: './report.html'},
      { name: '会员权益', href: './vip.html'},
    ]
  },
  'course-module': {
    tmp: "<li class='nav-item'><a class='nav-link'><span class='pb-2'>$name</span></a></li>",
    list: courseModuleList
  },
  'course-module-phone': {
    tmp: "<a class='dropdown-item' href='#'>$name</a>",
    list: courseModuleList
  },
  'course-time': {
    tmp: "<li class='nav-item'><a class='nav-link'><span class='pb-2'>$name</span></a></li>",
    list: courseTimeList
  },
  'course-time-phone': {
    tmp: "<a class='dropdown-item' href='#'>$name</a>",
    list: courseTimeList
  },
  'course-type': {
    tmp: "<li class='nav-item'><a class='nav-link'><span class='pb-2'>$name</span></a></li>",
    list: [
      { name: '全部', href:'#'},
      { name: '线上', href:'#'},
      { name: '线下', href:'#'},
    ]
  }
}