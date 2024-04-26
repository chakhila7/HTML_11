/* print number from 1 to 10 using while */
var a = 0;
while (a <= 10)
{
    console.log(a);
    a+=2;
}
/* implement same using do while */
var b = 11;
do
{
    console.log(b);
    b++;
} while (b<=10)
// /*implement 1 to 20 in reverse order odd number*/
// var n = 19
// while (n>=1){
// console.log(n)
// n-=2
//}
// /*printing all letters in name */
// var s = "Garima"
// var n = s.length-1
// console.log(s.chartArt(n))
// n--
//}
// /* count number of vowels and consonents */
// var s='Garima'.toLowerCase()
// var n=0
// var vowel=0
// var cons=0

//while(n<=s.length-1)
//{
//if(s.charAt(n))=='a'||(s.charAt(n))=='e'||(s.charAt(n))=='i'||(s.charAt(n)=='o'||(s.charAt(n))=='u')
// vow++;
// n++
//}
//console.log(`vowels in Garima are ${vowel}`)
//console.log(`consonents in Garima are ${cons}`)

//for loop
//standard for
for (var i=25; i>=1; i-=2)
{
    console.log(i)
}
//for loops usually used to iterate array.array is a collection of elements
var arr=[2,3,5,8]

for (var a=0; a< arr.length; a++)
{
    console.log(arr[a])
}
//for--of
//to iterate array elements you can use for--of
var arr = ["welcome","everyone","to","JS"]

for (var a of arr)
{
    console.log(a)
}

//for ..in

for (var a in arr)
{
    console.log(a)
}
// for--in for objects, for--of arry..


