// a special language for describing patterns in strings
// very succint and very powerful
// can be difficult to understand
// Javascript supports Perl-Compatible Regular Expressions (PCRE)

// validate an email address
// /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
// regex begins and ends with /
// ^ look at start of string
// $ look at end of string
// [a-z0-9._%-] denotes a set of valid characters
// + means we can have one or more of those characters
// @[a-z0-9.-]+ denotes the domain
// \. an escape character to get a perios.  A period
// normally means that it can be any character
// [a-z]{2,4} denotes the domain suffix (.com, .net)