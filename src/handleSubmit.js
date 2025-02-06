export function handleSubmitAdd() {
  const title = this.notesModal.inputTitle.value;
  const content = this.notesModal.inputContent.value;
  const note = { title, body: content };

  fetch("https://notes-api.dicoding.dev/v2/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  this.renderNotes();
  this.notesModal.hideModal();
  this.notesModal.form.reset();
}

export function handleSubmitEdit() {
  if (!this.editingId) return;

  const title = this.notesModal.inputTitle.value;
  const content = this.notesModal.inputContent.value;
  const note = { title, body: content };

  fetch(`https://notes-api.dicoding.dev/v2/notes/${this.editingId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  this.renderNotes();
  this.notesModal.hideModal();
  this.notesModal.form.reset();
  this.editingId = null;
}
