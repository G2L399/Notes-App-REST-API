import { createElement } from "./crud.js";

export const styles = createElement(
  "style",
  {},
  `
    .modalParent {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal {
      height: 100%;
      display: grid;
      place-items: center;
    }
    .modal-content {
      background-color: rgb(107, 107, 107);
      border-radius: 8px;
      width: 450px;
      padding: 1.5rem;
      animation: fadeInUp 0.25s cubic-bezier(0, 1, 0, 1);
    }

    .modal-content header {
      background-color: rgb(15, 15, 15);
      display: grid;
      border-radius: 8px;
      grid-template-columns: 1fr auto;
      align-items: center;
      margin-bottom: 1.5rem;
      padding: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .modal-content header h2 {
      color:white;
      font-size: 1.75rem;
      margin: 0;
    }

    .modal-content header button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      font-size: 3rem;
      color: red;
    }

    .modal-content header button:hover {
      color: rgba(255, 0, 0, 0.5);
    }

    #viewTitle {
      color: white;
      overflow: auto;
    }
    #viewContent {
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1.5rem;
      color: white;
      white-space: pre-wrap;
      word-wrap: break-word;
      max-height: 350px;
    }
    form {
      display: grid;
      gap: 1rem;
    }

    .form-group {
      display: grid;
      gap: 0.5rem;
    }

    .form-group label {
      font-size: 1rem;
      color: white;
    }

    .form-group input,
    .form-group textarea {
      background-color: rgb(101, 101, 101);
      padding: 0.75rem;
      border: 1px solid rgb(69, 69, 69);
      border-radius: 4px;
      font-size: 1rem;
      color: aliceblue;
    }

    .submitButton button {
      background-color: #101610;
      color: white;
      border: none;
      border-radius: 4px;
      width: 100%;
      padding: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      &:hover {
        background-color: #252f25;
      }
    }
    @keyframes fadeInUp {
        from {
           opacity: 0;
           transform: scale(0.75);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`
);

export const modalParent = createElement("div", {
  className: "modalParent",
  id: "modal",
  popover: "manual",
});
const modal = createElement("div", { className: "modal" });
const modalContent = createElement("div", { className: "modal-content" });
const header = createElement("header");
const modalTitle = createElement("h2", { id: "modalTitle" });
const closeButton = createElement(
  "button",
  { className: "close-button", popovertarget: "#modal" },
  "\u00D7"
);
const form = createElement("form", {
  id: "noteForm",
  className: "form-group",
});
const titleLabel = createElement("label", { htmlFor: "title" }, "Title");
const title = createElement("input", {
  type: "text",
  id: "title",
  minlength: "4",
  name: "title",
  required: true,
});
const contentLabel = createElement("label", { htmlFor: "content" }, "Content");
const content = createElement("textarea", {
  id: "content",
  name: "content",
  required: true,
});
const submitButton = createElement("div", { className: "submitButton" });
const saveButton = createElement("button", { type: "submit" }, "Save");

header.appendChild(modalTitle);
header.appendChild(closeButton);
modalContent.appendChild(header);
modalContent.appendChild(form);
form.appendChild(titleLabel);
form.appendChild(title);
form.appendChild(contentLabel);
form.appendChild(content);
form.appendChild(submitButton);
submitButton.appendChild(saveButton);
modal.appendChild(modalContent);
modalParent.appendChild(modal);
