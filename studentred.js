var i=1;
var home =document.getElementById('home')
home.style.marginLeft="100px"

home.addEventListener('click',()=>
{
window.location.replace("student.html");
        // alert('hi')
})
// function get()
// {   
if(localStorage.length!==0)
{
    
          
    var keys=Object.keys(localStorage)
    keys.sort();
    // console.log(keys);
    // var c=Number(keys[keys.length-1])+1
    // console.log(c);
    
    
    
    for(j=0;j<keys.length;j++)
    {
        i=j+1
        // console.log(i);
        // console.log(keys);
       
        var parse=JSON.parse(localStorage.getItem(keys[j]));
        // console.log(parse);
        var head=document.createElement('h4')
        head.innerText='Student Profile'

        var cardcontent=document.createElement('div')
        cardcontent.className='card-subtitle';
        cardcontent.innerHTML=`<b>Name:</b>`+parse.name;
        cardcontent.id=i;
        
        var roll=document.createElement('div')
        roll.className='card-subtitle'
        roll.innerHTML=`<b>Roll no:</b>`+parse.roll;
        roll.id=i;

        
        var contact=document.createElement('div')
        contact.className='card-subtitle'
        contact.innerHTML=`<b>Contact:</b>`+parse.contact;
        contact.id=i;


        
        var dob=document.createElement('div')
        dob.className='card-subtitle'
        dob.innerHTML=`<b>Dob:</b>`+parse.dob;
        dob.id=i;

        
        var cour=document.createElement('div')
        cour.className='card-subtitle'
        cour.innerHTML=`<b>Course:</b>`+parse.course;
        cour.id=i;



        var update=document.createElement('button')
        update.innerText="update profile";
        update.style.width="120px"
        update.style.marginLeft="50px"
        update.style.marginBottom="30px"
        update.id=i

          

        var del=document.createElement('button')
        del.innerText="delete profile";
        del.style.width="120px"
        del.style.marginLeft="227px"
        del.style.marginTop="-60px"
        del.id=i



        
        // var pre=document.createElement('span')
        // pre.innerHTML=
        
        
        var card=document.createElement('div')
        card.className='card';
        card.appendChild(head)
        card.appendChild(cardcontent);
        card.appendChild(roll);
        card.appendChild(contact)
        card.appendChild(dob)
        card.appendChild(cour)
        card.appendChild(update)
        card.appendChild(del)
        card.id=i;

        
        
        var con=document.getElementById("contai")
        con.appendChild(card);
    //  i++;
        
        
        
      

    update.addEventListener("click",(event)=>
    {
        window.location.replace("student.html"); 
        // var name=document.getElementById("name")
        // var roll=document.getElementById("roll")
        // var no=document.getElementById("no")
        // var date=document.getElementById("date")
        // var cour=document.getElementById("cour")
        // var val=name.value
        // var val1=roll.value
        // var val2=no.value
        // var val3=date.value
        // var val4=cour.value
        // console.log(val);
        // console.log(val1);
        // var obj={"name":val,"roll":val1,"contact":val2,"dob":val3,"course":val4}
        // // console.log(obj);
        // var d=JSON.stringify(obj);
        var btnid=event.target.id;
        console.log(btnid);
        var get=JSON.parse(localStorage.getItem(btnid));
        // console.log(get.name);
        // console.log(get.roll);

        // var name=document.getElementById("name")
        // var roll=document.getElementById("roll")
        // var no=document.getElementById("no")
        // var date=document.getElementById("date")
        // var cour=document.getElementById("cour")
        // var val=name.value
        // var val1=roll.value
        // var val2=no.value
        // var val3=date.value
        // var val4=cour.value
        // val=parse.name



        // var items={

        //      'name':val,
        //      'roll':parse.roll,
        //      'no'  :parse.no,
        //      'date':parse.date,
        //      'cour':parse.cour
        // }
        
        // // 
        // localStorage.setItem(btnid,JSON.stringify(items))
        
        
       

        

    })
    del.addEventListener('click',(event)=>
    {
        // var s= event.target.id;
        // console.log(s);
        // var f=document.getElementById(s)
        // // console.log(f);
        // card.remove(f);
        // localStorage.removeItem(s);
        var m=event.target.id;
        // console.log(m);
        var s=document.getElementById(m)
        s.remove()
        // console.log(s);
        localStorage.removeItem(m)

        
    })
    i++;
    
   



    }
   }
// }