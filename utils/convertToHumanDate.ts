/**
 *
 * @param date "yyyy-mm-dd" only
 */
export function convertToHumanDate(date: Date) {
  const [year, month, day] = date.toString().split("-");
  const validDateFormat = [month, day, year].join("-");
  return new Date(validDateFormat).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    weekday: "short",
  });
}
