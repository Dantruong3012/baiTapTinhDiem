function kieu() {
  let math1 = Number(document.getElementById("math1").value);
  let math2 = Number(document.getElementById("math2").value);
  let math3 = Number(document.getElementById("math3").value);
  let average = (math1 + math2 + math3) / 3;
  document.getElementById("a").innerHTML = "Average:" + average.toFixed;
  return average;
}

function dan() {
  let bi1 = Number(document.getElementById("bi1").value);
  let bi2 = Number(document.getElementById("bi2").value);
  let bi3 = Number(document.getElementById("bi3").value);
  let average = (bi1 + bi2 + bi3) / 3;
  document.getElementById("b").innerHTML = "Average:" + average;
  return average;
}

function truong() {
  let che1 = Number(document.getElementById("che1").value);
  let che2 = Number(document.getElementById("che2").value);
  let che3 = Number(document.getElementById("che3").value);
  let average = (che1 + che2 + che3) / 3;
  document.getElementById("c").innerHTML = "Average:" + average;
  return average;
}

function o() {
  let l = kieu();
  let o = dan();
  let p = truong();
  let totalAverage = l + o + p;
  document.getElementById("v").innerHTML = "Total average:" + totalAverage;
}
