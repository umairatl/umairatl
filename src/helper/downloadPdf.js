import pdfLink from "../asset/file/resume.pdf";

export const downloadPDF = () => {
  var link = document.createElement("a");
  link.href = pdfLink;
  link.download = "Umairatul 2024 Resume.pdf";
  link.dispatchEvent(new MouseEvent("click"));
};
