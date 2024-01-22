//looping
//for loop
sum=0
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)
var i=0
sum=0
while(i<10)
{
    sum+=i
    i++
}
console.log(sum)
do
{
     sum+=i
    i++
}while(i<10)
console.log(sum)

arr = [10,20,30]//--->valid
var a=arr.length
for(var i=0;i<a;i++)
{
   console.log(arr[i])
}
arr1 = [10,true,'prawin']//--->valid
var a=arr1.length
for(var i=0;i<a;i++)
{
   console.log(arr1[i])
}
arr2 =[20.5,20,'prawin',true]//---->valid
var a=arr2.length
for(var i=0;i<a;i++)
{
   console.log(arr2[i])
}
arr2 =[20.5,20,'prawin',true]
for(const index in arr2){
    console.log("The value present in",index,"is",arr2[index])
}


for(const value of arr2){
    console.log(value)
}
arr.forEach(index=>{
    console.log(index)
})












