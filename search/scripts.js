/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/","#new":"","#new-0":""}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"InR8RiUhcGX6QRDF","label":"Media","bookmarks":[{"id":"6iPoIg8xQvzKhZ7v","label":"Youtube","url":"https://www.youtube.com"},{"id":"POGIAUq8YXnH8chM","label":"Gmail","url":"https://mail.google.com/mail/u/0/"},{"id":"iXNDLQ4J8k1E4Ynk","label":"Twitter","url":"https://twitter.com/home"},{"id":"FZfk7hb13xRDiJUq","label":"Weareallimaginary","url":"https://weareallimaginary.github.io/"}]},{"id":"lXoMckp2WgzkQrG0","label":"Creative","bookmarks":[{"id":"qhICBwkoTnJHMm5P","label":"Waifu2x","url":"https://waifu2x.udp.jp/"},{"id":"EMD5AJ9Xk7AQRqgA","label":"Saucenao","url":"https://saucenao.com/"},{"id":"AGkF07LyxqYaXpGm","label":"Google Images","url":"https://images.google.com/"},{"id":"fGHqD2BeFWaCFqD7","label":"w3picker","url":"https://www.w3schools.com/colors/colors_picker.asp"}]},{"id":"Igk4PZSJ5TCgNfo4","label":"Steam","bookmarks":[{"id":"eigQqcnMn3kacGac","label":"Steam Community","url":"https://steamcommunity.com/"},{"id":"0IPjuwncX1iFp1Vq","label":"SteamDB","url":"https://steamdb.info/"},{"id":"wbsPgKRO9B5yFswl","label":"Backpack.tf","url":"https://backpack.tf/"},{"id":"cMRZYQR1kLYeqE8T","label":"Scrap.tf","url":"https://scrap.tf/"}]},{"id":"S7f8ORwgud7WfOwY","label":"HUD development","bookmarks":[{"id":"vvPrCjNEiEzsXfnl","label":"Github","url":"https://github.com/"},{"id":"nhRkxuUVLeUpQ72E","label":"Mastercoms","url":"https://comfig.app/huds"},{"id":"p88nz2AY3BeqIHCJ","label":"Hypnotize","url":"https://github.com/Hypnootize/TF2-HUDs-Archive/blob/master/Updated%20HUDs%20List.md"},{"id":"AUtqgLgrqKXkalHv","label":"JarateKing","url":"https://github.com/JarateKing/TF2-Hud-Reference"}]},{"id":"gkov7XdepYS4m0Td","label":"東方Project","bookmarks":[{"id":"5477SYmpz9ZmT4mF","label":"ZUNブログ","url":"https://touhou-project.news/blog/"},{"id":"9l2VkEYnZoujA2kL","label":"守矢神社","url":"https://moriyashrine.org/files/"},{"id":"Dk0nrCIJfSHCKAn6","label":"東方wiki","url":"https://en.touhouwiki.net/wiki/Touhou_Wiki"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
