import { appendElement } from "./common.js";

const IDS = {
  NAVBAR: {
    ID: "navbar-nav",
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
