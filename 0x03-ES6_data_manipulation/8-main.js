import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', '', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(['bonjovi', 'bonaparte', 5, 'banana'], 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set([]), ''));
console.log(cleanSet(new Set()));
console.log(cleanSet(new Set([])));
console.log(cleanSet([]));
console.log(cleanSet([], 5));
console.log(cleanSet(new Set(['bonjovi']), 'bon'));
console.log(cleanSet(new Set(['bonbon']), 'bon'));
console.log(cleanSet(new Set(['bon']), 'bon'));
console.log(cleanSet(new Set(['-bon-bon-']), 'bon'));
console.log(cleanSet(new Set(['bon-bon-']), 'bon'));
console.log(cleanSet(new Set(['bon-bon-', '-bon-bon-']), 'bon'));
console.log(cleanSet(new Set(['bonbon', 'bonbonbon']), 'bon'));
console.log(cleanSet(new Set(['-bon-', '-bon--']), '-'));
console.log(cleanSet(['','',''], ''));
console.log(cleanSet(['bonjovi', "bonjovi", 'bonappetit', 'banana'], 'bon'));

