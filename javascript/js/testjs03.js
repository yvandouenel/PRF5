// Fonction anynyme immédiate IFEES
(function () {
    let i = 1;
    function a() {
        let j = 2;
        console.log('j : ', j);
        b();
        function b() {
            {
                let k = 3;
                console.log("k : ", k);
                console.log('i : ', i);
            }
            let l = 4;
            console.log("b: ", b);

        }
    }
    a();
    console.log('i : ', i);
    console.log('a : ', a);

    /* 
    // Contexte global ou scope global 
    i
    a (fonction)
    // contexte ou scope de a()
    j 
    b (fonction)
    l
    // Contexte du bloc de code { } dans b() ligne 6 à 8
    k */


    
})();
console.log('j : ', j);
