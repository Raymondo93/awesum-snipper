export function parseToJson(css) {
  let cssJson = []
  const cssBlocks = css.split("}\n");
  cssBlocks.forEach((block) => {
    // For some reason there was an empty string as element.
    if (block !== "") {
      let checkedBlock = checkBlock(block);
      cssJson.push(checkedBlock);
    }
  });
  return cssJson;
}

/**
 * TODO -> check if line is comment | mediaquery | multiple selectors
 * @param block
 */
function checkBlock(block) {
  let css = block.split("{");
  let result = {
    "selectors": css[0].replace(/(\r\n|\n|\r)/gm, ""),
  }
  // remove new lines and set properties in array
  let properties = {};
  let dirtyProperties = css[1].replace(/(\r\n|\n|\r)/gm, "").split(";");

  dirtyProperties.forEach((dirtyProperty) => {
    if (dirtyProperty !== "") {
      let propertyValue = dirtyProperty.split(":");
      if (!propertyValue[0].replace(/\s|\t/g, "").startsWith("/*")) {
        if (!propertyValue[0].replace(/\s|\t/g, "").startsWith("*/")) {
          properties[propertyValue[0].replace(/\s|\t/g, "")] = propertyValue[1];
        } else {
          properties[propertyValue[0].replace(/\s|\t/g, "").substring(2)] = propertyValue[1];

        }
      }
    }
  });
  result['properties'] = properties;
  return result;

}
