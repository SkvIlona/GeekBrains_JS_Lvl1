
class Order_item {
    name_product = ''
    price_product = ''
    quantity_product = ''

    constructor (name_product, price_product, quantity_product) {
        this.name_product = name_product
        this.price_product = price_product
        this.quantity_product = quantity_product
    }

    get name() {
        return `${this.name_product}`
    }

    get price() {
        return `${this.price_product}`
    }
}

class Order {
    order_list = new Array()

    constructor (order_item) {
        this.order_list.push(order_item)
    }

    add(order_item) {
        this.order_list.push(order_item)
    }


    total_price() {
        let total_price = this.order_list.reduce(function (price, current) {
            return price + current.price_product*current.quantity_product;
        },0)    
      return total_price  
    }
}


let Order1 = new Order(new Order_item('Юбка','3650','2')) 
Order1.add(new Order_item('Брюки','7200','3'))
Order1.add(new Order_item('Блуза','1400','1'))
let s = Order1.total_price()
console.log(s)

const order = document.querySelector('.order')

for (let i = 0; i <= 3; i++) {

    let order_item_name = document.createElement('div')
    order_item_name.className = "name-product"
    order_item_name.innerHTML = Order1.order_list[i].name
    order.appendChild(order_item_name)

    let order_item_price = document.createElement('div')
    order_item_price.className = "price-product"
    order_item_price.innerHTML = Order1.order_list[i].price
    order.appendChild(order_item_price)
}

/*let a = Order1[0].Order_item.name_product*/
