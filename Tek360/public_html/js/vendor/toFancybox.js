/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function toFancybox(event){
$(".image").bind("click", function() {  	
	$.fancybox($('.image').get('src'));
        return false;
});
}