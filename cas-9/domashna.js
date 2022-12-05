class CoffeMaker {
  MIN_COFFEE = 7
  MIN_WATER = 100
  MIN_MILK = 10
  #total = 0

  cofee
  water
  milk

  constructor(cofee, water, milk) {
    this.cofee = cofee
    this.water = water
    this.milk = milk
  }


  makeCofee() {
    if (this.cofee < this.MIN_COFFEE) {
      console.log('Need more cofee')
      return
    }
    if (this.water < this.MIN_WATER) {
      console.log('Need more water')
      return
    }
    if (this.milk < this.MIN_MILK) {
      console.log('Need more milk')
      return
    }

    this.cofee -= this.MIN_COFFEE
    this.water -= this.MIN_WATER
    this.milk -= this.MIN_MILK
    this.#total++

    console.log("Cofee ready!")
  }

  getTotalMade() {
    return this.#total
  }

}


const Machine = new CoffeMaker(10, 1000, 1000)
Machine.makeCofee()
Machine.makeCofee()
Machine.makeCofee()
console.log(`Total number of cofees made: ${Machine.getTotalMade()}`)