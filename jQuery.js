$(document).ready(function () {
  // Mobile Menu
  $('.bars').click(function () {
    $(this).next('.mobile_menu').slideToggle(500);
    // $(this).find('i').toggleClass('rotate');
  });

  const $slider = $('#ElectricBill');
  const $billText = $('#current_bill_display');

  // These are the elements where the output numbers will show
  const $annualSavings = $('#annual_savings');
  const $co2Offset = $('#co2_offset');
  const $paybackPeriod = $('#payback_period');
  const $taxCredit = $('#tax_credit');

  function doMath(monthlyBill) {
    // 1. Show the monthly bill on screen
    $billText.text('$' + Number(monthlyBill).toLocaleString());

    // 2. Calculate the savings
    const annualSavingsVal = Math.round(monthlyBill * 12 * 0.85); // 85% savings
    const co2OffsetVal = (annualSavingsVal * 0.00045).toFixed(1); // CO2 offset math
    const estSystemCost = monthlyBill * 100; // Estimated cost of solar system
    const taxCreditVal = Math.round(estSystemCost * 0.3); // 30% government tax credit
    const paybackVal =
      annualSavingsVal > 0 ? (estSystemCost / annualSavingsVal).toFixed(1) : 0;

    // 3. Put the calculated numbers on the web page
    $annualSavings.text('$' + annualSavingsVal.toLocaleString());
    $co2Offset.text(co2OffsetVal + ' Tons');
    $paybackPeriod.text(paybackVal + ' Years');
    $taxCredit.text('$' + taxCreditVal.toLocaleString());
  }

  // Run the code when the user moves the slider
  $slider.on('input change', function () {
    doMath($(this).val());
  });

  // Run the code once when the page loads
  doMath($slider.val());

  // FAQ
  $('.question').click(function () {
    $(this).next('.answer').slideToggle(500);
    $(this).find('i').toggleClass('rotate');
  });

  // Cookies
  const $cookieBanner = $('#cookie_banner_container');
  const $acceptBtn = $('#accept_cookies');
  const $declineBtn = $('#decline_cookies');

  // Check if the user already clicked "Accept" or "Decline" before
  const userChoice = localStorage.getItem('cookie_consent');

  if (userChoice === 'yes' || userChoice === 'no') {
    $cookieBanner.hide(); // Hide the banner if already decided
  } else {
    $cookieBanner.show(); // Show the banner if first time visiting
  }

  // When user clicks Accept
  $acceptBtn.on('click', function () {
    localStorage.setItem('cookie_consent', 'yes'); // Save "yes" in browser memory
    $cookieBanner.fadeOut(400); // Hide the banner smoothly
  });

  // When user clicks Decline
  $declineBtn.on('click', function () {
    localStorage.setItem('cookie_consent', 'no'); // Save "no" in browser memory
    $cookieBanner.fadeOut(400); // Hide the banner smoothly
  });
});
