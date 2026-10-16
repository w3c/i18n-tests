tests = []
tests[0]=["text-align/text-align-start-001.html","text-align: start, direction: rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when direction is horizontal, rtl."] 

tests[1]=["text-align/text-align-start-002.html","text-align: start, direction: ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when direction is horizontal, ltr."] 

tests[2]=["text-align/text-align-start-003.html","text-align: start, dir=rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when direction is horizontal, rtl."] 

tests[3]=["text-align/text-align-start-004.html","text-align: start, dir=ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when direction is horizontal, ltr."] 

tests[4]=["text-align/text-align-start-005.html","text-align: start, direction: rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when direction is horizontal, rtl."] 

tests[5]=["text-align/text-align-start-006.html","text-align: start, direction: ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when direction is horizontal, ltr."] 

tests[6]=["text-align/text-align-start-007.html","text-align: start, dir=rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when direction is horizontal, rtl."] 

tests[7]=["text-align/text-align-start-008.html","text-align: start, dir=ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when direction is horizontal, ltr."] 

tests[8]=["text-align/text-align-start-009.html","text-align: start, dir=auto, RTL first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when direction is auto and first strong character is rtl."] 

tests[9]=["text-align/text-align-start-010.html","text-align: start, dir=auto, LTR first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when direction is auto and first strong character is ltr."] 

tests[10]=["text-align/text-align-start-014.html","text-align: start, pre, dir=rtl inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when base direction is rtl."] 

tests[11]=["text-align/text-align-start-015.html","text-align: start, pre, dir=ltr inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when base  direction is  ltr."] 

tests[12]=["text-align/text-align-start-016.html","text-align: start, pre, dir=auto","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when direction is auto and first strong character is ltr, and right when first strong is rtl."] 

tests[13]=["text-align/text-align-start-017.html","text-align: start, pre, dir=auto on surrounding block","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. since dir=auto is not inherited by pre, to left in ltr context."] 

tests[14]=["text-align/text-align-start-018.html","text-align: start, textarea, dir=rtl inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. right when base direction is rtl."] 

tests[15]=["text-align/text-align-start-019.html","text-align: start, textarea, dir=ltr inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. left when base direction is ltr."] 

tests[16]=["text-align/text-align-start-020.html","text-align: start, textarea dir=auto on control","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. when dir=auto on textarea, left when first strong is ltr, right when rtl."] 

tests[17]=["text-align/text-align-start-021.html","text-align: start, textarea, dir=auto on surrounding block","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:start aligns inline-level content to the start edge of the line box – ie. since dir=auto is not inherited by textarea, to left in ltr context."] 

tests[18]=["text-align/text-align-end-001.html","text-align: end, direction: rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when direction is horizontal, rtl."] 

tests[19]=["text-align/text-align-end-002.html","text-align: end, direction: ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when direction is horizontal, ltr."] 

tests[20]=["text-align/text-align-end-003.html","text-align: end, dir=rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when direction is horizontal, rtl."] 

tests[21]=["text-align/text-align-end-004.html","text-align: end, dir=ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when direction is horizontal, ltr."] 

tests[22]=["text-align/text-align-end-005.html","text-align: end, direction: rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when direction is horizontal, rtl."] 

tests[23]=["text-align/text-align-end-006.html","text-align: end, direction: ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when direction is horizontal, ltr."] 

tests[24]=["text-align/text-align-end-007.html","text-align: end, dir=rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when direction is horizontal, rtl."] 

tests[25]=["text-align/text-align-end-008.html","text-align: end, dir=ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when direction is horizontal, ltr."] 

tests[26]=["text-align/text-align-end-009.html","text-align: end, dir=auto, RTL first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when direction is auto and first strong character is rtl."] 

tests[27]=["text-align/text-align-end-010.html","text-align: end, dir=auto, LTR first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when direction is auto and first strong character is ltr."] 

tests[28]=["text-align/text-align-end-014.html","text-align: end, pre, dir=rtl inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when base direction is rtl."] 

tests[29]=["text-align/text-align-end-015.html","text-align: end, pre, dir=ltr inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when base  direction is  ltr."] 

tests[30]=["text-align/text-align-end-016.html","text-align: end, pre, dir=auto","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when direction is auto and first strong character is ltr, and left when first strong is rtl."] 

tests[31]=["text-align/text-align-end-017.html","text-align: end, pre, dir=auto on surrounding block","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. since dir=auto is not inherited by pre, to right in ltr context."] 

tests[32]=["text-align/text-align-end-018.html","text-align: end, textarea, dir=rtl inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. left when base direction is rtl."] 

tests[33]=["text-align/text-align-end-019.html","text-align: end, textarea, dir=ltr inherited","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. right when base direction is ltr."] 

tests[34]=["text-align/text-align-end-020.html","text-align: end, textarea dir=auto on control","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. when dir=auto on textarea, right when first strong is ltr, left when rtl."] 

tests[35]=["text-align/text-align-end-021.html","text-align: end, textarea, dir=auto on surrounding block","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:end aligns inline-level content to the end edge of the line box – ie. since dir=auto is not inherited by textarea, to right in ltr context."] 

tests[36]=["text-align/text-align-justify-001.html","text-align: justify, direction: rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify aligns text in order to exactly fill the line box. Unless otherwise specified by text-align-last, the last line before a forced break or the end of the block is start-aligned – in this case, to the right."] 

tests[37]=["text-align/text-align-justify-002.html","text-align: justify, direction: ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify aligns text in order to exactly fill the line box. Unless otherwise specified by text-align-last, the last line before a forced break or the end of the block is start-aligned – in this case, to the left."] 

tests[38]=["text-align/text-align-justify-003.html","text-align: justify, dir=rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify aligns text in order to exactly fill the line box. Unless otherwise specified by text-align-last, the last line before a forced break or the end of the block is start-aligned – in this case, to the right."] 

tests[39]=["text-align/text-align-justify-004.html","text-align: justify, dir=ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify aligns text in order to exactly fill the line box. Unless otherwise specified by text-align-last, the last line before a forced break or the end of the block is start-aligned – in this case, to the left."] 

tests[40]=["text-align/text-align-justify-005.html","text-align: justify, dir=auto, RTL first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify aligns text in order to exactly fill the line box. Unless otherwise specified by text-align-last, the last line before a forced break or the end of the block is start-aligned – in this case, to the right."] 

tests[41]=["text-align/text-align-justify-006.html","text-align: justify, dir=auto, LTR first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify aligns text in order to exactly fill the line box. Unless otherwise specified by text-align-last, the last line before a forced break or the end of the block is start-aligned – in this case, to the left."] 

tests[42]=["text-align/text-align-justifyall-001.html","text-align: justify-all, direction: rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify-all aligns text in order to exactly fill the line box, forcing the last line to justify as well."] 

tests[43]=["text-align/text-align-justifyall-002.html","text-align: justify-all, direction: ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify-all aligns text in order to exactly fill the line box, forcing the last line to justify as well."] 

tests[44]=["text-align/text-align-justifyall-003.html","text-align: justify-all, dir=rtl","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify-all aligns text in order to exactly fill the line box, forcing the last line to justify as well."] 

tests[45]=["text-align/text-align-justifyall-004.html","text-align: justify-all, dir=ltr","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify-all aligns text in order to exactly fill the line box, forcing the last line to justify as well."] 

tests[46]=["text-align/text-align-justifyall-005.html","text-align: justify-all, dir=auto, RTL first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify-all aligns text in order to exactly fill the line box, forcing the last line to justify as well."] 

tests[47]=["text-align/text-align-justifyall-006.html","text-align: justify-all, dir=auto, LTR first strong","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-align:justify-all aligns text in order to exactly fill the line box, forcing the last line to justify as well."] 

tests[48]=["text-justify/text-justify-001.html","text-justify: none","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-justify:none means justification is disabled: there are no justification opportunities within the text."] 

tests[49]=["text-justify/text-justify-002.html","text-justify: inter-character","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-justify:inter-character means justification adjusts spacing between each pair of adjacent typographic character units."] 

tests[50]=["text-justify/text-justify-003.html","text-justify: distribute","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-justify:distribute means justification adjusts spacing between each pair of adjacent typographic character units."] 

tests[51]=["text-justify/text-justify-004.html","text-justify: inter-character, arabic","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-justify:inter-character means justification adjusts spacing between each pair of adjacent typographic character units. Justification must not introduce gaps between the joined typographic letter units of cursive scripts such as Arabic."] 

tests[52]=["text-justify/text-justify-005.html","text-justify: distribute, arabic","",'https://drafts.csswg.org/css-text-3/#text-align-property',"text-justify:distribute means justification adjusts spacing between each pair of adjacent typographic character units. Justification must not introduce gaps between the joined typographic letter units of cursive scripts such as Arabic."] 

tests[53]=["text-align/text-align-last-001.html","CSS Text Test: text-align-last - start (basic)",'',"","The 'text-align-last' property set to 'start' on a block element aligns the last line text to the start edge."] 

tests[54]=["text-align/text-align-last-002.html","CSS Text Test: text-align-last - end (basic)",'',"","The 'text-align-last' property set to 'right' on a block element aligns the last line text to the end edge."] 

tests[55]=["text-align/text-align-last-003.html","CSS Text Test: text-align-last - left (basic)",'',"","The 'text-align-last' property set to 'left' on a block element aligns the last line text to the left."] 

tests[56]=["text-align/text-align-last-004.html","CSS Text Test: text-align-last - right (basic)",'',"","The 'text-align-last' property set to 'right' on a block element aligns the last line text to the right."] 

tests[57]=["text-align/text-align-last-005.html","CSS Text Test: text-align-last - center (basic)",'',"","The 'text-align-last' property set to 'center' on a block element aligns the last line text to the center."] 

tests[58]=["text-align/text-align-last-006.html","CSS Text Test: text-align-last - justify (basic)",'',"","The 'text-align-last' property set to 'justify' on a block element aligns the last line text to both left and right edges"] 

tests[59]=["text-align/text-align-last-007.html","CSS Text Test: text-align-last - auto and text-align - right",'',"","The 'text-align-last' property set to 'auto' on a block element aligns the last line text to the right when text-align set 'right'."] 

tests[60]=["text-align/text-align-last-008.html","CSS Text Test: text-align-last - auto and text-align - end",'',"","The 'text-align-last' property set to 'auto' on a block element aligns the last line text to the right when text-align set 'end'."] 

tests[61]=["text-align/text-align-last-009.html","CSS Text Test: text-align-last - auto and text-align - center",'',"","The 'text-align-last' property set to 'auto' on a block element aligns the last line text to the center when text-align set 'center'."] 

tests[62]=["text-align/text-align-last-010.html","CSS Text Test: text-align-last - right(one line inside block element)",'',"","The 'text-align-last' property set to 'right' on a block element aligns the only one line text to the right."] 

tests[63]=["text-align/text-align-last-011.html","CSS Text Test: text-align-last - end(one line inside block element)",'',"","The 'text-align-last' property set to 'end' on a block element aligns the only one line text to the right."] 

tests[64]=["text-align/text-align-last-012.html","CSS Text Test: text-align-last - center(one line inside block element)",'',"","The 'text-align-last' property set to 'center' on a block element aligns the only one line text to the center."] 

tests[65]=["text-align/text-align-last-013.html","CSS Text Test: text-align-last applied to \"display: inline\" div element",'',"","Test checks that the 'text-align-last' property is invalid if the container element is not block element."] 

tests[66]=["text-align/text-align-last-014.html","CSS Text Test: text-align-last applied to \"display: block\" span element",'',"","Test checks that the 'text-align-last' property is valid if the span element set 'display: block'."] 

tests[67]=['../testend','','','','']
