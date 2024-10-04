function attachEvent()
{
  let count=0;
  document.getElementById("click me").addEventListerer("click",function xyz()
                                   {
                                     console.log("Button Clicked",count);
                                   });
  attachEvent();
                                                         
