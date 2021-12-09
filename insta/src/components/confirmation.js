import React, {useEffect} from 'react';

function Confirmation() {
    
    var token;
    useEffect(async()=>{
        
        var url_string = window.location.href;
    var url = url_string.lastIndexOf("=");
        token = url_string.substring(url+1);
        console.log(token);
    
    const res = await fetch("/confirmation" , {
        method: "POST",
        headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        token
    })
});
const data = await res.json();
if( data.message === 'The account has been verified. Please log in.' || data.message === 'This user has already been verified.'  ){
    window.alert(data.message);
    window.location ="/login";
}
else{
    window.alert(data.message);
    
}
});
    return (
        <div>
                   
        </div>
    )
}

export default Confirmation
