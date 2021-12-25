const links=document.querySelectorAll('.link');
const sections=document.querySelectorAll('section');

let activelink=0;

links.forEach(links, i) => {
    link.addEventListener('click', ()=>{
        if(activelink!=i)
        {links[activelink].classList.remove('active');
        links.classList.add('active');
        sections[activeLink].classList.remove('active');

        setTimeout(() => {
            activelink=i;
            sections[i].classList.add('active');
        }, 1000);
        }
    })
}