function test(t) {
    if (t === undefined) {
      return "Undefined value!";
    }
    return t;
  }
  
  let x = null;
  console.log(test(x));