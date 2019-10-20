window.addEventListener("scroll",event => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight-
  document.documentElement.clientHeight;
  let progress = 100*scrollTop/scrollHeight;
  document.querySelector(".progress").style.width = progress+"%";
})


function stickyscroll(){
  const controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
    duration:'110%',
   triggerElement:'.aboutme',
    triggerHook:0
  })
  .setPin('.aboutme')
  .addTo(controller);
}
stickyscroll();


document.getElementById('switchmode').onclick = function () {
  var dm = document.getElementById('darkmode');
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');
  var bar3 = document.getElementById('bar3');
  var className = ' ' + switchmode.className + ' ';
  var emptyclassName = ' ' + darkmode.className + ' ';
  var bar1class = ' ' + bar1.className + ' ';
  var bar2class = ' ' + bar2.className + ' ';
  var bar3class = ' ' + bar3.className + ' ';
  if ( ~className.indexOf(' active ') ) {
      this.className = className.replace(' active ', ' ');
      dm.className = emptyclassName.replace(' active ', ' ');
      bar1.className = bar1class.replace(' active ', ' ');
      bar2.className = bar2class.replace(' active ', ' ');
      bar3.className = bar3class.replace(' active ', ' ');
      editname.className = editnameclass.replace(' active ', ' ');
     
  } else {
      this.className += ' active';
      dm.className += ' active';
      bar1.className += ' active';
      bar2.className += ' active';
      bar3.className += ' active';
      editname.className += ' active';
      
  }              
}

document.getElementById('name').onclick = function(){
  this.contentEditable=true;
  this.className='active';
}

var index,table=document.getElementById('table');
for(var i = 0; i < table.rows.length; i++)
{
  table.rows[i].cells[2].onclick = function() {
        index = this.parentElement.rowIndex;
        table.deleteRow(index);
  }
};
function addrow()
{
    var table = document.getElementById('table'),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        add = document.getElementById('add').value;
    cell1.innerHTML = '';
    cell2.innerHTML = add;
    cell3.innerHTML = '<i style="color:#ff7979; font-size:20px; cursor: pointer;" class="fa fa-times"></i>';
    var index,table=document.getElementById('table');
for(var i = 0; i < table.rows.length; i++)
{
  table.rows[i].cells[2].onclick = function() {
        index = this.parentElement.rowIndex;
        table.deleteRow(index);
  }
};

}                
