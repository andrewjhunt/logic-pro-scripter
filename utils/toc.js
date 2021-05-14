/*
 * Usage: node toc.js markdown-file.js
 * Convert each header in a markdown file to a table of contents entry
 */

`use strict`;

const fs = require('fs');
const assert = require('assert');

if (false) test_makeTOC();

if (process.argv.length !== 3) {
  console.error("Usage: node toc.js markdown-file.js");
  return;
}

const MD = fs.readFileSync(process.argv[2], 'utf-8').split('\n');

MD.forEach((line,i) => {
  const toc = makeTOC(line);
  if (toc) console.log(toc);
});


function makeTOC(line) {
  const header = line.match(/^\#\#*/);

  if (!header) return null;
  if (header[0].length === 1) return null;

  let id = line;

  // remove leading ###
  id = id.substring(header[0].length);

  // remove surrounding whitespace
  id = id.trim();
  const text = id;

  id = id.toLowerCase();

  // remove non-alpha chars
  id = id.replace(/[^a-z 0-9]/g, '');

  // replace whitespace with hyphen
  id = id.replace(/\s+/g, '-');

  const indent = ' '.repeat(2 * (header[0].length-2));

  return `${indent}* [${text}](#${id})`;
}

function test_makeTOC() {
  assert.equal( makeTOC(''), null);
  assert.equal( makeTOC('normal text'), null);
  assert.equal( makeTOC('# Header 1'), null);
  assert.equal( makeTOC('## Header 2'), '* [Header 2](#header-2)' );
  assert.equal( makeTOC('### Header 3'), ' * [Header 3](#header-3)' );
  assert.equal( makeTOC('#### Header 4'), '  * [Header 4](#header-4)' );
  assert.equal( makeTOC('## code()'), '* [code()](#code)' );
  assert.equal( makeTOC('## There\'s a bit  more here!!'), '* [There\'s a bit  more here!!](#theres-a-bit-more-here)' );
}
