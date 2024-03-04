function calculate(btn) {
    let no1 = parseInt(document.getElementById("no1").value);
    let no2 = parseInt(document.getElementById("no2").value);
    let outStr = "";

    if (btn.value == "+") {
      let total = no1 + no2;
      outStr = no1 + "+" + no2 + " = " + total;
    } else if (btn.value == "-") {
      let total = no1 - no2;
      outStr = no1 + "-" + no2 + " = " + total;
    } else if (btn.value == "*") {
      let total = no1 * no2;
      outStr = no1 + "*" + no2 + " = " + total;
    } else if (btn.value == "/") {
      let total = no1 / no2;
      outStr = no1 + "/" + no2 + " = " + total;
    } else {
      ("<h3> No Input </h3>");
    }

    alert(outStr);
    document.getElementById("resultDiv").innerHTML =
      "<h3>" + outStr + "</h3>";
}
function Convert(btn) {
    switch (btn.id) {
      case "cm2m":
        let cm = parseFloat(document.getElementById("cmToM").value);
        let m = cm / 100;
        document.getElementById("result").innerHTML =
          " <h1>" + cm + "cm --> m =  " + m + "m</h1>";
        break;
      case "m2cm":
        let m2 = parseFloat(document.getElementById("MtoCM").value);
        let cm2 = m2 * 100;
        document.getElementById("result").innerHTML =
          " <h1>" + m2 + "m --> cm =  " + cm2 + "cm</h1>";
        break;
      case "m2km":
        let m3 = parseFloat(document.getElementById("MtoKM").value);
        let km = m3 / 1000;
        document.getElementById("result").innerHTML =
          " <h1>" + m3 + "m --> km =  " + km + "m</h1>";
        break;
      case "km2m":
        let km2 = parseFloat(document.getElementById("KMtoM").value);
        let m4 = km2 * 1000;
        document.getElementById("result").innerHTML =
          " <h1>" + km2 + "km --> m =  " + m4 + "m</h1>";
        break;
      case "ctof":
        let c = parseFloat(document.getElementById("CtoF").value);
        let f = (c * 9) / 5 + 32;
        document.getElementById("result").innerHTML =
          " <h1>" + c + "c --> f =  " + f + "f</h1>";
        break;
  
      default:
        break;
    }
  }
  function calcBMI() {
    let height = parseFloat(document.getElementById("Height").value);
    let weight = parseFloat(document.getElementById("Weight").value);
    let strOut = "";

    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
      strOut = "Wasted";
      document.getElementById("Output").style.background = "blue";
    } else if (bmi > 18.5 && bmi < 25) {
      strOut = "Normal";
      document.getElementById("Output").style.background = "green";
    } else if (bmi >= 25 && bmi < 30) {
      strOut = "Overweight";
      document.getElementById("Output").style.background = "yellow";
      document.getElementById("Output").style.color = "black";
    } else if (bmi >= 30 && bmi < 40) {
      strOut = "Obese";
      document.getElementById("Output").style.background = "orange";
    } else {
      strOut = "Extremely Obese";
      document.getElementById("Output").style.background = "red";
    }

    document.getElementById("Output").innerHTML = "<h1>" + strOut + "</h1>";
    alert(bmi);
  }
  function Calculate() {
    let yInc = parseFloat(document.getElementById("YearlyIncome").value);

    let aftZakat = yInc * 0.025;

    alert(
      "Your total amount for Zakat Pendapatan is : RM" + aftZakat.toFixed(2)
    );
    document.getElementById("ZakatAmount").innerHTML =
      "Your total amount for Zakat Pendapatan is : RM" +
      aftZakat.toFixed(2);
  }

function reset(input1, input2)
{
  document.getElementById(input1).value = '';
  document.getElementById(input2).value = '';
}

function shows(hide1, hide2, hide3, show) {
  document.querySelector('.' + hide1).style.display = 'none';
  document.querySelector('.' + hide2).style.display = 'none';
  document.querySelector('.' + hide3).style.display = 'none';
  document.querySelector('.' + show).style.display = 'block';
  return false;
}
function scroll(target)
{
  document.getElementById(target).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

}