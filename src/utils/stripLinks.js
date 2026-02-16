export function stripLinks(html) {
  return html.replace(/<\/?a[^>]*>/g, '')
}
