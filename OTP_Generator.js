var oriOtp;
function otp(){
    var num1=Math.floor(Math.random()*10);
    var num2=Math.floor(Math.random()*10);
    var num3=Math.floor(Math.random()*10);
    var num4=Math.floor(Math.random()*10);
    // console.log(num1,num2,num3,num4);
    oriOtp=`${num1}${num2}${num3}${num4}`
    console.log(oriOtp)
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;
    document.getElementById("num3").innerHTML=num3;
    document.getElementById("num4").innerHTML=num4;
    document.getElementById("otpContainer").style.display="flex"
}
function closeWin(){
    document.getElementById("otpContainer").style.display="none"
}
function submitOtp(){
    var userGivenOTP=document.getElementById("inp").value
    if(userGivenOTP==oriOtp){
        document.getElementById("status").innerHTML="Access Granted..!"
        document.getElementById("status").style.color="lawngreen"
        document.getElementById("status").style.textShadow="2px 2px 2px black"
    }
    else{
        document.getElementById("status").innerHTML="Access Denied..!"
        document.getElementById("status").style.color="hotpink"
        document.getElementById("status").style.textShadow="2px 2px 2px black"
    }
}