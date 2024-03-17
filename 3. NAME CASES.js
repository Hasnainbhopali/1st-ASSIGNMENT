// lower case
var personName = "Hasnain";
console.log("lowercase:", personName.toLowerCase());
// Upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
