function copyBibtex(id) {
  const bibtexBlock = document.getElementById(id);
  const text = bibtexBlock.innerText;

  navigator.clipboard.writeText(text).then(() => {
    // alert("BibTeX copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}
