"use strict";

/* global test */
var assert = require("proclaim");
var expect = assert.strictEqual;

var lib = "../../lib/";

var Comment = require(lib + "Comment").Comment;


test("create a Comment Node", function () {
  var comment = new Comment("Hello");

  expect(comment.data, "Hello");
  expect(comment.innerHTML, "");
  expect(comment.outerHTML, "<!--Hello-->");
});
//# sourceMappingURL=CommentNode.js.map