import { createElement } from "./crud.js";

export const styles = createElement(
  "style",
  {},
  `
      * {
        scrollbar-width:none;
      }
      header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 1rem 2rem;
        background-color: black;
        color: white;
      }

      header h1 {
        font-size: 2rem;
        margin: 0;
      }

      .addNewNote {
        background-color: rgb(128, 128, 128);
        color: white;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;
        grid-row:span 2;
      }

      .addNewNote:hover {
        background-color: rgba(128, 128, 128, 75%);
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: scale(0.74);
        }

        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .note-card {
          background-color: gray;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          display: grid;
          grid-template-rows: auto 3fr auto auto auto;
          gap: 0.75rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 400px;
          cursor: pointer;
          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }
        }

        .note-card h3 {
            max-height:150px;
          font-size: 1.9rem;
          margin: 0;
          overflow-wrap: break-word;
          overflow: auto;
        }

        .note-card p {
          font-size: 1.5rem;
          color: rgb(210, 210, 210);
          margin: 0;
          overflow-wrap: break-word;
          overflow: auto;
        }

        .note-card small {
          font-size: 0.875rem;
          color: rgb(210, 210, 210);
        }

        .note-card button {
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-size: 0.875rem;
          transition: background-color 0.3s ease;
        }
        .button-container {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(5, auto);
          height: clamp(1rem, 2rem, 5rem);
        }
        .edit-button {
          background-color: rgb(69, 69, 69);
          &:hover {
            background-color: rgb(101, 101, 101);
          }
          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
        .delete-button {
          background-color: rgb(52, 52, 52);
          &:hover {
            background-color: rgb(69, 69, 69);
          }
        }
        .show-full-button {
          background-color: rgb(45, 45, 45);
          &:hover {
            background-color: rgb(52, 52, 52);
          }
        }
        main#notes {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }
        .renderBookStatus {
          display:grid;
          grid-template-columns: auto 1fr;
          align-items: center;
        }
        .renderBookStatus label {
          font-size: 1.5rem;
          place-self: start;
          margin: 0;
          color: rgb(210, 210, 210);
          cursor: pointer;
          &:hover {
            color: white;
            text-decoration: underline;
          }
        }
        .renderBookStatus input {
          display:none;
        }
    `
);

export const header = createElement("header");
const titleandarchived = createElement("div");
const title = createElement("h1", {}, "Notes App");
const archivedDIV = createElement("div", { className: "renderBookStatus" });
titleandarchived.appendChild(title);
titleandarchived.appendChild(archivedDIV);
const addNoteButton = createElement(
  "button",
  { className: "addNewNote", popovertarget: "#modal" },
  "Add Notes"
);
const checkbox = createElement("input", { type: "checkbox", id: "archive" });
const label = createElement(
  "label",
  { htmlFor: "archive", id: "archiveLabel" },
  "Show Archived Notes?"
);
archivedDIV.appendChild(checkbox);
archivedDIV.appendChild(label);
export const main = createElement("main", { id: "notes" });
export const slot = createElement("slot");
header.appendChild(title);
header.appendChild(addNoteButton);
header.appendChild(archivedDIV);
