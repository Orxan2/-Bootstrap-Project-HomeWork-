window.addEventListener('load',function(params) {

    // dropdown open-close 
    let menus = document.querySelectorAll('.dropdown-menu1');

    menus.forEach(menu => {
       
        let buton = menu.previousElementSibling;

        buton.addEventListener('click',dropdown);

            function dropdown(params) {      
 
                if (menu.classList.contains('d-none')) {
                    menu.classList.remove('d-none');
                }
                else{
                    menu.classList.add('d-none');                    
                }
               
                let list = menu.children[0].children;                
                for (let index = 0; index < list.length; index++) {                    
                    let element = list[index];             

                   let subButon = element.children[0];                   
                   subButon.addEventListener('click', dropdown);                  
                }               
            };
    });


    // bar-menu open-close
    let menubar = document.getElementById('menubar');
    let barMenu = menubar.parentElement.parentElement.nextElementSibling;
    menubar.addEventListener('click', OpenMenu);
    function OpenMenu(params) {
        if (barMenu.classList.contains('d-none')) {
            barMenu.classList.remove('d-none');
            barMenu.classList.add('d-block');
        }
        else {
            barMenu.classList.remove('d-block');
            barMenu.classList.add('d-none');
        }


    }


    // Close HEader 
    let closeButon = this.document.getElementById('close');
    let header = this.document.querySelector('.container-fluid');    
  
    closeButon.addEventListener('click',closeHeader);

    function closeHeader(params) {
        header.classList.add('d-none');
    }

});