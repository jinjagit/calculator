# calculator

Solution to the [Odin Project "Calculator" exercise](https://www.theodinproject.com/courses/web-development-101/lessons/calculator); (unfinished)  
by Simon Tharby (a.k.a. 'jinjagit' @ GitHub, 'jinja' @ Odin Project), 2018.  
[view in browser](https://jinjagit.github.io/calculator/)  

![overview of calculator](img/calcOverview.png)  

**Features:**  

* mobile focused, minimal, responsive design, with desktop default layout (scaled relative to screen size and responsive under certain conditions)
* one of 3 layouts is automatically chosen to best fit aspect ratio constraints:  

![different layouts of calculator](img/calcLayouts.png)
* calculator evaluates expressions containing multiple operators, with or without parentheses
* calculator only accepts well-formed expressions
* numerical content of main display, excluding scientific notation, can be backspace deleted to edit
* numerical result, _including_ scientific notation, displayed in main display becomes first part of new expression if operator is next input
* 'fast operate': When only one value and one operator have been added to expression, '=' will evaluate the value reflexively. e.g. the inputs '3 * =' are equivalent to '3 * 3 ='
* while last operator is last item added to expression (in secondary display):
  * the operator can be replaced by entering a new operator
  * the operator can be backspace deleted and replaced (or subsequent backspace = clear all)
* warnings:
  * "faulty expression" when user attempts to evaluate an incomplete expression
  * "*n* * unclosed ')'" when user attempts to evaluate expression with *n* unclosed parentheses
  * "invalid input" when user input would form a malformed expression, or when the main display is full
  * "power error!" when an expression containing one, or more, power expression(s) that result(s) in a complex number, or numbers, is evaluated (also highlights the specific power expression that led to the error)
* keyboard input supported (including delete key for backspace). A few keyboard inputs are not intuitive:
  * keyboard 'delete', left-arrow (not on Mac), and '<' keys --> '<' (backspace) on keypad
  * keyboard 'enter' &/or 'return', and '=' keys --> '=' (evaluate) on keypad
  * keyboard '#' --> '±' (sign toggle) on keypad
* settings menu (maximize/full-screen toggle, l/r-handed toggle)
* 'F' (fullscreen) key; only on mobile, letterbox layout
* all animations halt on user input, to avoid lag issues
* warning text animations revert to prior display content, when appropriate


**Notes on divergence from homework criteria:**

I used JavaScripts eval() method to evaluate the math, (and named the relevant function 'evaluate()', rather than 'operate()' as specified, to highlight this divergence), which seems like a cheat, right?

Turns out it really wasn't: I started by deciding to use a 24 key layout for the keypad, as I liked the various ways this could be arranged (4*6, 3*8, 6*4) and could see this would play nicely with a design that responds to different aspect ratios (especially when rotating a mobile device's screen by 90 degrees). Using a double-key-size for the '=' key gave me 25 keys, so I decided to add parentheses, a sign toggle and a power operator (x^y). I also decided to leverage the eval() method to evaluate expressions containing more than one operator.

These decisions led to some interesting complications. The first thing I discovered was that eval() doesn't like '--'. For example eval(2--4) throws an error, rather than the expected answer of 6 (2+4). OK, use a regex to convert all cases of '--' to '+'? Not quite! I wanted the cases of power expressions like; 2--3^2, to be evaluated as 2-(-3^2), not 2+3^2. Added to this, there is also the case of a negative base with a fractional power (e.g. -9^0.5) throwing a NaN error, since the root(s) of a negative number is/are complex numbers, which are usually beyond the scope of basic calculators.

The solution was to first parse the string to be evaluated (and my calculator allows for the input of long, complex strings of numbers, operators and parentheses), and evaluate each power expression separately. This also meant parsing and evaluating them in a specific order, with the added complication that power expressions could be placed within the base and/or the exponent of other power expressions (using parentheses). Only after evaluating all power expressions, in the correct order, could I then convert all remaining '--' to '+', and then use eval() to evaluate the resulting string.

I also added warning and error messages, with animations where this would be helpful, including a message specific to the potential power error mentioned above, that highlights the particular power expression that threw the error.

Other than that, there are a number of other features / behaviors I included, which were not specified in the homework (including a responsive, reasonably mobile friendly, layout; keypress animations; maximize to fill window and left / right-handed layout options - both accessible via a settings menu). These were added because I wanted to try producing something near to an app one might actually use, and that demonstrated and developed my skills in layout (especially dynamic manipulation of the DOM via JavaScript) aside from creating the desired functionality.
