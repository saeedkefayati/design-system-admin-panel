export const richTextToolbar = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ size: [] }],
  ["bold", "italic", "underline", "strike"],
  [
    "blockquote",
    "code-block",
    //"formula"
  ],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ script: "sub" }, { script: "super" }],
  [{ direction: "rtl" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"],
  ["clear"],
  // [{ font: [] }],
];

export const richTextFormat = [
  "image",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

export const indentPlus =
  '<svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';

export const indentMinus =
  '<svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line> <polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"></polyline> </svg>';
