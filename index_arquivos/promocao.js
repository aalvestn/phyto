$(document).ready(function(){cep=$(".campo_cep"),cep.on("keyup",function(){obj=$(this),v=obj.val(),v=v.replace(/\D/g,""),v=v.replace(/^(\d{5})(\d)/,"$1-$2"),obj.val(v)}),$(".campo_cep").on("keyup",function(e){console.log($(".campo_cep").val().length);var a=$(this);if(9==e.keyCode||9==e.which){if(!a.val())return!1;$(".calculo_cep").css("visibility","hidden"),$(".CEPLoader").css("display","block"),$(".campo_cep").val(a.val()),$("#consultar_frete").addClass("loader"),$.ajax({url:"/dne/getByCep",data:{cep:a.val()},method:"POST",dataType:"json"}).done(function(e){$("#box_geral_cep").addClass("active"),$("#ret_cep_box").addClass("active"),$("#mostra_cep").text($(".campo_cep").val()),$("#prazo_entrega").html(e.prazo.toLowerCase())}),monster.set("cep_produtos",a.val())}9==cep.val().length&&(setTimeout(function(){$("#consultar_frete").addClass("loader")},500),setTimeout(function(){if(cep.trigger("blur"),!a.val())return!1;$(".calculo_cep").css("visibility","hidden"),$(".CEPLoader").css("display","block"),$(".campo_cep").val(a.val()),$.ajax({url:"/dne/getByCep",data:{cep:a.val()},method:"POST",dataType:"json"}).done(function(e){$("#box_geral_cep").addClass("active"),$("#ret_cep_box").addClass("active"),$("#mostra_cep").text($(".campo_cep").val()),$("#prazo_entrega").html(e.prazo.toLowerCase())}),monster.set("cep_produtos",a.val())},1e3))}),$(".form-cep").on("submit",function(){9!=$(".campo_cep").val().length?$(".msg_erro_cep").addClass("active"):$(".msg_erro_cep").removeClass("active");var e=$(this).find(".campo_cep");return!!e.val()&&($("#consultar_frete").addClass("loader"),$(".campo_cep").val(e.val()),$.ajax({url:"/dne/getByCep",data:{cep:e.val()},method:"POST",dataType:"json"}).done(function(e){setTimeout(function(){$("#box_geral_cep").addClass("active"),$("#ret_cep_box").addClass("active"),$("#mostra_cep").text($(".campo_cep").val())},1500),$("#prazo_entrega").html(e.prazo.toLowerCase())}),monster.set("cep_produtos",e.val()),!1)}),$("#consultar_frete_novamente").on("click",function(){$(".campo_cep").val(""),$(".campo_cep").focus(),$("#consultar_frete").removeClass("loader"),$("#ret_cep_box").removeClass("active"),$("#box_geral_cep").removeClass("active"),$("#mostra_cep").text("")}),window.location.href.indexOf("slimcaps")>-1&&"brad"==monster.get("utm_term")&&"google"==monster.get("utm_source")&&"cpc"==monster.get("utm_medium")&&($(".numero_televendas").html("TELEVENDAS: 4020-7870"),$(".numero_televendas2").html("4020-7870")),$("#BoxBoleto").on("click",function(){$("#form-checkout").valid()&&$("#space_fundo").addClass("boleto")}),$("#BoxCartao").on("click",function(){$("#space_fundo").removeClass("boleto")}),$(".active_count").length&&$("body").addClass("active"),$("#close_modal_frete_calcula").on("click",function(){$(".modal_calcula_frete").removeClass("active")}),$("#bolinha_frete").hover(function(){$(".modal_calcula_frete").addClass("active"),$("#cep_valor").focus()}),setTimeout(function(){$(".modal_calcula_frete").addClass("active"),$("#cep_valor").focus()},3500)});
