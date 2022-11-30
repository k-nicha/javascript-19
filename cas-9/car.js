// da se definira klasa avtomobil (Car) koja sto ke sodrzi podatoci (fields) za model , boja, godina na proizvodstvo, maks brzina i momentalna brzina
// treba da definirame metodi za ubrzuvanje i usporuvanje na voziloto. kako parametar metodite primat brojka
// za kolku voziloto treba da se ubrza ili za kolku da se uspori. Koga ke stigneme do maksimalnata brzina, treba da ispecatime deka sme ja dostignale i treba da go sprecime voziloto da ne se ubrzuva povekje. Koga ke stigneme do nula, treba da ispecatime deka voziloto stoi i ne treba povekje da se namaluva brzinata

class Car {
  model
  color
  year
  maxSpeed
  currentSpeed

  constructor (model, color, year, maxSpeed, currentSpeed) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
  }

  accelerate(speed) {
    // this method speeds the vehicle up
    if (this.currentSpeed + speed >= this.maxSpeed) {
      this.currentSpeed = this.maxSpeed;
      console.log('Maximal speed reached!')
      return
    }

    this.currentSpeed += speed;
  }

  decelerate(speed) {
    // this method slows the vehicle down
    if (this.currentSpeed - speed <= 0) {
      this.currentSpeed = 0;
      console.log('Vehicle has stopped')
      return
    }

    this.currentSpeed -= speed;
  }
}

const Audi = new Car('Audi', 'white', 2010, 200, 190)
const Toyota = new Car('Toyota', 'blue', 2000, 150, 10)

console.log(Audi, Toyota)

// setInterval(() => {
//   Toyota.accelerate(20)
//   console.log(Toyota.currentSpeed)
// }, 1000)

setInterval(() => {
  Audi.decelerate(20)
  console.log(Audi.currentSpeed)
}, 1000)

