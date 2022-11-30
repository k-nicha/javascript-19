// trba da se kreiraat dve klasi - 
// edna za shopping cart koja sto ke sodrzi niza od produkti i maksimalen budzet (brojka)
// edna za produkt koja sto ke sodrzi ime na produktot i negova cena

// programata treba da ovozmozi kreiranje na produkti i nivno dodavanje vo shopping cart.
// sekoj pat koga ke se dodade produkt vo shopping cart treba da se presmeta dali imame dovolno pari za da kupime se sto e dodadeno vo shopping cartot.
// isto taka treba da imame i mehanizam za brisenje na produkt od shopping cartot. produkt se brise spored negovoto ime

class Product {
  name
  price

  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class ShoppingCart {
  #products
  #budget

  constructor(products, budget) {
    this.#products = products
    this.#budget = budget
  }

  addItem(newProduct) {
    const newList = [...this.#products, newProduct]
    const totalPrice = newList.reduce((sum, currentProduct) => { return sum += currentProduct.price }, 0)
    if (totalPrice > this.#budget) {
      console.log('Budget has been reached, please remove some items in order to add more')
      return
    }
    this.#products = newList
  }

  getItems() {
    return this.#products
  }

  removeItem(productName) {
    this.#products = this.#products.filter(product => product.name !== productName)
  }
}

const Cart = new ShoppingCart([], 1000)


const Banana = new Product('Banana', 10)
const Orange = new Product('Orange', 20)
const Milk = new Product('Milk', 40)
const Bread = new Product('Bread', 20)
const Wine = new Product('Wine', 1000)

Cart.addItem(Banana)
Cart.addItem(Orange)
Cart.addItem(Milk)
Cart.addItem(Bread)

Cart.removeItem('Bread')
Cart.addItem(Wine)

console.log(Cart.getItems())
