//Set
//example
setExample= new Set("rcb","mi","csk") 
console.log(setExample)

setExample= new Set(["kkr","mi","csk"]) 
console.log(setExample)
setExample.add("mi")
setExample.add("gj")
console.log(setExample)

for(i of setExample)
{
    console.log(i)
}

//map
mapEg=new Map([
    ["id","21dnfw21"],
    ["name","prawin"]
    ])
console.log(mapEg)
for(i in mapEg)
{
    console.log(i)
}
for(i of mapEg)
{
    console.log(i)
}
console.log(mapEg.has("name"))










