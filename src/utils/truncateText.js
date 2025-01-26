export default function truncateText(text, length) {
  return text.length < length ? text : text.slice(0, length) + "..."
}
