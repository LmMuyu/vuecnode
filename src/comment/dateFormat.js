import moment from "moment";
moment.locale("zh-cn");

export const dateFormat = (date) => {
  function timeFormat(isdate) {
    let timeAdd = new Date(isdate).toJSON();
    return new Date(+new Date(timeAdd) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, " ")
      .replace(/\.[\d]{3}Z/, "")
      .match(/.+(?=\s)/)[0]
      .split(/-/)
      .map(Number);
  }

  let time = timeFormat(date);
  time[1] = time[1] - 1;

  return moment(moment().toArray()).to(time);
};
