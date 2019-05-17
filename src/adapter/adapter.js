function adapter(){
  let timeId;
window.addEventListener('reset',function(){
  if(timeId)clearTimeout(timeId);
  timeId=setTimeout(function(){
   return refreshRem()
  },200)
})
window.addEventListener('pageshow',function(){
  return refreshRem()
})
  function refreshRem() {
    let clientWidth=document.documentElement.clientWidth
    let rem=clientWidth/10
    document.body.style.fontSize = '12px';
    document.documentElement.style.fontSize = rem + 'px';
}
}
export default adapter()
