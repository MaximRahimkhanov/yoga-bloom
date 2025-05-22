(() => {
  const getModalData = (event) => {
    const target = event.target;

    if (target.hasAttribute("data-modal-open-low-price")) {
      return {
        title: "One Session",
        price: "$10",
      };
    } else if (target.hasAttribute("data-modal-open-medium-price")) {
      return {
        title: "8 Sessions Package",
        price: "$65",
      };
    } else if (target.hasAttribute("data-modal-open-high-price")) {
      return {
        title: "12 Sessions Package",
        price: "$80",
      };
    }
  }

  const refs = {
    openModalBtnLowPrice: document.querySelector("[data-modal-open-low-price]"),
    openModalBtnMediumPrice: document.querySelector("[data-modal-open-medium-price]"),
    openModalBtnHighPrice: document.querySelector("[data-modal-open-high-price]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalTitle: document.querySelector("[data-modal-title]"),
    modalPrice: document.querySelector("[data-modal-price]"),
    modalBody: document.querySelector("[data-modal-body]"),
  };

  refs.modalBody.addEventListener("click", (event) => { 
    event.stopPropagation();
  });

  const toggleModal = (event) => {
    const { title, price } = getModalData(event) || {};
    
    refs.modalTitle.textContent = title;
    refs.modalPrice.textContent = price;

      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
  }

  const closeModal = () => {
      refs.modal.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
  }
  
      refs.openModalBtnLowPrice.addEventListener("click", toggleModal);
      refs.openModalBtnMediumPrice.addEventListener("click", toggleModal);
      refs.openModalBtnHighPrice.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", closeModal);
      refs.modal.addEventListener("click", closeModal);
  })();