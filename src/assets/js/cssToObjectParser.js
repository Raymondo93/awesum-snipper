export function parseToObject(css) {
  let cssJson = []
  const cssBlocks = css.split("}");
  cssBlocks.forEach((block) => {
    // For some reason there was an empty string as element.
    if (block !== "") {
      let checkedBlock = checkBlock(block);
      cssJson.push(checkedBlock);
    }
  });
  return cssJson;
}

export function parseToCss(cssObjects) {
  let cssString = [];
  cssObjects.forEach((object) => {
    let selector = object.selectors + '{ \n';
    let properties = '';
    for (let property in object.properties) {
      if (object.properties.hasOwnProperty(property)) {
          properties += '\t' + property + ': ' + object.properties[property] + '; \n';
      }
    }

    cssString.push(selector + properties + '}\n');
  });
  return cssString;
}

/**
 * TODO -> check if line is mediaquery
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
