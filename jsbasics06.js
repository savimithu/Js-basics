function ktolb(a,b)
{
   if(b==="kgs")
   {
      x = a * 2.2;
     console.log(a,b,'=',x,'lbs"');
   
   }
   else
   {
        x = a / 2.2;
       console.log(a,b,'=',x,'kgs"');
   }
}
console.log(ktolb(80,"lbs"));
console.log(ktolb(25,"kgs"));
