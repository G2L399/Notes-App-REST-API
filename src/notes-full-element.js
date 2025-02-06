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
    }

    .submitButton button:hover {
      background-color: #252f25;
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
`
);

export const modalParent = createElement("div", {
  className: "modalParent",
  id: "viewModal",
  popover: "manual",
});
const modal = createElement("div", { className: "modal" });
const modalContent = createElement("div", { className: "modal-content" });
const header = createElement("header");
const viewTitle = createElement("h2", { id: "viewTitle" });
const closeViewButton = createElement(
  "button",
  { className: "close-view-button", popovertarget: "#viewModal" },
  "\u00D7"
);
const viewContent = createElement("p", { id: "viewContent" });

header.appendChild(viewTitle);
header.appendChild(closeViewButton);
modalContent.appendChild(header);
modalContent.appendChild(viewContent);
modal.appendChild(modalContent);
modalParent.appendChild(modal);
