$("#check").on("click", () => {
  if ($("input:checked").val() === "no") {
    $("#numOfGuests").attr("disabled", "disabled");
    $("#numOfGuests").val(0);
  } else {
    $("#numOfGuests").removeAttr("disabled");
  }
});
