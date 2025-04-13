/*
Given an array of strings words and a string s, determine if s is an acronym of words.

The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

Return true if s is an acronym of words, and false otherwise.
*/
let words1 = ["alice","bob","charlie"];
let words2 = ["an", "apple"];
let s1 = "abc";
let s2 = "a";
var isAcronym = function (words, s) {

       return (
         s ===
         words.reduce((acc, current) => {
           acc += current[0];
           return acc;
         }, "")
       );

    

};


console.log(isAcronym(words1, s1));
console.log(isAcronym(words2, s2));

/*
Intution is ki 
humko bola hai ke acronym check krna hai 
to array ko acronym mai reduce krne ka idea aa sakta hai 

phir dono acronym ko compare kr kr k resule de denge
*/