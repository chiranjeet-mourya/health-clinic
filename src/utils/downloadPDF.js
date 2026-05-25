import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const downloadTablePDF = ({ title, fileName, columns, rows }) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(title, 14, 18);

  autoTable(doc, {
    startY: 28,
    head: [columns],
    body: rows,
  });

  doc.save(fileName);
};