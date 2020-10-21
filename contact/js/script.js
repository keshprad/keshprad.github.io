function goTo(ele_query, xBool, yBool) {
  ele = $(ele_query);
  ele_pos = ele.position();

  if (xBool && yBool) {
    window.scrollTo({
      top: ele_pos.top,
      left: ele_pos.left,
      behavior: "smooth",
    });
  } else if (xBool) {
    window.scrollTo({
      top: 0,
      left: ele_pos.left,
      behavior: "smooth",
    });
  } else if (yBool) {
    window.scrollTo({
      top: ele_pos.top,
      left: 0,
      behavior: "smooth",
    });
  }
}
