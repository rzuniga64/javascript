/**
 * JavaScript Regular Expressions
 * A special language for describing patterns in string
 * Very succint and very powerful
 * Can be difficult to understand
 * JavaScript supports Perl-Compatible Regular Expressions(PCRE)
 */
var msg = document.getElementById("message");
/**
 *  Validate an email address
 *  /^[a-z]0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
 *  / - delimiter
 *  ^ - look at start of the string
 *  $ - look at end of/^[a-z]0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ the string
 *  + - must have at least one or more of the characters that follow it
 *  . - means any character
 *
 *  parse the email name
 *  [a-z0-9._%-] - denotes a set of valid characters including: a-z, 0-9, period, underscore, percent or a dash.
 *
 *  parse domain
 *  @ - required in all email addresses
 *  [a-z0-9._%-] - denotes a set of valid characters including: a-z, 0-9, period or underscore
 *
 *  parse domain suffix
 *  \. = starts with a period
 *  [a-z0-9._%-] - denotes a set of valid characters including: a-z
 *  {2,4} - only want 2-4 characters
 *
 * Defining regular expression in the word 'JavaScript
 *  /Java\s*Script/ig;
 *  \s - denotes a whitespace character such as space or tab
 *  * - means it will find any number of space characters include null
 *  i - denotes not case sensitive
 *  g - denotes global, want to locate every instance not just the first
 */
var regex1 = /^[a-z]0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
msg.innerHTML += "<p>Is rzuniga64@gmail.com a valid email address?  "+ regex1.test("rzuniga64@gmail.com") +"</p>";

/**
 *  Defining Regular Expression in Javascript
 *  A RexExp object allows to build regular expressions in a situation where what you are looking for could change.
 */
var regex2 = new RegExp("Java\s*Script", "ig");

// this code defines an expression using predefined variables. It looks for LiveScript but could look for JavaScript
// or any other type.
var type = "Live";
var regex = new RegExp(type + "\s*Script", "ig");

// Regular Expression Testing
var text = "Java script is not Java or Script. JavaScript is a language in its own right.";
var regex = /Java\s*Script/ig;
// the easiest test to perform is called 'test' which is part of the regular expression object itself
msg.innerHTML += "<p>String: "+ text +"</p>";
msg.innerHTML += "<p>Is there a match for 'Javascript'?  "+ regex.test(text) +"</p>";
// return first character index using 'search', a method of the String object
msg.innerHTML += "<p>First location of 'JavaScript': "+ text.search(regex) +"</p>";
// return array of matches
msg.innerHTML += "<p>Matches for 'JavaScript': " + text.match(regex) + "</p>";
// return array of substrings split at regex
msg.innerHTML += "<p>Array of substrings split at 'JavaScript' "+ text.split(regex) +"</p>";
// replace the regular expression
msg.innerHTML += "<p>Regular expression replacing "+ text.replace(regex, "JavaScript") +"</p>";
// Advanced regular expression replacing
var regex3 = /(is not|is)/ig;
msg.innerHTML += "<p>" + text.replace(regex3,"<em>$1</em>") +"</p>";






