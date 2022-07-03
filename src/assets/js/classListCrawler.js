/**
 * Get list of all classes that will be used in the element and children.
 * List won't contain dupes.
 * Recursive function which loops through all children and get their classes.
 * @param element
 */
export function getClassList(element) {
  let list = [];
  let data = crawl(element, list);
  // Return a set to remove all the dupes
  return [...new Set(data)]
}

function crawl(element, list) {
  if (element.hasChildNodes()) {
    for (let i = 0; i < element.children.length; i++) {
      crawl(element.children[i], list);
    }
  }
  list.push(element.classList.value);
  return list;
}