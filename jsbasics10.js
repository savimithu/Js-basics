
    
var arr = ['Apple','Cherry','Pineapple','Kiwi','Lemon'];

var slength=100000 ;

var strng ;

for (var i=0;i<arr.length; i++)
{
    if (arr[i].length < slength)
{
    slength =arr[i].length;
    strng=arr[i];
    
}
}

console.log(strng);





