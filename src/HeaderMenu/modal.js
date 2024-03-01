let dialog = document.querySelector('dialog');
document.querySelector('#show').onClick = function() {
    dialog.showModal();
};

document.querySelector('#close').onClick = function() {
    dialog.close();
}


{/* <div className={classes.modalRegister}>
<dialog className={classes.headerMenuDialog}>
  <p>modal window</p>
    <button id="close">ok</button>
</dialog>
<button id="show">show</button>
</div> */}