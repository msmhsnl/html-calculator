function reset() {
  $("#screen").html("");
  $("#hidden-value").html("");
}

function del() {
  let value = $("#screen").html();
  $("#screen").html(value.slice(0, -1));
}

function formatter(number) {
  let strip = parseFloat(number).toPrecision(15);
  let result = parseFloat(strip);
  return result;
}

function calculate() {
  let value = $("#screen").html();
  let hiddenValue = $("#hidden-value").html();
  let combination = hiddenValue + value;

  combination = combination.replace(/\x/g, "*");

  console.log("combination:", combination);

  if (
    (combination.includes("+") ||
      combination.includes("-") ||
      combination.includes("*") ||
      combination.includes("/")) &&
    value.length > 1 &&
    !(value.length == 2 && value[1] == ".")
  ) {
    let result = formatter(eval(combination)).toString();
    console.log("result:", result);
    $("#screen").html(result);
    $("#hidden-value").html("");
  } else {
    let result = eval(hiddenValue);
    $("#screen").html(result);
    $("#hidden-value").html("");
  }
}

function button(btnVal) {
  let value = $("#screen").html();

  if (btnVal != "." || !value.includes(".")) {
    $("#screen").html(value + btnVal);
  }
}

function operationButton(btnVal) {
  let value = $("#screen").html();
  let hiddenValue = $("#hidden-value").html();

  if (value != "x" && value != "/" && value != "+" && value != "-") {
    $("#hidden-value").html(hiddenValue + value);
    $("#screen").html(btnVal);
  } else {
    $("#screen").html(btnVal);
  }
}

function initButtons() {
  $(".button-selector").each(function () {
    $(this).click(function () {
      let btnVal = $(this).children("span").html();
      button(btnVal);
    });
  });

  $(".operation-button-selector").each(function () {
    $(this).click(function () {
      let btnVal = $(this).children("span").html();
      operationButton(btnVal);
    });
  });
}

$(document).ready(function () {
  initButtons();
});
