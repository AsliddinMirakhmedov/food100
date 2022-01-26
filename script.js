const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kkal: 125,
        get sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kkal: 450,
        get sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO ',
        price: 31900,
        amount: 0,
        kkal: 625,
        get sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
}

const btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(el) {
    const parent = el.closest('.main__product'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        symbol = el.getAttribute('data-symbol'),
        parentId = parent.getAttribute('id')

    if (symbol == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (symbol == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].sum
    kkal.innerHTML = product[parentId].kkalSum
}

let son = document.querySelector(".header__timer-extra")
let k = 0
let bbb = document.querySelector(".header__timer")
let lvl = document.querySelector(".lvl")

function rekursiya() {
    if (k < 50) {
        son.innerHTML = k++;
        setTimeout(() => rekursiya(), 100);
    }
    else if (k < 60) {
        son.innerHTML = k++;
        setTimeout(() => rekursiya(), 110);
    }
    else if (k < 70) {
        son.innerHTML = k++;
        setTimeout(() => rekursiya(), 120);
    }
    else if (k < 80) {
        son.innerHTML = k++;
        setTimeout(() => rekursiya(), 130);
    }
    else if (k < 90) {
        son.innerHTML = k++;
        setTimeout(() => rekursiya(), 150);
    }
    else if (k < 99) {
        son.innerHTML = k++;
        setTimeout(() => rekursiya(), 200);
    }
    else {
        son.innerHTML = 100
        lvl.style.color = "white"
        son.style.color = "white"
        lvl.style.font.size = "30px"
        son.style.font.size = "30px"
    }
}

rekursiya()

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function rgb() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return `rgb(${r}, ${g}, ${b})`
}
setInterval(() => {
    bbb.style.color = rgb()
    bbb.style.transition = '1s'
}, 1000);

const main_product = document.querySelectorAll('.main__product-info'),
    images = document.querySelectorAll('.main__product-info img'),
    view = document.querySelector('.view'),
    close = document.querySelector('.view__close span'),
    image = document.querySelector('.view img')

for (let i = 0; i < main_product.length; i++) {
    main_product[i].addEventListener('dblclick', function () {
        click(this)
        view.classList.add("active")
        let src = images[i].getAttribute('src');
        image.setAttribute('src', src);
    })
}

function click(el) {
    const father = el.closest(".main__product-preview"),
        as = father.querySelector(".main__product-img")
}

close.addEventListener('click', function () {
    view.classList.remove("active")
})


