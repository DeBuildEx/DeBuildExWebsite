export const renderStatus = (i, callback) => {
  switch (i) {
    case 1:
      return callback({
        name: "انجام شده",
        class: "green",
        icon: "check_circle",
      });
    case 2:
      return callback({
        name: "در حال اجرا",
        class: "yellow",
        icon: "av_timer",
      });
    case 3:
      return callback({
        name: "منتشر شده",
        class: "blue",
        icon: "playlist_add_check",
      });
    case 4:
      return callback({
        name: "آرشیو شده",
        class: "gray",
        icon: "archive",
      });
  }
};
