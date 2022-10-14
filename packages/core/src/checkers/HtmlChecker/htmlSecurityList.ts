export const htmlSecurityList: { [key: string]: string[] } = {
  a: ['class', 'href', 'id', 'style', 'target', 'children'],
  b: ['class', 'id', 'style', 'children'],
  br: ['class', 'id', 'style', 'children'],
  div: ['align', 'class', 'dir', 'id', 'style', 'children'],
  font: ['class', 'color', 'face', 'id', 'size', 'style', 'children'],
  h1: ['align', 'class', 'dir', 'id', 'style', 'children'],
  h2: ['align', 'class', 'dir', 'id', 'style', 'children'],
  h3: ['align', 'class', 'dir', 'id', 'style', 'children'],
  h4: ['align', 'class', 'dir', 'id', 'style', 'children'],
  h5: ['align', 'class', 'dir', 'id', 'style', 'children'],
  h6: ['align', 'class', 'dir', 'id', 'style', 'children'],
  hr: ['align', 'size', 'width'],
  img: [
    'align',
    'border',
    'class',
    'height',
    'hspace',
    'id',
    'src',
    'style',
    'usemap',
    'vspace',
    'width',
    'alt',
    'path',
  ],
  label: ['class', 'id', 'style', 'children'],
  li: ['class', 'dir', 'id', 'style', 'type', 'children'],
  ol: ['class', 'dir', 'id', 'style', 'type', 'children'],
  p: ['class', 'dir', 'id', 'style', 'type', 'children'],
  span: ['class', 'id', 'style', 'children'],
  table: [
    'align',
    'bgcolor',
    'border',
    'cellpadding',
    'cellPadding',
    'cellspacing',
    'cellSpacing',
    'class',
    'dir',
    'frame',
    'id',
    'rules',
    'style',
    'width',
    'children',
  ],
  td: [
    'abbr',
    'align',
    'bgcolor',
    'class',
    'colspan',
    'dir',
    'height',
    'id',
    'lang',
    'rowspan',
    'scope',
    'style',
    'valign',
    'width',
    'children',
  ],
  th: [
    'abbr',
    'align',
    'background',
    'bgcolor',
    'class',
    'colspan',
    'dir',
    'height',
    'id',
    'lang',
    'scope',
    'style',
    'valign',
    'width',
    'children',
  ],
  tr: ['align', 'bgcolor', 'class', 'dir', 'id', 'style', 'valign', 'children'],
  u: ['class', 'id', 'style', 'children'],
  ul: ['class', 'dir', 'id', 'style', 'children'],
};
