/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    
        flag=false;
        function display_chisiamo(event){
            if(window.innerWidth > 768){
            document.getElementById("contatti").style.display = 'none';
            document.getElementById("prodotti").style.display = 'none';
            document.getElementById("chisiamo").style.display = 'inline-block';
           document.getElementById("link_content").style.display = 'block';
           document.getElementById("link_content").style.animationName = 'open';
           flag=true;
            }
        }
        function display_prodotti(event){
            if(window.innerWidth > 768){
            document.getElementById("contatti").style.display = 'none';
            document.getElementById("prodotti").style.display = 'inline-block';
            document.getElementById("chisiamo").style.display = 'none';
           document.getElementById("link_content").style.display = 'block';
           document.getElementById("link_content").style.animationName = 'open';
           flag=true;
            }
        }
        function display_contatti(event){
            if(window.innerWidth > 768){
            document.getElementById("contatti").style.display = 'inline-block';
            document.getElementById("prodotti").style.display = 'none';
            document.getElementById("chisiamo").style.display = 'none';
           document.getElementById("link_content").style.display = 'block';
           document.getElementById("link_content").style.animationName = 'open';
           flag=true;
            }
        }

        function display_revert(event){
            
            timeout=0;
            if(flag===true)
                timeout=450;
            setTimeout(function(){
                document.getElementById("link_content").style.display = 'none';
            }, timeout);
            document.getElementById("link_content").style.animationName = 'close';
            flag=false;
        }
        
       
        





