function calculateAverage(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw('Wrong parameter types')
  }

  try {
    let average = 0;
    average = (a + b) / 2
    return average
  } catch (error) {
    consolw.warn(error)
  } finally {
    // ova se izvrsuva bez razlika dali imalo greska ili ne
    
  }
  
}
