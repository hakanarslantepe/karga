export default function formattedDate(date) {
  const originalDate = new Date(date);
  return originalDate
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");
}
