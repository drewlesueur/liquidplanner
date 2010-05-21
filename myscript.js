$(document).ready(function(){
  setInterval(function(){
  
 
 $('tr:not(.doctored)').filter(function(){
    
    return /^tig_[\d]+/.test($(this).attr("id"))
  }).addClass('doctored').find('.ti_name .ti_name').each(function(){
    var text = $(this).text();
    var id = $(this).parents("tr:eq(0)").attr("id").substr(4)
    $(this).text("#" + id + ":" + text)
  })
  
  
  
  $('a.ti_link:not(.doctored)').each(function(){
    var text = $(this).text();
    var href = $(this).attr('href');
    href = href.split("/");
    
    id = href[href.length -1]
    
    $(this).text('#' + id + ": " + text).addClass("doctored");
  })
  
  
}, 1000)



})
