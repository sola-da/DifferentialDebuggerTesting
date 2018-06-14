# Differential Debugger Testing

This is an implementation of _differential testing of interactive debuggers_, specifically for the JavaScript debuggers 
of Firefox and Chromium. 

Differential testing is an automatic testing technique where generated inputs are given to two different 
programs, whose behavior is then compared. We apply this idea to debuggers, where the inputs are _debugging actions_, 
e.g., "set breakpoint in line X" or "step into" and a _program-to-debug_ and the compared debugger behavior is state 
such as where the debugger is paused or the names and values of local variables.

For more details on our approach, see our paper (to appear):

_Feedback-Directed Differential Testing of Interactive Debuggers_  
Daniel Lehmann and Michael Pradel  
The 26th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2018)

# Repository Overview



# Installation

Please check INSTALL.md for instructions.

# Directory Structure

# Programs-to-Debug

- ```manual/```: Programs we wrote ourselves, mostly to test JavaScript features >ES5 (which SunSpider doesn't have).
- ```pta-warm-up-quizzes/```: JavaScript puzzlers, taken from the _program testing and analysis_ lecture at TU Darmstadt.
- ```sunspider-determ/```: SunSpider benchmarks, version 1.0.2, with minor changes to fix non-determinism (replacing ```Math.random()``` or constructing a fixed ```Date```).

# 