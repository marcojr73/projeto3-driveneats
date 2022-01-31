let arr = [null, null, null];
let finish;


//marcar o prato
let infoDish = null;
let infoPriceDish = null;
function marcarOpcao(Dish, Price){
// let dish;
let border = document.querySelector(".dishes .borda");
if (border !== null){
border.classList.remove("borda");
arr[0] = null;
}
dish = document.querySelector("." + Dish);
dish.classList.add("borda");
arr[0] = 1;
infoDish = Dish;
infoPriceDish = Price;
finalizarPedido();
}

// marcar a bebida
let infoDrink = null;
let infoPriceDrink = null;
function marcarBebida (Drink, Price){
    let border = document.querySelector(".drinks .borda");
    if (border!== null){
        border.classList.remove('borda');
        arr[1] = null;
    }
    let drink = document.querySelector("." + Drink);
    drink.classList.add("borda");
    arr[1] = 1;
    infoDrink = Drink;
    infoPriceDrink = Price
    finalizarPedido();
}

//marcar sobremesa
let infoDessert = null;
let infoPriceDessert = null;
function marcarSobremesa (Dessert, Price){
    let border = document.querySelector(".dessert .borda");
    if (border!== null){
        border.classList.remove('borda');
        arr[2] = null;
    }
    let dessert = document.querySelector("." + Dessert);
    dessert.classList.add("borda");
    arr[2] = 1;
    infoDessert = Dessert;
    infoPriceDessert = Price;
    finalizarPedido();
}
// exibir funcionalidade do botão confirmar
finish = 0;
function finalizarPedido(){
    for(let i = 0; i<3; i++){
        if(arr[i] == 1){
            finish = finish + 1;
        }
    }
    if(finish == 6){
        let close = document.querySelector(".button");
        close.classList.add("verde");
        close.innerHTML = "Fechar pedido";
    }
}

// finalizar o pedido
function pedirEndereco(){
    let name = prompt("Qual o seu nome?");
    let street = prompt("Qual o seu endereço?");

    confirmarPedido();
    iniciarConversa(name, street);
}
function confirmarPedido(){
    if(finish == 6){
        let screen = document.querySelector(".confirmar");
        screen.classList.add("finish");
    }
    let valueDish = document.querySelector(".value-dish");
    let pricedish = document.querySelector(".pricedish");

    let valueDrink = document.querySelector(".value-drink");
    let pricedrink = document.querySelector(".pricedrink");

    let valueDessert = document.querySelector(".value-dessert");
    let pricedessert = document.querySelector(".pricedessert");

    let pay = document.querySelector(".pay");

    
    
    valueDish.innerHTML = infoDish;
    pricedish.innerHTML = ("R$ " + parseFloat(infoPriceDish).toFixed(2).replace(".",","));;
    
    valueDrink.innerHTML = infoDrink;
    pricedrink.innerHTML = (" R$ " + (parseFloat(infoPriceDrink)).toFixed(2).replace(".",","));
    
    valueDessert.innerHTML =  infoDessert;
    pricedessert.innerHTML = (" R$ " + (parseFloat(infoPriceDessert)).toFixed(2).replace(".",","));
    
    pay.innerHTML = (" R$ " + (parseFloat(infoPriceDessert) + parseFloat(infoPriceDrink) + parseFloat(infoPriceDish)).toFixed(2).replace(".",","));

}

// enviar mensagem por whatsapp

function iniciarConversa(name, street){
    let zap = document.querySelector(".right");
    zap.innerHTML = "<a href='https://wa.me/553284640142?text=Ol%C3%A1,%20gostaria%20de%20fazer%20o%20pedido:%20-%20Prato:%20" + infoDish + "%20-Bebida:%20" + infoDrink + "%20-%20Sobremesa:%20" + infoDessert + "%20Total:%20R$%2027.70%20%20Nome:%20" + name + "%20Endere%C3%A7o:%20Rua." + street +".'>Tudo certo, pode pedir</a>";
}