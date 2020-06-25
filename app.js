//--------------CHAPTER # 21-25-----------------
//STRING METHODS


//TASK 1
// var fname=prompt("Enter Your First Name");
// var lname=prompt("Enter Your Last Name");
// var  fullName=fname+" "+lname;
// alert("Welcome to Our Website "+fullName);

//TASK 2
// var phone=prompt("Enter Your Favroutie Mobile Phone Model");
// var l=phone.length;
// document.write("The length of string is: "+l);
// document.write("<br>");
// document.write("<br>");


//TASK 3
// var str="PAKISTAN";
// for(var i=0; i<str.length; i++){
//     if(str.charAt(i)==="N"){
//         document.write("PAKISTAN");
//         document.write("<br>");
//         document.write("Index of 'N' is: "+i);
//         document.write("<br>");
//         document.write("<br>");
//     break;
//     }
// }


//TASK 4
// var str="hello world";
// for(var i=0; i<str.length; i++){
//     if(str.charAt(i)==="l" )
//        var x=i;
// }
// document.write("Hello World");
// document.write("<br>");
// document.write("Last Index of 'l' is: "+x);
// document.write("<br>");
// document.write("<br>");

//TASK 5
// var str="PAKISTAN"
// var x=str.charAt(3);
// document.write("PAKISTAN");
// document.write("<br>");
// document.write("Character at index 3 is: "+x);
// document.write("<br>");


//TASK 6
// var fname=prompt("Enter Your First Name");
// var lname=prompt("Enter Your Last Name");
// var  fullName=fname.concat(lname);
// alert("Welcome to Our Website "+fullName);

//TASK 7
// var h="Hyderabad";
// var i=h.replace("Hyder","Islam");
// document.write("<br>");
// document.write(h);
// document.write("<br>");
// document.write(i);
// document.write("<br>");


//TASK 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var a=message.replace(/and/g, "&" );
// document.write("<br>");
// document.write(message);
// document.write("<br>");
// document.write(a);
// document.write("<br>");


//TASK 9
// var n=prompt("Enter a Number");
// var x=parseInt(n);
// document.write("Value: "+n);
// document.write("<br>");
// document.write("Type: String");
// document.write("<br>");
// document.write("Value: "+x);
// document.write("<br>")
// document.write("Type: number");
// document.write("<br>")


//TASK 10
// var v=prompt("Enter a word");
// var w=v.toUpperCase();
// document.write("<br>");
// document.write("User input: "+v);
// document.write("<br>");
// document.write("Upper Case: "+w);
// document.write("<br>");


//TASK 11
// var w=prompt("Enter a word");
// var v=w.toLowerCase();
// var  v=v.split(' ');
// for (var i = 0; i < v.length; i++) {
//     v[i] = v[i].charAt(0).toUpperCase() + v[i].slice(1);} 
// v=v.join(' ');
// document.write("<br>");
// document.write("User input: "+w);
// document.write("<br>");
// document.write("Title Case: "+v);
// document.write("<br>");



//TASK 12
// var a=35.36;
// var b=a.toString();
// b=b.replace(".",'')
// document.write("<br>");
// document.write("Number: "+a);
// document.write("<br>");
// document.write("Result:  "+b);
// document.write("<br>");


//TASK 13
// var c=prompt("enter username");
// for(var i=0; i<c.length; i++)
// {var a= c.charCodeAt(i);
//     if(a=='33' || a=='44' || a=='46' || a=='64')
//     {
//         alert("please enter a valid user name!");
//     }
// }

//task 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var c=b.toLowerCase();
// var flag=0;
// for(var i=0; i<a.length; i++){
//     if(c==a[i]){
//         flag=1;
//         alert(b+" is available at index "+i+" in our bakery.");
//     }
// }
// if(flag==0){
// alert("We are sorry. "+b+" is not available in our bakery.");}


//task 15                                           ********
// var pass = prompt("enter your password!");
// document.write("Entered Password: " + pass);
// if (pass.length >= '6') {
//     if (pass.charAt(0) >= '48' && pass.charAt(0) <= '57') {
//         alert("Password can not be begin with a number!<br>Please enter a valid password!");
//     }
//     else {
//         for (var i = 0; i < pass.length; i++) {
//             if ((pass.charAt(i) >= '48' && pass.charAt(i) <= '57') || (pass.charAt(i) >= '65' && pass.charAt(i) <= '90') || (pass.charAt(i) >= '97' && pass.charAt(i) <= '122')) {
//             }
//             else {
//                 alert("Enter fdfvalid password!");
//                 break;
//             }
//         }
//     }
//     alert("SUCCESSFUL!");
// }
// else {
//     alert("Enter valid password!");
// }


//task 16
// var university = "University of Karachi";
// var s=university.split("");
// for(var i=0; i<university.length; i++)
// {
//     document.write(s[i]+"<br>");
//  }
 

//task 17
// var a=prompt("enter something!");
// document.write("User input: "+a+"<br>");
// var len=a.length;
// document.write("Last character of input: "+a[len-1]);

//task 18                                        *******
// var a="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+a);
// var count=0;
// var b= a.toLowerCase();
// for (var i=0; i<b.length; i++){
//     if(b.slice(i,3)=="the")
//    { count++;}

// }
// document.write("<br>There are "+count+" occurrence(s) of word 'the'.");


//-----------chapter # 26-30----------------
//math methods



//task 1
// var num=+prompt("enter a positive integer");
// document.write("number: "+num);
// var a =num.toFixed();
// document.write("<br>round off value: "+a);
// var b= Math.floor(num);
// document.write("<br>floor value: "+b);
// var c=Math.ceil(num);
// document.write("<br>ceil value: "+c);

//task 2
// var num=+prompt("enter a negative floating point");
// document.write("number: "+num);
// var a =num.toFixed();
// document.write("<br>round off value: "+a);
// var b= Math.floor(num);
// document.write("<br>floor value: "+b);
// var c=Math.ceil(num);
// document.write("<br>ceil value: "+c);

//task 3
// var num=+prompt("enter a number");
// var a=Math.abs(num);
// document.write("The absolute value of "+num+" is "+a);

//task 4
// var a=Math.random()*6;
// var b=Math.ceil(a);
// document.write("random dice value: "+b);

//task 5
// var a=Math.random()*2;
// var b=Math.ceil(a);
// if(b==2){
// document.write(+b+"<br>random coin value: Heads");}
// else{
//     document.write(+b+"<br>random coin value: Tails"); 
// }

//task 6
// var a=Math.random()*100;
// var b=Math.ceil(a);
// document.write("random number between 1 and 100: "+b);


//task 7
// var a=prompt("Enter your weight in kilograms");
// document.write("The weight of user is "+a);

//task 8
// var a=Math.random()*10;
// var b=Math.ceil(a);
// var c=+prompt("enter number between 1 to 10");
// if(c==b)
// {
//     alert("Congratulation!");
// }
// else{
//     alert("try again!");
// }






//-------------chapter #31-34------------------
//date methods





//task 1
// var date=new Date();
// document.write(date);

//task 2           
// var arr=["january","february","march","april","may","june","july","august","september","october","november","december"];
// var date=new Date();
// var a=date.getMonth();
// alert("Current month: "+arr[a]);

//task 3
// var arr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var date=new Date();
// var a=date.getDay();
// alert("Today is "+arr[a]);

//task 4
// var date=new Date();
// var a=date.getDay();
// if(a===0 || a===6)
// {
//     alert("It's Fun day");
// }

//task 5
// var q= new Date();
// if(q<16){
//     alert("First fifteen days of the moon");
// }
// else{
//     alert("Last days of the month");
// }

//task 6              
// var date=new Date();
// document.write("Current Date: "+date);
// var date2= new Date("january 01, 1970");
// var t1= date.getTime();
// var t2= date2.getTime();
// var t3=t1-t2;
// document.write("<br>Elapsed milliseconds since January 1,1970: "+t3);
// var min=t3/(1000*60);
// document.write("<br>Elapsed minutes since January 1,1970: "+min);

//task 7
// var q=new Date();
// var a=q.getHours();
// if(a>=0 && a<12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }


//task 8
// var laterDate = new Date("Dec 31, 2020");
// alert("Later date: "+laterDate);

//task 9               
// var a= new Date("June 18, 2015");
// var b=new Date();
// var c= a.getTime();
// var d= b.getTime();
// var e=d-c;
// var ee=e/(1000*60*60*24);
// var ee=Math.floor(ee);
// document.write(ee+" days have passed since 1st Ramadan, 2015");

//task 10
// var a= new Date(" jan 01, 2015");
// var b=new Date();
// var c= a.getTime();
// var d= b.getTime();
// var e=d-c;
// var f=e/1000;
// var g=Math.floor(f);
// document.write("On reference date "+b+", "+g+" seconds had passed since begining of 2015");


//task 11
// var date=new Date();
// var hrs=date.getHours();
// var d2= new Date();
// d2.setHours(hrs-1);
// document.write("current date: "+date);
// document.write("<br>1 hour ago, it was "+d2);

//task 12
// var date=new Date();
// var d2= new Date();
// var hrs= d2.setFullYear(1920);
// alert("current date: "+date+"\n100 years back, it was "+d2);



//task 13
// var age=+prompt("enter your age");
// var date= new Date();
// var year=date.getFullYear();
// var diff=year-age;
// alert("Your age is "+age+"\nYour birth year is "+diff);


//task 14
// document.write("<h2>K-Electric Bill</h2>");
// var name =prompt("enter your name:");
// document.write("<br>Customer name: "+name);
// var arr=["january","february","march","april","may","june","july","august","september","october","november","december"];
// var d=new Date();
// var m=d.getMonth();
// var month=arr[m];
// var units=410;
// var charges=16;
// document.write("<br>Month: "+month);
// document.write("<br>Number of units: "+units);
// document.write("<br>Charges per unit: "+charges);
// var net=units*charges;
// document.write("<br><br>Net Amount Payable (within Due Date): "+net);
// var late=350;
// document.write("<br>Late payment surcharge: "+late);
//  var gross=net+late;
//  document.write("<br>Gross Amount Payable (after Due Date): "+gross);






//-----------chap # 35-38----------------------
//function



//task 1
// function date(){
//   var a=new Date();
// alert(a);
// }
// date();

//task 2
// function name(){
// var firstname=prompt("enter your first name");
// var lastname=prompt("enter your last name");
// var  fullName= firstname+lastname;
// alert("welcome "+fullName+" !");
// }
// name();


//task 3
//alert( );
//function add(a,b){
//     var a,b;
//     var sum =a+b;
//     return sum;
//     }
//     var num1=+prompt("enter 1st number:");
// var num2 =+prompt("enter 2nd number:");
// var ans=add(num1,num2);
// alert("The sum of "+num1+" and "+num2+" is: "+ans);

//task4
// function cal(num1,num2,op){
//  var num1,num2,op,sum;
//  if(op=='+'){
//  sum=num1+num2;
//  return sum;
//  }
//  else if (op=='-'){
//      sum=num1-num2;
//      return sum;
//  }
//  else if(op=='*'){
//      sum=num1*num2;
//      return sum;
//  }
//  else if(op=='/'){
//      sum=num1/num2;
//      return sum;
//  }
// }
// var n1=+prompt("enter 1st number");
// var n2=+prompt("enter 2nd number");
// var opr=prompt("which operation do you want to perform?");
// var ans=cal(n1,n2,opr);
// if(opr=='+'){
//     document.write("The addition of "+n1+" and "+n2+" is: "+ans);
//     }
//     else if(opr=='-'){
//         document.write("The subtraction of "+n1+" and "+n2+" is: "+ans);
//     }
//     else if(opr=='*'){
//         document.write("The multiplication of "+n1+" and "+n2+" is: "+ans);
//     }
//     else if(opr=='/'){
//         document.write("The division of "+n1+" and "+n2+" is: "+ans);
//     }


//task 5
// function square(s){
//     var s,a;
//     a=s*s;
//     return a;

// }
// var num=+prompt("enter a number");
// var ans=square(num);
// alert("The square of "+num+" is: "+ans);


//task 6
// function fact(num){
//     var num,f=1;
//     for(var i=1; i<=num; i++){
//         f=f*i;
//     }
// return f;
// }

// var n=+prompt("enter a number");
// var ans=fact(n);
// alert("The factorial of a "+n+" is: "+ans);

//task 7
// function counting(a,b){
//     var a,b;
//     for(i=a; i<=b; i++)
//     document.write(i+"<br>");
// }
// var n1=+prompt("enter starting number");
// var n2=+prompt("enter last number");
// document.write("Counting from "+n1+" to "+n2+"<br>");
// counting(n1,n2);

//task 8
// function hyp(b,p){
//     var b,p;
//     function sq(num){
//         var num,s;
//         s=num*num;
//         return s;
//     }
// var sob=sq(b);
// var sop=sq(p);
// var add= sob+sop;
// var h=Math.sqrt(add);
// return h;
// }
// var n1=+prompt("enter base value");
// var n2=+prompt("enter perpendicular value");
// var h=hyp(n1,n2);
// alert("The Hypotenuse of a triangle is: "+h);

//task 9
// function area(w, h) {
//     var area, w, h;
//     area = w * h;
//     alert("The area of a rectangle is: " + area);
// }
// area(5, 3);



// function area(w, h) {
//     var area, w, h;
//     area = w * h;
//     alert("The area of a rectangle is: " + area);
// }
// var n1=+prompt("enter width");
// var n2=+prompt("enter height");
// area(n1,n2);


//task 10          
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return ("this is not a palindrome");
//       }
//     }
//     return ("this is a palindrome");
//    }
//    var x=palindrome(prompt("enter a string"))
//   alert (x);


//task 11
// function us(string) {
//     var string;
//     var str = string.split(" ");
//     var a,b="";
//     for (var i = 0; i < str.length; i++) {
//         a=str[i];
//      b=b+us2(a);
//         }
//     return b;
// }
// function us2(a){
//     var a,final, c="";
   
//   var  b=a[0].toUpperCase();
//   for (var i = 1; i < a.length; i++) {
//       c=c+a[i];
// }
// final=b+c;
// final=final+" ";
// return (final);}

// var string="the quick brown fox";
// document.write("String: "+string);
// document.write("<br>Output: "+us(string));


//task 12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// var string="Web Development Tutorial";
// document.write("String: "+string);
// document.write("<br>longest word is: "+longestWord(string));


//task 13
// function count(a,b){
//     var a,b;
//     var c= a.toLowerCase();
// var ct = (c.match(/o/g)).length;
// document.write("String: "+a+"<br>word: "+b+"<br>There are "+ct+" occurrence(s) of word "+b);

// }
// count('JSResourceS.com', 'o');




//task 14
// function calcCircumference(r){
// var r,c;
// c=2*(3.142)*r;
// alert("The circumference is "+c);
// }
// function calcArea(r){
//     var r,a;
//     a=(3.142)*(r*r);
//     alert("The area is "+a)
// }
// var a=+prompt("enter radius of a circle");
// calcCircumference(a);
// calcArea(a);



//-----------END---------------










