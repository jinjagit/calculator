# calculator

Solution to the [Odin Project "Calculator" exercise](https://www.theodinproject.com/courses/web-development-101/lessons/calculator); (unfinished)  
by Simon Tharby (a.k.a. jinjagit), 2018.  
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
* settings menu (maximize/full-screen toggle, l/r-handed toggle)
* 'F' (fullscreen) key; only on mobile, letterbox layout
* all animations halt on user input, to avoid lag issues
* warning text animations revert to prior display content, when appropriate
