tests = []
tests[0]=["the-dirname-attribute-001.html","The dirname attribute: dirname, ltr",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set to ltr on the input tag. The dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[1]=["the-dirname-attribute-002.html","The dirname attribute: dirname, rtl",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set to rtl on the input tag. The dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[2]=["the-dirname-attribute-003.html","The dirname attribute: dirname, inherits ltr",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set to ltr on an ancestor of the input tag. The dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[3]=["the-dirname-attribute-004.html","The dirname attribute: dirname, inherits rtl",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set to rtl on an ancestor of the input tag. The dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[4]=["the-dirname-attribute-005.html","The dirname attribute: dirname, default",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"No dir attribute is set, so the document is ltr by default. The dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[5]=["the-dirname-attribute-006.html","The dirname attribute: dirname, auto, ltr text",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set to auto. If the form field auto-detects ltr direction based on first strong character input, the dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[6]=["the-dirname-attribute-007.html","The dirname attribute: dirname, auto, rtl text",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set to auto. If the form field auto-detects rtl direction based on first strong character input, the dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[7]=["the-dirname-attribute-008.html","The dirname attribute: dirname, scripted",'interact http','http://www.w3.org/TR/html5/forms.html#the-dirname-attribute',"The dir attribute is set using JavaScript. The dirname attribute will cause the direction of the input element to be passed with the form parameters."] 

tests[8]=['../../../../testend','','','','']
