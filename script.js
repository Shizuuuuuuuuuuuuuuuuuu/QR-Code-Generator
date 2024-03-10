function generateQRCode() {
    const inputText = document.getElementById('inputText').value;

    if (inputText !== '') {
        const qrcode = new QRCode(document.getElementById("qrcode"), {
            text: inputText,
            width: 128,
            height: 128
        });
    } else {
        alert('Please enter text or URL.');
    }
}
function undoQRCode() {
    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = ''; // Clear the content of the QR code div
}
