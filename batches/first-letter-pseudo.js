tests = []
tests[0]=["first-letter-basic.html","CSS3 Pseudo: latin, single letter","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',":first-letter will select a single letter at the start of a line."] 

tests[1]=["first-letter-1cchar.html","CSS3 Pseudo: latin, letter + diacritic","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',":first-letter will select a letter + a following combining character at the start of a line."] 

tests[2]=["first-letter-2cchars.html","CSS3 Pseudo: latin, letter + 2 diacritics","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',":first-letter will select a letter + two following combining characters at the start of a line."] 

tests[3]=["first-letter-ij.html","CSS3 Pseudo: latin, ij in dutch","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',"[Exploratory] :first-letter will select an IJ as a single item at the start of a line in a Dutch context."] 

tests[4]=["first-letter-deva-1consonant.html","CSS3 Pseudo: hindi, letter only","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',":first-letter will select a devanagari letter at the start of a line."] 

tests[5]=["first-letter-deva-1cchar.html","CSS3 Pseudo: hindi, base character with 1 combining character","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',":first-letter will select a devanagari letter and a following combining character at the start of a line."] 

tests[6]=["first-letter-deva-2cchars.html","CSS3 Selectors: hindi, consonant + 2 combining characters","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',":first-letter will select a devanagari letter and two following combining characters at the start of a line."] 

tests[7]=["first-letter-deva-conjunct.html","CSS3 Selectors: hindi, simple conjunct","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',"[Exploratory] :first-letter will select a devanagari two-consonant conjunct at the start of a line."] 

tests[8]=["first-letter-deva-syllable.html","CSS3 Selectors: hindi, conjunct plus combining character","",'https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo',"[Exploratory] :first-letter will select a devanagari two-consonant conjunct and a combining character at the start of a line."] 

tests[9]=["exp-first-letter-deva-syllable.html","CSS3 Selectors: hindi, conjunct plus combining character (no webfont)","",'http://www.w3.org/TR/css3-selectors/#first-letter',"[Exploratory] :first-letter will select a devanagari two-consonant conjunct and a combining character at the start of a line."] 

tests[10]=['../../testend','','','','']
