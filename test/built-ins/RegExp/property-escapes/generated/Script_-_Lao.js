// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Lao`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000E84,
    0x000E8A,
    0x000E8D,
    0x000EA5,
    0x000EA7,
    0x000EC6
  ],
  ranges: [
    [0x000E81, 0x000E82],
    [0x000E87, 0x000E88],
    [0x000E94, 0x000E97],
    [0x000E99, 0x000E9F],
    [0x000EA1, 0x000EA3],
    [0x000EAA, 0x000EAB],
    [0x000EAD, 0x000EB9],
    [0x000EBB, 0x000EBD],
    [0x000EC0, 0x000EC4],
    [0x000EC8, 0x000ECD],
    [0x000ED0, 0x000ED9],
    [0x000EDC, 0x000EDF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Lao}+$/u,
  matchSymbols,
  "\\p{Script=Lao}"
);
testPropertyEscapes(
  /^\p{Script=Laoo}+$/u,
  matchSymbols,
  "\\p{Script=Laoo}"
);
testPropertyEscapes(
  /^\p{sc=Lao}+$/u,
  matchSymbols,
  "\\p{sc=Lao}"
);
testPropertyEscapes(
  /^\p{sc=Laoo}+$/u,
  matchSymbols,
  "\\p{sc=Laoo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000E83,
    0x000E89,
    0x000E98,
    0x000EA0,
    0x000EA4,
    0x000EA6,
    0x000EAC,
    0x000EBA,
    0x000EC5,
    0x000EC7
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000E80],
    [0x000E85, 0x000E86],
    [0x000E8B, 0x000E8C],
    [0x000E8E, 0x000E93],
    [0x000EA8, 0x000EA9],
    [0x000EBE, 0x000EBF],
    [0x000ECE, 0x000ECF],
    [0x000EDA, 0x000EDB],
    [0x000EE0, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Lao}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lao}"
);
testPropertyEscapes(
  /^\P{Script=Laoo}+$/u,
  nonMatchSymbols,
  "\\P{Script=Laoo}"
);
testPropertyEscapes(
  /^\P{sc=Lao}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lao}"
);
testPropertyEscapes(
  /^\P{sc=Laoo}+$/u,
  nonMatchSymbols,
  "\\P{sc=Laoo}"
);
