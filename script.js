const imgs = document.querySelector('#image')

const img = document.querySelectorAll('#image img')

let index = 0;

function run(){
    index++

    if(index > img.length){
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * 500}px)`

    setTimeout(run, 2000)
}

run()