// const path = require('path');
// const fs = require('fs');

export function getSnippet(e) {
  let el = document.querySelector(e);
  printSnippetHTML(document.querySelector('#' + e));
  return el;
  // getCssFile();
}

function printSnippetHTML(snippet) {
  let showingElement = document.querySelector('#showed-component');
  // let snippetElement = document.querySelector('.snippet-code');

  console.log(snippet);
  // showingElement.insertAdjacentHTML('afterbegin', snippet.getInnerHTML());
  // snippetElement.insertAdjacentHTML('afterbegin', snippet.getInnerHTML());
}


function getCssFile() {
  fs.readdir('/home/ray/Workspace/projects/code-snippet-printer', function(err, files) {
    if (err) {
      return console.log('Error searching file: ' + err);
    }
  
    files.forEach(function(file) {
      console.log(file);
    })

  })
}
