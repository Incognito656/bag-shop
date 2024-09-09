var selectedProduct = "";

function openModal(productName) {
  selectedProduct = productName;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function submitOrder() {
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var payment = document.getElementById("payment").value;

  if (!phone || !address || !payment) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  var whatsappUrl =
    "https://api.whatsapp.com/send?phone=+996509204535&text=" +
    encodeURIComponent(
      "Товар: " +
        selectedProduct +
        "\nНомер телефона: " +
        phone +
        "\nАдрес: " +
        address +
        "\nСпособ оплаты: " +
        payment
    );

  window.open(whatsappUrl, "_blank");
  closeModal();
}

window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    closeModal();
  }
};