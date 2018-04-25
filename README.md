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
* content of main display can be backspace deleted to edit
* result displayed in main display becomes first part of new expression if operator next input
* while last operator is last item added to expression (in secondary display):
  * the operator can be replaced by entering a new operator
  * the operator can be backspace deleted and replaced (or subsequent backspace = clear all)
* warnings:
  * "faulty expression" when user attempts to evaluate an expression ending in an operator
  * "*n* * unclosed ')'" when user attempts to evaluate expression with *n* unclosed parentheses
* all animations halt on user input, to avoid lag issues

**Not yet implemented:**

* settings menu (maximize/full-screen toggle, theme toggle, l/r-handed toggle)
* second theme
* some error/warning messages
* some animations
* 'F' (full-screen) key; only on mobile, letterbox layout
* 'quick operation'; result given if '=' input after first operator
