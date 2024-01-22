function fun0(){
    console.log("function with argument and without return")
}
//
function fun(a,b){
    console.log("function with argument without return")
    for (i=a;i<b;i++){
        if(i%2==0)
        {
            console.log("the number "+i+"is even")
        }
        else
        {
            console.log("the number "+i+"is odd")
        }
    }
}
fun(1,2)
