/**
 * Created by Administrator on 2016/4/9.
 */
console.log("Made by WangJiaQi in 2016-4-10 for Web Design Competition.");



function change1(){
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s2.style.display = "none";
    s1.style.display = "block";
    s3.style.display = "none";
    s4.style.display = "none";
    s5.style.display = "none";
    s6.style.display = "none";
    s7.style.display = "none";
}
function change2(){
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "none";
    s4.style.display = "none";
    s5.style.display = "none";
    s6.style.display = "none";
    s7.style.display = "none";
}
function change3(){
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s1.style.display = "none";
    s3.style.display = "block";
    s2.style.display = "none";
    s4.style.display = "none";
    s5.style.display = "none";
    s6.style.display = "none";
    s7.style.display = "none";
}
function change4() {
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s1.style.display = "none";
    s4.style.display = "block";
    s3.style.display = "none";
    s2.style.display = "none";
    s5.style.display = "none";
    s6.style.display = "none";
    s7.style.display = "none";
}
function change5(){
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s1.style.display = "none";
    s5.style.display = "block";
    s3.style.display = "none";
    s4.style.display = "none";
    s2.style.display = "none";
    s6.style.display = "none";
    s7.style.display = "none";
}
function change6(){
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s1.style.display = "none";
    s6.style.display = "block";
    s3.style.display = "none";
    s4.style.display = "none";
    s5.style.display = "none";
    s2.style.display = "none";
    s7.style.display = "none";
}
function change7(){
    var s1 = document.getElementById("st1");
    var s2 = document.getElementById("st2");
    var s3 = document.getElementById("st3");
    var s4 = document.getElementById("st4");
    var s5 = document.getElementById("st5");
    var s6 = document.getElementById("st6");
    var s7 = document.getElementById("st7");

    s1.style.display = "none";
    s7.style.display = "block";
    s3.style.display = "none";
    s4.style.display = "none";
    s5.style.display = "none";
    s6.style.display = "none";
    s2.style.display = "none";
}


function hover(){
    var li = document.getElementById("a1");
    li.style.color = "white";
}
function hout(){
    var li = document.getElementById("a1");
    li.style.color = "black";
}
function hover2(){
    var li = document.getElementById("a2");
    li.style.color = "white";
}
function hout2(){
    var li = document.getElementById("a2");
    li.style.color = "black";
}
function hover3(){
    var li = document.getElementById("a3");
    li.style.color = "white";
}
function hout3(){
    var li = document.getElementById("a3");
    li.style.color = "black";
}
function hover4(){
    var li = document.getElementById("a4");
    li.style.color = "white";
}
function hout4(){
    var li = document.getElementById("a4");
    li.style.color = "black";
}
function hover5(){
    var li = document.getElementById("a5");
    li.style.color = "white";
}
function hout5(){
    var li = document.getElementById("a5");
    li.style.color = "black";
}
function hover6(){
    var li = document.getElementById("a6");
    li.style.color = "white";
}
function hout6(){
    var li = document.getElementById("a6");
    li.style.color = "black";
}
function hover7(){
    var li = document.getElementById("a7");
    li.style.color = "white";
}
function hout7(){
    var li = document.getElementById("a7");
    li.style.color = "black";
}



function login(){
    var a = myform.user.value;
    var a1 = myform.user;
    var b = myform.password.value;
    var b1 = myform.password;
    var c = document.getElementById("photo");
    function display(){
        var a = document.getElementById("under_menu1");
        var b = document.getElementById("under_menu");
        a.style.display = "block";
        b.style.display = "none"
    }
    if(a=="123456" && b=="123456")
    {
        alert("hello world");
        c.src ="imgs/dms.png";
        a1.value = "";
        b1.value = "";
        display();
    }
    else
    {
        alert("input error");
        a1.value = "";
        b1.value = "";
    }
}
function logout(){
    function not_visible(){
    var a = document.getElementById("under_menu1");
    var b = document.getElementById("under_menu");
    a.style.display = "none";
    b.style.display = "block";
}
    var c = document.getElementById("photo");
    console.log(c.src);
    c.src ="imgs/Login.png";
    not_visible();
}

