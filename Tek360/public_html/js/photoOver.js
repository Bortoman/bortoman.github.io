/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function photoOver(event , s, d){
    if(window.innerWidth > 460){
    var a= document.createElement("div");
    a.setAttribute("class", "zoomer");
    var i = document.createElement("img");
    i.setAttribute("src", s);
    i.setAttribute("title", s);
    a.appendChild(i);
    var b =  document.createElement("div");
    b.setAttribute("class", "zoomer_desc");
    var p = document.createElement("p");
    p.innerHTML= d;
    b.appendChild(p);
    a.appendChild(b);
    
    $("#prod").append(a);
    $("body").css("overflow", "hidden");
    $(".close").css("display", "block");
}
}
 