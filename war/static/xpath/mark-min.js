var k=document.location.host;-1!=k.indexOf("newcrawler.com")&&(k="www.newcrawler.com",newcrawler_server_url="http://"+k+"/");var l=1,n=0,p=null,q=0;function u(a){return null==a||"null"==a||""==a||void 0==a||"undefined"==a||[]==a||void 0==jQuery(a).get(0).tagName}function v(a,b){jQuery(a).append(b)}function x(a,b,c,e,d,g){a.css({left:b,top:c,width:e,height:d});a.css({"z-index":99999,position:"absolute","background-color":"#facd93"});a.css(g,"1px dashed #000")}
function z(a,b,c,e,d){a.css({left:b,top:c,width:e,height:d});a.css({"z-index":99999,position:"absolute","background-color":"#000",opacity:.5})}function aa(a){var b="#F9AEAE #F1C194 #F3E13B #CEF57B #9CF994 #75D8BA #55C5F5 #A7A5E4 #D291FF #FF91D5 #EBD2D6".split(" "),c=b.length;a>=c&&(a=c-1);return b[a]}
function A(a,b,c,e){q+=1;var d="";b&&(d="<div class='ncx_selector' style='background-color:"+e+";'><a class='ncx-highlight-button ncx-accept-highlight' lang='"+c+"'></a><a class='ncx-highlight-button ncx-reject-highlight' lang='"+c+"'></a></div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_top_"+q+"' class='ncx_highlightTool'></div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_right_"+q+"' class='ncx_highlightTool'>"+d+"</div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_bottom_"+
q+"' class='ncx_highlightTool'></div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_left_"+q+"' class='ncx_highlightTool'></div>");b=jQuery("#ncx_traceHighlight_top_"+q+"");e=jQuery("#ncx_traceHighlight_right_"+q+"");var d=jQuery("#ncx_traceHighlight_bottom_"+q+""),g=jQuery("#ncx_traceHighlight_left_"+q+"");c=jQuery(a).offset();var f=jQuery(a).outerWidth();a=jQuery(a).outerHeight();var h=jQuery(document).width();f>h&&(f=h-8);x(b,c.left-2,c.top-2,f+4,2,"border-bottom");x(e,c.left+
f,c.top,2,a,"border-left");x(d,c.left-2,c.top+a,f+4,2,"border-top");x(g,c.left-2,c.top,2,a,"border-right")}
function ba(a){jQuery(".ncx_highlightTool").remove();var b=jQuery(a).offset().top,c=jQuery(a).offset().left,e=jQuery(a).outerWidth(),d=jQuery(a).outerHeight(),g=jQuery(document.body).outerHeight(),f=jQuery(document.body).outerWidth();e>f+8&&(e=f);v("#ncx_curlCover","<div id='ncx_highlightCover_top' class='ncx_highlightTool'></div>");v("#ncx_curlCover","<div id='ncx_highlightCover_right' class='ncx_highlightTool'></div>");v("#ncx_curlCover","<div id='ncx_highlightCover_bottom' class='ncx_highlightTool'></div>");
v("#ncx_curlCover","<div id='ncx_highlightCover_left' class='ncx_highlightTool'></div>");var h=jQuery("#ncx_highlightCover_top"),m=jQuery("#ncx_highlightCover_right"),y=jQuery("#ncx_highlightCover_bottom"),r=jQuery("#ncx_highlightCover_left");z(h,0,0,f+8,b-3);z(m,c+3+e,b-3,f-c-3-e+8,d+6);z(y,0,b+3+d,f+8,g-b-d+155);z(r,0,b-3,c-3,d+6);l=0;v("#ncx_curlCover","<div id='ncx_editHighlight_top' class='ncx_highlightTool'></div>");v("#ncx_curlCover","<div id='ncx_editHighlight_right' class='ncx_highlightTool'></div>");
v("#ncx_curlCover","<div id='ncx_editHighlight_bottom' class='ncx_highlightTool'></div>");v("#ncx_curlCover","<div id='ncx_editHighlight_left' class='ncx_highlightTool'></div>");b=jQuery("#ncx_editHighlight_top");c=jQuery("#ncx_editHighlight_right");d=jQuery("#ncx_editHighlight_bottom");g=jQuery("#ncx_editHighlight_left");f=jQuery(a).offset();x(b,f.left-2,f.top-2,e+4,2,"border-bottom");x(c,f.left+e,f.top,2,jQuery(a).outerHeight(),"border-left");x(d,f.left-2,f.top+jQuery(a).outerHeight(),e+4,2,"border-top");
x(g,f.left-2,f.top,2,jQuery(a).outerHeight(),"border-right");jQuery(".ncx_highlightTool").click(function(){B()})}function B(){jQuery(".ncx_highlightTool").remove();jQuery("#ncx_edit_tpl_tool").remove();l=1;jQuery("#ncx_curlCover").css({"pointer-events":"none"});0==C&&jQuery("#ncx_toolbar .ncx-datatypes .active .ncx-count").text("0")}
function D(a,b,c){if(C){E=null;for(var e=F.length,d=e-1;0<d;d--)if("a"==F[d]||0==F[d].indexOf("a:")){for(var g=[],e=d,f=0;f<=e;f++)g[f]=F[f];d=g.join("");d=d.replace(":nth-of-type(*)","");a=jQuery(document).find(d)[0];F=g.slice(0);E=g.slice(0);break}if(null==E){B();return}}jQuery(".ncx_highlightTool").remove();var h=null,m=0;if(!C&&1<G.length){h=G[1].a;d=1;for(e=G.length;d<e;d++)for(f=0,g=G[d].a.length;f<g;f++)-1!=G[d].a[f].indexOf(":nth-of-type(*)")&&(h=G[d].a);m=h.length}g=0;if(!c)for(d=0,e=E.length;d<
e;d++)if(-1!=E[d].indexOf(":nth-of-type(*)")){if(null!=h)if(m>d){if(-1==h[d].indexOf(":nth-of-type(*)")){E[d]=F[d];continue}}else{E[d]=F[d];continue}g++}c=!1;if(0<g)c=!0,jQuery("#ncx_edit_tpl_tool").remove(),b=l=1;else{ba(a);1===b?ca(a):da(a);d=E.join("");jQuery("#ncx_copy_xpath_text").text(d);e=jQuery(a).get(0);jQuery("select[name='ncx_attr']").empty();jQuery("select[name='ncx_attr']").append('<option value=""></option>');g=!1;d=0;h=e.attributes;for(m=h.length;d<m;d++)f=h[d].nodeName.toLowerCase(),
"class"!=f&&"style"!=f&&"target"!=f&&"width"!=f&&"height"!=f&&0!=f.indexOf("on")&&(jQuery("select[name='ncx_attr']").append('<option value="'+f+'">'+f+"</option>"),g=!0);g?(jQuery("input[name='ncx_selectType'][value='@ATTR']").attr("disabled",!1),jQuery("select[name='ncx_attr']").attr("disabled",!1)):(jQuery("input[name='ncx_selectType'][value='@ATTR']").attr("disabled",!0),jQuery("select[name='ncx_attr']").attr("disabled",!0));("img"==e.tagName.toLowerCase()||C)&&g?(jQuery("select[name='ncx_attr'] option:nth-child(2)").attr("selected",
!0),jQuery("input[name='ncx_selectType'][value='@ATTR']").attr("checked",!0),jQuery("select[name='ncx_attr']").change()):(jQuery("input[name='ncx_selectType'][value='innerHTML']").attr("checked",!0),d=e.innerHTML,jQuery("#ncx_content_preview").text(d))}g=0;h=[];d=m=0;for(e=E.length;d<e;d++)if(h[d]=E[d],-1!=h[d].indexOf(":nth-of-type(*)")){for(f=d+1;f<e;f++)h[f]=F[f];var f=h.join(""),f=f.replace(":nth-of-type(*)",""),f=jQuery(document).find(f),y=f.length,g=g+y,r=aa(m);m++;for(var w=0;w<y;w++){var t=
f[w];H(a,t)?A(t,!1,d,null):A(t,c,d,r)}h[d]=F[d]}0==g&&g++;C||jQuery("#ncx_toolbar .ncx-datatypes .active .ncx-count").text(g);jQuery(".ncx-accept-highlight").unbind("click").click(function(){for(var c=jQuery(this).attr("lang"),d=0,e=E.length;d<e;d++)-1!=E[d].indexOf(":nth-of-type(*)")&&c!=d&&(E[d]=F[d]);D(a,b,!0)});jQuery(".ncx-reject-highlight").unbind("click").click(function(){for(var c=jQuery(this).attr("lang"),d=0,e=E.length;d<e;d++)-1!=E[d].indexOf(":nth-of-type(*)")&&c==d&&(E[d]=F[d]);D(a,b,
!1)})}var I=0,J=[],K={},E=[],F=[];function L(a){J.push(a);a=jQuery(a).parent();var b=a.get(0);return u(b)?J:L(a)}function ca(a){K=a;jQuery("#ncx_edit_tpl_tool").remove();v("#ncx_cover-container",M("et_wrap"));N("ncx_et_state_10");O(a);ea();J=[];L(a);jQuery("#ncx_edit_tpl_tool").removeData("child");jQuery("#ncx_edit_tpl_tool").data("child",J)}
function da(a){K=a;O(a);a=jQuery(K).get(0).innerHTML;jQuery("#ncx_content_preview").text(a);jQuery("#ncx_copy_xpath_tips").text("");jQuery("#ncx_copy_xpath_text").css({"background-color":"white"});jQuery("#ncx_copy_csspath_tips").text("");jQuery("#ncx_copy_csspath_text").css({"background-color":"white"})}
function O(a){var b=jQuery(a).offset().top,c=jQuery(a).offset().left,e=jQuery(a).outerWidth(),d=jQuery(a).outerHeight(),g=jQuery(document.body).outerHeight();a=jQuery(document.body).outerWidth();65>g-b-d?(c=c+e-400,b+=1,0>=c&&(c=0),c>a&&(c=a-8),0>b&&(b=0),jQuery("#ncx_edit_tpl_tool").css({left:c+"px",top:b+"px"})):(c=c+e-397,b=b+d+3,0>=c&&(c=0),c>a&&(c=a-499),jQuery("#ncx_edit_tpl_tool").css({left:c+"px",top:b+"px"}));jQuery(window).scrollTop(b-300);jQuery(window).scrollLeft(c-200)}
function M(a){var b="";switch(a){case "et_wrap":b="<div class='ncx_edit_tpl_tool' style='position : absolute; z-index : 999990;' id='ncx_edit_tpl_tool'><ul id='ncx_et_bar' class='ncx_et_bar'><li class='ncx_col1'><div id='ncx_larger' class='ncx_larger'></div><div id='ncx_smaller' class='ncx_smaller'></div></li><li class='ncx_col4' id='ncx_et_state_4'><span class='ncx_bar_button_tilte'>Preview</span></li>";b+="</ul><div id='ncx_et_content' class='ncx_et_content'></div><div id='ncx_et_content_footer' class='ncx_et_content_footer'></div></div>";
break;case "et_conetent_inner_20":b="<div class='ncx_et_content_inner' id='ncx_copy_xpath_container' style='position:relative'><pre id='ncx_copy_xpath_text' class='ncx_xpath'>xpath express test!!!</pre>";b+="<div class='ncx_button'><button id='ncx_copy_xpath_button' class='ncx_xpath_copy'>Copy XPath</button><button class='ncx_et_cancel'></button></div>";b+="<div id='ncx_copy_xpath_tips' class='ncx_tips'></div>";b+="</div>";break;case "et_conetent_inner_30":b="<div class='ncx_et_content_inner' id='ncx_copy_csspath_container' style='position:relative'><pre id='ncx_copy_csspath_text' class='ncx_csspath'>csspath express test!!!</pre>";
b+="<div class='ncx_button'><button id='ncx_copy_csspath_button' class='ncx_csspath_copy'>Copy CssPath</button><button class='ncx_et_cancel'></button></div>";b+="<div id='ncx_copy_csspath_tips' class='ncx_tips'></div>";b+="</div>";break;case "et_conetent_inner_40":b="<div class='ncx_et_content_inner'><div><pre id='ncx_copy_xpath_text' class='ncx_xpath ncx_expression'>xpath express test!!!</pre></div>",b+="<div style='height: 22px;'>",b+="<div style='float:left;margin-left:0px;width:80px;'><input name='ncx_selectType' type='radio' value='outerHTML' style='vertical-align: middle;'><span>outerHTML</span></div>",
b+="<div style='float:left;margin-left:0px;width:80px;'><input name='ncx_selectType' type='radio' value='innerHTML' style='vertical-align: middle;' checked='checked' ><span>innerHTML</span></div>",b+="<div style='float:left;margin-left:0px;width:80px;'><input name='ncx_selectType' type='radio' value='innerTEXT' style='vertical-align: middle;'><span>innerTEXT</span></div>",b+="<div style='float:left;margin-left:0px;width:80px;'><input name='ncx_selectType' type='radio' value='@ATTR' style='vertical-align: middle;display:none;'><span><select name='ncx_attr'></select></span></div>",
b+="</div>",b+="<div><pre id='ncx_content_preview' class='ncx_content'></pre></div>",b+="<div class='ncx_button'>",b+="<button id='ncx_copy_xpath_button' class='ncx_xpath_copy'>Copy XPath</button>",b+="<button class='ncx_et_cancel'></button>",b+="<button class='ncx_et_create'></button>",b+="</div>",b+="<div class='ncx_tips'></div></div>"}return b}
function P(){var a=new ZeroClipboard(document.getElementById("ncx_copy_csspath_button"));a.on("ready",function(){a.on("copy",function(a){a.clipboardData.setData("text/plain",jQuery("#ncx_copy_csspath_text").text())});a.on("aftercopy",function(){jQuery(".ncx_tips").text("Copied CssPath.");jQuery(".ncx_expression").css({"background-color":"white"});jQuery("#ncx_copy_csspath_text").css({"background-color":"rgb(236, 248, 233)"})})});var b=new ZeroClipboard(document.getElementById("ncx_copy_xpath_button"));
b.on("ready",function(){b.on("copy",function(a){a.clipboardData.setData("text/plain",jQuery("#ncx_copy_xpath_text").text())});b.on("aftercopy",function(){jQuery(".ncx_tips").text("Copied XPath.");jQuery(".ncx_expression").css({"background-color":"white"});jQuery("#ncx_copy_xpath_text").css({"background-color":"rgb(236, 248, 233)"})})})}
function N(a){jQuery("#ncx_et_bar").removeClass("ncx_shape1");jQuery(".ncx_bar_button_tilte").removeClass("ncx_on");jQuery("#ncx_et_content").removeClass("ncx_shape1");jQuery("#ncx_et_content_footer").removeClass("ncx_shape1");jQuery("#ncx_et_content").empty();switch(a){case "ncx_et_state_10":jQuery("#ncx_et_bar").addClass("ncx_shape1");break;case "ncx_et_state_20":jQuery("#ncx_et_bar").addClass("ncx_shape1");jQuery(".ncx_col2 > .ncx_bar_button_tilte").addClass("ncx_on");jQuery("#ncx_et_content").addClass("ncx_shape1");
jQuery("#ncx_et_content_footer").addClass("ncx_shape1");a=M("et_conetent_inner_20");v("#ncx_et_content",a);a=Q(jQuery(K).get(0));jQuery("#ncx_copy_xpath_text").text(a);P();break;case "ncx_et_state_30":jQuery("#ncx_et_bar").addClass("ncx_shape1");jQuery(".ncx_col3 > .ncx_bar_button_tilte").addClass("ncx_on");jQuery("#ncx_et_content").addClass("ncx_shape1");jQuery("#ncx_et_content_footer").addClass("ncx_shape1");a=M("et_conetent_inner_30");v("#ncx_et_content",a);a=Q(jQuery(K).get(0));jQuery("#ncx_copy_csspath_text").text(a);
P();break;case "ncx_et_state_40":jQuery("#ncx_et_bar").addClass("ncx_shape1"),jQuery(".ncx_col4 > .ncx_bar_button_tilte").addClass("ncx_on"),jQuery("#ncx_et_content").addClass("ncx_shape1"),jQuery("#ncx_et_content_footer").addClass("ncx_shape1"),a=M("et_conetent_inner_40"),v("#ncx_et_content",a),jQuery(K).get(0),jQuery("select[name='ncx_attr']").unbind("change").change(function(){jQuery("input[name=ncx_selectType][value='@ATTR']").attr("checked",!0);if(""==this.value)jQuery("input[name=ncx_selectType][value='innerHTML']").attr("checked",
!0),jQuery("input[name=ncx_selectType][value='innerHTML']").click();else{var a=jQuery("select[name='ncx_attr']").val();jQuery("#ncx_content_preview").text("");var c=F.join(""),c=c.replace(":nth-of-type(*)",""),c=jQuery(document).find(c);0<c.length&&jQuery("#ncx_content_preview").text(c.attr(a))}}),jQuery("input[name=ncx_selectType]").unbind("click").click(function(){jQuery("select[name='ncx_attr']").val("");switch(jQuery(this).val()){case "outerHTML":var a=jQuery(K).get(0),a=a.outerHTML;jQuery("#ncx_content_preview").text(a);
break;case "innerHTML":a=jQuery(K).get(0);a=a.innerHTML;jQuery("#ncx_content_preview").text(a);break;case "innerTEXT":jQuery("#ncx_content_preview").text(jQuery(K).text())}}),P()}jQuery(".ncx_et_cancel").click(function(){B()});jQuery(".ncx_et_create").click(function(){var a=E.join(""),c=R,e=jQuery("input[name=ncx_selectType]:checked").val(),d=jQuery("select[name='ncx_attr']").val(),g="property";if(C)c=0,g="property"+c;else for(var f=c;500>f;f++){for(var g="property"+f,h=!1,m=1,y=G.length;m<y;m++)if(g==
G[m].name){h=!0;break}if(!h)break}S(null,c,g,a,E,e,C,d);B()})}
function S(a,b,c,e,d,g,f,h){f?G[0]={id:a,index:0,name:c,b:e,a:d,g:g,f:h}:(f=e.replace(":nth-of-type(*)",""),f=jQuery(document).find(f).length,jQuery("#ncx_toolbar .ncx-datatypes .active .ncx-count").text(f),f=jQuery("#ncx_toolbar .ncx-datatypes .active"),f.addClass("ncx-blue finished"),f.removeClass("ncx-yellow"),f.removeClass("active"),G.push({id:a,index:b,name:c,b:e,a:d,g:g,f:h}),R+=1,jQuery('<a lang="'+R+'" class="ncx-label ncx-data-dot ncx-yellow active"><span class="ncx-count">0</span><span class="ncx-delete-datatype" style="display: none;"></span></a>').insertBefore("#ncx_toolbar .ncx-datatypes .ncx-pagination"));jQuery("#ncx_toolbar .save").attr("disabled",
!1);fa()}function ga(){var a=jQuery("#ncx_edit_tpl_tool").data("child");I<a.length&&I++;a=a[I];u(a)||(Q(jQuery(a).get(0)),D(jQuery(a).get(0),2,!1))}function ha(){var a=jQuery("#ncx_edit_tpl_tool").data("child");0<I&&I--;a=a[I];u(a)||(Q(jQuery(a).get(0)),D(jQuery(a).get(0),2,!1))}function H(a,b){return void 0==a||void 0==b?!1:0==a.compareDocumentPosition(b)?!0:!1}
function Q(a){E=[];for(F=[];a&&void 0!==a.tagName;a=a.parentNode){var b=a.tagName;if(!b)break;b=b.toLowerCase();if("ncx_cover-container"!=a.id&&"ncx_message-box"!=a.id){var c=jQuery(a).parent().children(b).not("#ncx_message-box").not("#ncx_cover-container"),e=c.length,d="",g="";if(1<e)for(var f=0;f<e;f++){var h=c[f];if(H(a,h))""==d&&(d=":nth-of-type("+(f+1)+")"),g=":nth-of-type("+(f+1)+")";else if(":nth-of-type(*)"!=d)if(0<E.length){var m=F.join(""),h=jQuery(h).find(m).length;0<h&&0<h&&(d=":nth-of-type(*)")}else d=
":nth-of-type(*)"}""==d&&(g=d="");if("html"==b||"body"==b)g=d="";d=b+d;g=b+g;b=ia(g);c=!1;e="#";f="";a.className&&!/\s/.test(a.className)?(c=!0,e=".",f=a.className):a.id&&!/\s/.test(a.id)&&(c=!0,f=a.id);if(c){if(C)for(c=!1,h=0,m=E.length;h<m;h++)if("a"==E[h]||0==E[h].indexOf("a[")){c=!0;break}if(c&&(c=e+f,ia(c)==b&&ja(c,0)))if(1<G.length){if(c==G[1].a[0]){E.unshift(c);F.unshift(c);break}}else{E.unshift(c);F.unshift(c);break}}E.unshift(d);E.unshift(" > ");F.unshift(g);F.unshift(" > ")}}" > "==E[0]&&
(E=E.slice(1),F=F.slice(1));return E.join("")}function ja(a,b){for(var c=b,e=!1,d=E.slice(0),g=0,f=d.length;g<f;g++)-1!=d[g].indexOf(":nth-of-type(*)")&&(g>b||0==b?c==b?(d[g]=d[g].replace(":nth-of-type(*)",""),b=g):(e=!0,d[g]=F[g]):d[g]=F[g]);d.unshift(a);a=d.join("");var h=!0,m=null;jQuery(document).find(a).each(function(){if(null==m)m=ka(this,d);else{var a=ka(this,d);if(!H(a[0],m[0]))return h=!1}});return e?h&&ja(a,b):h}
function ka(a,b){for(var c=b.length/2-1,e=jQuery(a).parent(),d=0;d<c;d++)e=jQuery(e).parent();return e}function ia(a){for(var b=E.slice(0),c=0,e=b.length;c<e;c++)-1!=b[c].indexOf(":nth-of-type(*)")&&(b[c]=F[c]);b.unshift(a);a=b.join("");return jQuery(document).find(a).length}
function ea(){jQuery("#ncx_larger").mouseover(function(){jQuery(this).addClass("ncx_on")});jQuery("#ncx_smaller").mouseover(function(){jQuery(this).addClass("ncx_on")});jQuery("#ncx_larger").mouseout(function(){jQuery(this).removeClass("ncx_on")});jQuery("#ncx_smaller").mouseout(function(){jQuery(this).removeClass("ncx_on")});jQuery(".ncx_bar_button_tilte").mouseover(function(){jQuery(this).addClass("ncx_onhover")});jQuery(".ncx_bar_button_tilte").mouseout(function(){jQuery(this).removeClass("ncx_onhover")});
jQuery("#ncx_larger").click(function(){ga()});jQuery("#ncx_smaller").click(function(){ha()});jQuery("#ncx_et_state_2").click(function(){N("ncx_et_state_20")});jQuery("#ncx_et_state_3").click(function(){N("ncx_et_state_30")});jQuery("#ncx_et_state_4").click(function(){N("ncx_et_state_40")});jQuery("#ncx_et_state_4").trigger("click")}var R=1,C=!1,G=[],T=null,U=null,V=null,W=window.opener.i;
function la(){jQuery("a").unbind("click").click(function(){return!1});jQuery(document.body).contents().find("*").not(".ncx_curlCover").not(".ncx_highlightTool").each(function(){this.onclick=function(){return!1}});jQuery(document.body).contents().find("*").not(".ncx_curlCover").not(".ncx_highlightTool").mouseover(function(a){a=a||window.event;a=a.target||a.srcElement;if("html"!=jQuery(a).get(0).tagName.toLowerCase()&&"ncx_highlightTool"!=jQuery(a).attr("class")&&1==l){n=1;p=a;jQuery(".ncx_highlightTool").remove();
jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_top' class='ncx_highlightTool'></div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_right' class='ncx_highlightTool'></div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_bottom' class='ncx_highlightTool'></div>");jQuery("#ncx_curlCover").append("<div id='ncx_traceHighlight_left' class='ncx_highlightTool'></div>");var b=jQuery("#ncx_traceHighlight_top"),c=jQuery("#ncx_traceHighlight_right"),e=jQuery("#ncx_traceHighlight_bottom"),
d=jQuery("#ncx_traceHighlight_left"),g=jQuery(a).offset(),f=jQuery(a).outerWidth(),h=jQuery(document).width();f>h&&(f=h-8);x(b,g.left-2,g.top-2,f+4,2,"border-bottom");x(c,g.left+f,g.top,2,jQuery(a).outerHeight(),"border-left");x(e,g.left-2,g.top+jQuery(a).outerHeight(),f+4,2,"border-top");x(d,g.left-2,g.top,2,jQuery(a).outerHeight(),"border-right")}return!1});jQuery(document.body).contents().find("*").not(".ncx_curlCover").not(".ncx_highlightTool").each(function(){jQuery(this).click(function(){I=
0;if(1==n){var a=p;C=jQuery("#ncx_toolbar .ncx-datatypes .active").hasClass("ncx-pagination")?!0:!1;Q(a);jQuery("#ncx_curlCover").css({"pointer-events":"auto"});D(a,1,!1)}return!1})});jQuery(document).keydown(function(a){109==a.keyCode||83==a.keyCode?ha():107!=a.keyCode&&65!=a.keyCode||ga();return!1})}
function fa(){jQuery("#ncx_toolbar .ncx-datatypes .ncx-data-dot .ncx-delete-datatype").click(function(){var a=jQuery(this).parent().attr("lang"),b=[];b.push(G[0]);for(var c=1,e=G.length;c<e;c++)a!=G[c].index&&b.push(G[c]);G=b;jQuery(this).parent().remove();void 0==jQuery("#ncx_toolbar .ncx-datatypes .ncx-label.finished")&&jQuery("#ncx_toolbar .save").attr("disabled",!0)});jQuery("#ncx_toolbar .ncx-datatypes .ncx-label.finished").mouseout(function(){jQuery(this).find(".ncx-delete-datatype").hide();
jQuery(this).find(".ncx-delete-datatype").removeClass("visible")});jQuery("#ncx_toolbar .ncx-datatypes .ncx-data-dot").unbind("click").click(function(){if(jQuery(this).hasClass("ncx-pagination")){var a=jQuery(this).hasClass("active");a||(jQuery(this).addClass("active"),jQuery("#ncx_toolbar .ncx-datatypes .ncx-yellow").each(function(){jQuery(this).removeClass("active")}))}else jQuery(this).hasClass("ncx-label")&&!jQuery(this).hasClass("finished")&&(a=jQuery(this).hasClass("active"),a||(jQuery(this).addClass("active"),
jQuery("#ncx_toolbar .ncx-datatypes .ncx-pagination").removeClass("active")));var a=jQuery(this).attr("lang"),b;for(b in G)if(a==G[b].index){var c=G[b].b;G[b].a.slice(0);for(var c=c.replace(":nth-of-type(*)",""),c=jQuery(document).find(c),e=c.length,d=0;d<e;d++){var g=c[d];if(0==d){var f=jQuery(g).offset().top,g=jQuery(g).outerHeight(),h=0;65>jQuery(document.body).outerHeight()-f-g?(h=f+1,0>h&&(h=0)):h=f+g+3;jQuery(window).scrollTop(h-300)}}}});jQuery("#ncx_toolbar .ncx-datatypes .ncx-data-dot").unbind("mouseover");
jQuery("#ncx_toolbar .ncx-datatypes .ncx-data-dot").mouseover(function(){jQuery(this).hasClass("ncx-label")&&jQuery(this).hasClass("finished")&&(jQuery(this).find(".ncx-delete-datatype").show(),jQuery(this).find(".ncx-delete-datatype").addClass("visible"));B();var a=jQuery(this).attr("lang"),b;for(b in G)if(a==G[b].index){var c=G[b].b;G[b].a.slice(0);for(var c=c.replace(":nth-of-type(*)",""),c=jQuery(document).find(c),e=c.length,d=0;d<e;d++)A(c[d],!1,0,null)}})}
function X(a){for(var b=window.location.search.substring(1).split("&"),c=0;c<b.length;c++){var e=b[c].split("=");if(e[0]==a)return e[1]}return""}
function ma(){if(null!=T&&void 0!=T&&!isNaN(T)){var a=document.location.href,a=a.substring(a.indexOf("://")+3,a.indexOf("/member/")),b="http://"+a+"/static/xpath/v2/toolbar.html";jQuery.ajax({type:"GET",url:b,async:!0,cache:!0,success:function(c){jQuery("body").append(c);jQuery("#ncx_toolbar .save").attr("disabled",!0);G[0]={};var e=null;if(null!=W&&void 0!=W&&"undefined"!=W){b="http://"+a+"/member/rules/query?webCrawlerId="+T+"&siteId="+U+"&rulesVerId="+V;jQuery.ajax({type:"GET",dataType:"json",
url:b,async:!1,success:function(a){e=a}});for(var d in e)if(!isNaN(d)&&"xpath"==e[d].searchMode){c=e[d].id;for(var g=e[d].name,f=e[d].selectExpress,h=e[d].selectType,m=e[d].selectAttr,y=e[d].labelType,r=f.split("/"),w=[],t=1,na=r.length;t<na;t++)""!=r[t]&&(0===r[t].indexOf("*")?w.push("//"+r[t]):(w.push("/"),w.push(r[t])));"2"==y?S(c,0,g,f,w,h,!0,m):S(c,R,g,f,w,h,!1,m)}}jQuery("#ncx_toolbar .save").click(function(){var c=[],d;for(d in G){var e=G[d].id,f=G[d].index,g=G[d].name,h=G[d].b,m=G[d].g,t=
G[d].f;if(null!=g&&""!=g&&null!=h&&""!=h){var r="1";0==f&&(r="2");c.push({id:e,name:g,o:h,f:t,g:m,j:r})}}jQuery("#ncx_toolbar .ncx-toolbar-section.msg").html("<div class='loading'></div>");null!=c&&0<c.length&&(c=JSON.stringify(c),b="http://"+a+"/member/rules/save",jQuery.ajax({type:"POST",data:{s:T,h:U,c:V,m:c,url:newcrawler_fetch_url},url:b,async:!0,dataType:"json",success:function(a){var b=a.l;if("1"==a.code){if(null==W||void 0==W||"undefined"==W)null!=a.h&&""!=a.h&&(U=a.h),null!=a.c&&""!=a.c&&
(V=a.c);else try{W.i()}catch(c){console.log(c.description||c)}b="<span style='color:green;'>"+b+"</span>"}else b="<span style='color:red;'>"+b+"</span>";jQuery("#ncx_toolbar .ncx-toolbar-section.msg").html("<div>"+b+"</div>");setTimeout(function(){jQuery("#ncx_toolbar .ncx-toolbar-section.msg").html("")},3E3)}}))});fa()}})}}
function oa(){jQuery(document).find("*").unbind();jQuery(document.body).append('<div id="ncx_cover-container"><div id="ncx_curlCover" class="ncx_curlCover"  style="z-index : 99999; filter:Alpha(Opacity=100); -moz-opacity: 1; opacity: 1;  pointer-events:none; text-align: left; background : transparent;   "></div></div>');jQuery(document.body).css({cursor:"pointer"});jQuery(document.body).css({"margin-top":"48px"});document.title="New Crawler\u2122 "+document.title;T=X("webCrawlerId");U=X("siteId");
V=X("rulesVerId");var a=jQuery(document).height(),b=jQuery(document).width();600>b&&(b=980);jQuery("#ncx_curlCover").css({width:b,height:a+8});la();try{ma()}catch(c){}}function Y(a,b,c){var e=document.createElement("script");e.id=c;e.setAttribute("type","text/javascript");e.setAttribute("src",b);e.onload=e.onreadystatechange=a;document.getElementsByTagName("head")[0].appendChild(e)}
function pa(a){var b=newcrawler_server_url+"static/xpath/mark.css?v2.3",c=document.createElement("link");c.id="mark-css";c.setAttribute("rel","stylesheet");c.setAttribute("type","text/css");c.setAttribute("href",b);c.onload=c.onreadystatechange=a;document.getElementsByTagName("head")[0].appendChild(c)}
function Z(a,b,c){var e=document.getElementById("ncx_message-box");e?(e.innerHTML="",e.style.display="none"):(e=document.createElement("div"),e.innerHTML='<div id="ncx_message-box" style="background: #FFD76E; border: 1px solid #E1BA53; border-radius: 2px;padding: 5px 15px; font-size: 12px; font-color: #333; font-weight: bold; position: fixed!important; top: 10px; left: 50%; z-index: 2147483500; display: none;"></div>',document.body.appendChild(e.firstChild),e=document.getElementById("ncx_message-box"));
"show"==a?(e.innerHTML=b,e.style.display="block",e.style.marginLeft=-(e.clientWidth/2)+"px"):"fade"==a?(e.innerHTML=b,e.style.display="block",e.style.marginLeft=-(e.clientWidth/2)+"px",setTimeout(function(){Z("hide")},c)):"hide"==a&&(e.innerHTML="",e.style.display="none")}
function qa(){"undefined"==typeof jQuery?Y(function(){pa(function(){document.getElementById("ncx_message-box").remove();jQuery("#ncx_message-box").css({"background-color":"#BCDFB7"});Z("fade","Completed.",3E3);oa()});Y(function(){},newcrawler_server_url+"static/js/zeroclipboard-2.1.6/ZeroClipboard.min.js","mark-copy")},newcrawler_server_url+"static/js/jquery-1.7.min.js","mark-jquery"):(pa(function(){document.getElementById("ncx_message-box").remove();jQuery("#ncx_message-box").css({"background-color":"#BCDFB7"});
Z("fade","Completed.",3E3);oa()}),Y(function(){},newcrawler_server_url+"static/js/zeroclipboard-2.1.6/ZeroClipboard.min.js","mark-copy"))}Z("show","Loading...");"loaded"!=document.readyState&&"complete"!=document.readyState||qa();document.onload=document.onreadystatechange=function(){"loaded"!=document.readyState&&"complete"!=document.readyState||qa()};
