function generateQRCode() {
    var url = document.getElementById('urlInput').value;
    var fillColor = document.getElementById('fillColorInput').value;
    var backColor = document.getElementById('backColorInput').value;

    var qr = new QRious({
        element: document.getElementById('qrCodeContainer'),
        value: url,
        size: 200,
        background: backColor,
        foreground: fillColor
    });

    // Add a download button
    var downloadBtn = document.createElement('a');
    downloadBtn.href = qr.toDataURL('image/png');
    downloadBtn.download = 'QRCode.png';
    downloadBtn.innerText = 'Download QR Code';
    document.getElementById('qrCodeContainer').appendChild(downloadBtn);
}
