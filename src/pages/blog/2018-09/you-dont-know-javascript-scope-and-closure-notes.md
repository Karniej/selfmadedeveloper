---
templateKey: blog-post
title: You Don't Know JavaScript - Scope & Closure notes
date: 2018-09-24T08:04:10.000Z
description: Notes
thumbnail: "/static/img/scope&closurenotes.jpg"
tags:
  - learning programming
---

# **Intro**

Hello there, this blog post is a short notes I wrote for myself to remember the concepts of  the book "You don't know JavaScript - Scope &amp; Closures" by Kyle Simpson.
It's a really great book and I will only scratch a surface on the most important stuff I got from certain chapters of the book. I wrote it to better understand and remember what I've read. I hope it will encourage you to get read the book [online](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&amp;%20closures/README.md#you-dont-know-js-scope--closures) ( it's free on Github) or buy yourself a copy!

___

## **What is Scope?**

This chapter explains how JavaScript Engine works in terms of declaring and referencing variables in the Scope. Scope is a set of rules where those variables can be found and what to do with those variable. Scope consist of container-like elements in which variables and functions are declared.

When using Left Hand Side (LHS) reference , the variable is assigned a value and when the variable’s value is retrieved, which is Right-Hand-Side (RHS) reference. LHS result from assignment operator ‘=‘ or passing as an argument to a function parameter.

JavaScript Engine firstly compiles (just-in-time) code before executing in this particular order:
Declaring a variable to a Scope before code execution
Looking up for a variable in the scope and assigning a value to it if using LHS reference

Both references (LHS &amp; RHS) start look up for a variable declaration in a currently executing Scope and if the variable declaration aren’t found there the look up continues until it reaches the global scope of variables.
When the RHS reference is unfulfilled - Reference Error is being thrown.
Unfulfilled LHS reference result in an automatic creation global of that name.

___

## **Lexical Scope**

Lexical scope means that scope is defined by decisions of where the functions are declared. During the JavaScript code compilation, the lexing phase is able to understand where and how all identifiers are declared, therefore predict how the declaration look-up will run.

There are 2 mechanisms in JavaScript to “cheat” lexical scope: ‘eval(..)’ and ‘with’(deprecated). Both mechanisms are disabling JavaScript Engine ability to optimise the code during the compilation, therefore resulting in much slower code. That’s why it’s recommended not to use them at all.

___

## **Function vs. Block Scope**

Scope consist of series of containers in which variables and identifiers are declared, but what makes a new container ? This chapter explains it.

Function is the most common container of scope in JavaScript. Variables and other functions declared inside functions are explicit to the function scope and are ‘hidden’ from any of the enclosing scopes, which is also a good practice in terms of software called principle of least privilege.

Functions being the most common container of scope aren’t the only one in terms of container. Block scope is the idea that variables and function may belong to any random block of code ( most of the times anything between curly {…} brackets pair). Also simple ‘for loop’ also is a block of code.

This chapter also explains the differences between function declaration and function expression and how both of those behave in the global scope. Function declaration ‘pollutes’ the global scope with declared function name and function expression is execute between the scope of it’s own and doesn’t pollute the global scope.

Function expression can be anonymous, while function declarations have to have a name.

___

## **Hoisting**

In this chapter we find out what hoisting is, which can be described as variables and functions being of their individual scopes. Those declarations only are being hoisted, but not the assignments of those declarations.

That means that wherever we declare a variable or function, this declaration is moved to the top of the scope in the first compiler-phase task without any value assignment and then the assignments to those declarations happens in the second execution-phase-task of the runtime.

___

## **Scope Closure**

In this chapter, the author Kyle Simpson explains what Closure actually means and why it’s not something mystical tool that only JavaScript magicians use, but it’s just a standard way of writing code in JavaScript lexical environment where functions are also values and can be passed around as ones too.

Closure is when the function was called outside its lexical scope, but can still remember and access the scope in which it was declared. When studied carefully, closures seem to be self-evident and obvious result of JavaScript lexical scope architecture.
Fully understanding this pattern introduces us to amazingly powerful tools like modules.

___

## **Summary:**

This book helps to understand the core principles of JavaScript language. As JavaScript Developers working in any framework we’re using those concepts of the language everyday without actually thinking how they work under the hood.

That’s why reading this book was very helpful for my understanding of the language. After reading it, some everyday error’s seems more clear and easier to understand.

The book also introduced a few software-development good practices like principle of least privilege for declaring variables and why it’s better to use named functions instead of anonymous functions ( easier debugging ).

In the appendix section of the book, author explains what’s the difference between JavaScript Lexical Scope and other languages Dynamic Scope and how this mechanism in JavaScript has a kind of dynamic scope.

In order to fully understand the mechanics besides the this and it’s correlation to dynamic scoping, author refers to his other book from this series “this &amp; Object Prototypes” which will be is next on my reading list.
