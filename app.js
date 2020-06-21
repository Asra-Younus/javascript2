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