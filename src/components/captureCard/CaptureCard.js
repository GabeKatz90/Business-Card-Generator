import React from "react";


import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "react-bootstrap/Button";

// Reference: https://www.youtube.com/watch?v=NnyZ_rgDOWg
function CaptureCard() {
  const exportPDF = () => {
  const input = document.getElementById("cardContent");
    html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    })
  }
   return (
    <Button 
      onClick={() => exportPDF()}
      variant="success">Print / Save PDF
    </Button>
  );
}

export default CaptureCard;