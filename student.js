var c=1;

if(localStorage.length!==0)
{
    var keys=Object.keys(localStorage)
    // console.log(keys);
    keys.sort();
    // console.log(keys);
    // console.log(Number(keys[keys.length-1])+1);
    c=Number(keys[keys.length-1])+1
    // 5+1
    // console.log(c);
    // var t=Number(keys[keys.length-1])
    // c=t+1;
    
}

function clk()
{
    var name=document.getElementById("name")
    var roll=document.getElementById("roll")
    var no=document.getElementById("no")
    var date=document.getElementById("date")
    var cour=document.getElementById("cour")
    var val=name.value
    var val1=roll.value
    var val2=no.value
    var val3=date.value
    var val4=cour.value
    if(val!=="" && val1!=="" && val2!=="" && val3!=="" && val4!=="")
    {
       
        var obj={"name":val,"roll":val1,"contact":val2,"dob":val3,"course":val4}
        // console.log(obj);
        var d=JSON.stringify(obj);
        d.id=c;
        
        // console.log(d);
        localStorage.setItem(c,d);        
        name.value="";
        roll.value="";
        no.value="";
        date.value="";
        cour.value="";

        // const Name='name'
        // const newvalue=val
        // obj[Name]=newvalue
        // console.log(obj);

       
    }
    
      
    else{
        // if(val=="")
        // {
        //     alert("YOU FILL NAME FIRST")
        // }
        // if(val1=="")
        // {
        //     alert("YOU FILL ROLL NUMBER FIRST")
        // }
        // if(val2=="")
        // {
        //     alert("YOU FILL PHONE NUMBER FIRST")
        // }
        // if(val3=="")
        // {
        //     alert("YOU FILL DATE OF BIRTH FIRST")
        // }
        // if(val4=="")
        // {
        //     alert("YOU FILL COURSE DETAILS FIRST")
        // }
       
    }
    alert("submit successfully")
    c++;

}


function view()
{
    window.location.replace("studentred.html")

}
function up()
{
    alert("update successfully")
    window.location.replace("studentred.html")
}