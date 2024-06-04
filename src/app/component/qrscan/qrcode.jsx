import React from "react";
import QRCode from "react-qr-code";

function Qrcode({size,value}) {
  return (
    <QRCode size={size} bgColor="white" fgColor="black" value={value} />
  );
}

export default Qrcode;
