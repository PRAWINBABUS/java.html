//LOCAL SCOPE
for(let i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)//--->reference error
 //let holds asscess i only inside the forloop---->local scope
 //var holds asscess i  outside the forloop---->block scope
 for(var i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)

var a=10//---->block scope
console.log(a)
{
    let a=5//--->local scope
    let b=5//---->local scope
    console.log(a)
    console.log(b)
}
console.log(a)//---->block scope
