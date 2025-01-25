let inputs = document.querySelectorAll(".phone");
inputs.forEach(function(input) {
  window.intlTelInput(input, {
    initialCountry: "bh", 
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js",
    onlyCountries: ["BH","SA","OM","AE","QA","KW"],
  });
});