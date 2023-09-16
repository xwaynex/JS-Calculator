(function() {
    const screen =  document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");
    const equal = document.querySelector(".btn-equal");
    const clear = document.querySelector(".btn-clear");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function(e) {
        
        if (screen.value === "") {
            screen.value = "";
        } else {
            screen.value = eval(screen.value);
        }
    })

    clear.addEventListener("click", function(e){
        screen.value = "";
    })

})();