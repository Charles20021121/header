var shop_icon_up1=document.querySelector(".shop-icon-up1");
var up1=document.querySelector(".up1");

var content_icon_up2=document.querySelector(".content-icon-up2");
var up2=document.querySelector(".up2");

var shop_options=document.querySelector(".shop-options");
var content_options=document.querySelector(".content-options");

var list_icon=document.querySelector(".bx-list-ul");
var container_header_list_vertical=document.querySelector(".container-header-list-vertical");

var header_x_icon=document.querySelector(".x-icon");

console.log(header_x_icon);

header_x_icon.addEventListener("click",function(){
    if( header_x_icon.classList="bx bx-x bx-flip-horizontal")
    {
        container_header_list_vertical.classList.replace("container-header-list-vertical-active","container-header-list-vertical");

    }
})

list_icon.addEventListener("click",function(){
    if(container_header_list_vertical.classList="container-header-list-vertical")
    {
        container_header_list_vertical.classList.replace("container-header-list-vertical","container-header-list-vertical-active");

    }
})

//当鼠标滑过header的shop，箭头会网上，shop option page会出现
shop_icon_up1.addEventListener("mouseover",function(){
    if(up1.classList=="bx bx-chevron-down up1")
    {
        up1.classList.replace("bx-chevron-down","bx-chevron-up");
        shop_options.classList.replace("shop-options","shop-options-active");

    }
})
//当鼠标离开header的shop，箭头会网下，shop option page会消失
shop_icon_up1.addEventListener("mouseout",function(){
    if(up1.classList=="bx bx-chevron-up up1")
    {
        up1.classList.replace("bx-chevron-up","bx-chevron-down");
        shop_options.classList.replace("shop-options-active","shop-options");
    }
})
//当鼠标滑过shop option page，shop option page会出现
shop_options.addEventListener("mouseover",function(){
    if(shop_options.classList=="shop-options")
    {
        shop_options.classList.replace("shop-options","shop-options-active");

    }
})
//当鼠标离开shop option page，shop option page会消失
shop_options.addEventListener("mouseout",function(){
    if(shop_options.classList=="shop-options-active")
    {
        shop_options.classList.replace("shop-options-active","shop-options");

    }
})
//当鼠标滑过header的content，箭头会网上,content option page会出现
content_icon_up2.addEventListener("mouseover",function(){
    if(up2.classList=="bx bx-chevron-down up2")
    {
        up2.classList.replace("bx-chevron-down","bx-chevron-up");
        content_options.classList.replace("content-options","content-options-active");
    }
})
//当鼠标离开header的content，箭头会网下,content option page会消失
content_icon_up2.addEventListener("mouseout",function(){
    if(up2.classList=="bx bx-chevron-up up2")
    {
        up2.classList.replace("bx-chevron-up","bx-chevron-down");
        content_options.classList.replace("content-options-active","content-options");
    }
})
//当鼠标滑过content option page，content option page会出现
content_options.addEventListener("mouseover",function(){
    if(content_options.classList=="content-options")
    {
        content_options.classList.replace("content-options","content-options-active");
    }
})
//当鼠标离开content option page，content option page会消失
content_options.addEventListener("mouseout",function(){
    if(content_options.classList=="content-options-active")
    {
        content_options.classList.replace("content-options-active","content-options");
    }
})

