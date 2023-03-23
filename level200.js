const transactionsDB = []; //array of transactions
const uniqueCodes = []; //array of unique codes

//code generator but not unique
function generateUniqueCode() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 9; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
  // Logic goes here

  let generatedCode = generateUniqueCode();
  let continueLoop = true;

  do {
    if (!uniqueCodes.includes(generatedCode)) {
      //if unique codes array doesn't include the new generated code its added to the array of uniqueCodes and loop is stopped

      uniqueCodes.push(generatedCode);
      // the newly generated code is pushed into uniqueCodes array to avoid unique code duplication for future transactions
      continueLoop = false;
    } else {
      generatedCode = generateUniqueCode();
    }
  } while (continueLoop);

  const transaction = {
    //new transaction with unique code is created
    transactionCode: generatedCode,
    storeID: storeId,
    transactionID: transactionId,
    transactionDate: new Date()
  };

  transactionsDB.push(transaction); // new transaction is added to transactionDB array

  return transaction.transactionCode; //returning the unique code of the newly created transaction
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  // Logic goes here

  let foundTransaction;

  transactionsDB.map((transaction) => {
    //looping through the transactionDB array to check if shortcode matched any transaction's transactionCode
    if (transaction.transactionCode === shortCode) {
      foundTransaction = transaction;
    }
  });

  if (!foundTransaction) {
    //if foundTransaction is falsy undefined is returned
    return undefined;
  }

  return {
    storeId: foundTransaction.storeID, // store id goes here,
    shopDate: foundTransaction.transactionDate, // the date the customer shopped,
    transactionId: foundTransaction.transactionID // transaction id goes here
  };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {
  var storeIds = [175, 42, 0, 9];
  var transactionIds = [9675, 23, 123, 7];

  storeIds.forEach(function (storeId) {
    transactionIds.forEach(function (transactionId) {
      var shortCode = generateShortCode(storeId, transactionId);
      var decodeResult = decodeShortCode(shortCode);
      $("#test-results").append(
        "<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>"
      );
      AddTestResult("Length <= 9", shortCode.length <= 9);
      AddTestResult("Is String", typeof shortCode === "string");
      AddTestResult("Is Today", IsToday(decodeResult.shopDate));
      AddTestResult("StoreId", storeId === decodeResult.storeId);
      AddTestResult("TransId", transactionId === decodeResult.transactionId);
    });
  });
}

function IsToday(inputDate) {
  // Get today's date
  var todaysDate = new Date();
  // call setHours to take the time out of the comparison
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
}

function AddTestResult(testName, testResult) {
  var div = $("#test-results").append(
    "<div class='" +
      (testResult ? "pass" : "fail") +
      "'><span class='tname'>- " +
      testName +
      "</span><span class='tresult'>" +
      testResult +
      "</span></div>"
  );
}
