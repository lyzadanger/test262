// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setUTCDate property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
es5id: 15.9.5.37_A3_T1
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

var x = Date.prototype.setUTCDate.length;
verifyNotWritable(Date.prototype.setUTCDate, "length", null, 1);
if (Date.prototype.setUTCDate.length !== x) {
  $ERROR('#1: The Date.prototype.setUTCDate.length has the attribute ReadOnly');
}
