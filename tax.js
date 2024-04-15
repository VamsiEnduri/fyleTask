$(document).ready(() => {
  $("#cal-tax").click(function () {
    var age = $("#age").val();
    var gross = $("#income").val();
    var extra = $("#extra").val();
    var deduction = $("#deductions").val();
    var incomeErr = $("#income-error");
    var extraErr = $("#extra-error");
    var ageErr = $("#age-error");
    var deductionErr = $("#deduction-error");
    var valid = true;

    if (age == "") {
      ageErr.show();
      valid = false;
    } else {
      ageErr.hide();
    }

    if (gross == "") {
      incomeErr.show();
      valid = false;
    } else {
      incomeErr.hide();
    }
    if (extra == "") {
      extraErr.show();
      valid = false;
    } else {
      extraErr.hide();
    }
    if (deduction == "") {
      deductionErr.show();
      valid = false;
    } else {
      deductionErr.hide();
    }
    if (!valid) return;

    var taxRate = taxPercentage(age);
    var totalIncome = parseInt(gross) + parseInt(extra);
    var taxableAmount = Math.max(0, totalIncome - parseInt(deduction) - 800000);
    var taxAmt = taxableAmount * taxRate;

    var resultModalBody = $("#result-modal .modal-body");
    resultModalBody.html(
      "Total Income: " +
        totalIncome.toFixed(2) +
        " Lakhs<br>Taxable Income: " +
        taxableAmount.toFixed(2) +
        " Lakhs<br>Tax Amount: " +
        taxAmt.toFixed(2) +
        " Lakhs"
    );

    $("#result-modal").modal("show");
  });

  function taxPercentage(age) {
    switch (age) {
      case "<40":
        return 0.3;
      case ">=40&<60":
        return 0.4;
      case ">=60":
        return 0.1;
      default:
        return 0;
    }
  }
});
