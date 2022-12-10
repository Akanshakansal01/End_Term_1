(Array.from(document.getElementsByTagName("aa"))).foreach((aa)=>{
    console.log("aaaaa");
    aa.addEventlistener("click",books);
});

function books(ele)
{
    ele.preventDefault();
    console.log(ele.target.id);
    if(ele.target.id=="alice"){
        reading("C:\Users\LENOVO\Desktop\End_Term_1\BOOKS_IMAGES\AliceInWonderland.txt","Alice In Wonder Land");

    }
    if(ele.target.id=="lord")
    {
        reading("C:\Users\LENOVO\Desktop\End_Term_1\BOOKS_IMAGES\LOTR.txt","Lord of the Rings")
    }
    if(ele.target.id=="hyde")
    {
        reading("C:\Users\LENOVO\Desktop\End_Term_1\BOOKS_IMAGES\JekyllAndHyde.txt","Jekyll and hyde")
    }
}

function reading(url,title)
{
    var c=new XMLHttpRequest();
    c.open('GET',url);
    c.onreadystatechange=function(){
        var ti=c.responseText;
        document.getElementById("bhead").innerText=title;
        document.getElementById("btext").innerText=ti;
    }
    c.send();
}