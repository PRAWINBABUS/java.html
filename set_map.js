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
