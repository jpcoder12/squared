import {react, useState} from 'react'

function Modal() {
// 1. create an x that allows you to click out of the game (on the topright of the modal)
// 2. create a div or label that houses the question for example 10 to the power of 5
// 3. create an input/label that allows the user to enter a value

    const [toggleModal, setToggleModal] = useState(false);

    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

}

export default Modal