function adapter(){
  let timeId;
window.addEventListener('reset',function(){
  if(timeId)clearTimeout(timeId);
  timeId=setTimeout(function(){
    refreshRem()
  },200)
})
window.addEventListener('pageshow',function(){
    refreshRem()
})
  function refreshRem() {
    let clientWidth=document.documentElement.clientWidth
    let rem=clientWidth/10
    document.body.style.fontSize = 12+'px';
    document.documentElement.style.fontSize = rem + 'px';
}
}
