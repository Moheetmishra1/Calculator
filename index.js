
var data='';


$(".num").click(function(){
    put(this.innerHTML);
});

 $(".num").keypress((event)=>{
    put(event.key);       
 })


 
 function put(n){
    if((n <= 9 && n >=0)|| (n=='+'||n=='-'|| n=='x'||n=='/'||n=="÷"||n=='.')){
        if(n=='÷'){
            data+='/';
        }else{
        data+=n;}
        $("input").val(data);
    }else if(n=='='){
        var total= eval(data);
        data=total;
        $("input").val(data);
    }else if(data[-1]=='/'){
            if(n=='0'){
                alert("Error");
            }else{
                data/=n;
                $("input").val(data);
            }

    }else if(n=='AC'){
        data='';
        $("input").val(data);

    }

 }