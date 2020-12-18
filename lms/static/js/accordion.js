var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  acc[i].onkeypress = function(e){
    if(e.which === 13){
      this.click();
    }
  }
}

/* this is to detect if focus state is by tab key */
$(window).keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9 && $('.accordion:focus').length) {
        for (i = 0; i < acc.length; i++) {
            acc[i].classList.remove('tabbed');
        }
        e.target.classList.add('tabbed');
    }
});
