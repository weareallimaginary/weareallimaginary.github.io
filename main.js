function fetchgelbooru() {
    fetch('https://gelbooru.com/index.php?page=dapi&s=post&q=index&tags=touhou&limit=1')
    .then(function(resp){
        return resp.text();
    })
    .then(function(data){
        console.log(data)
    })
    //wynik.innerHTML = "Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: " + Math.ceil(powierzchnia / 4)
}