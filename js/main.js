const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

// Select tab content item
function selectItem(e) {

    removeBorder();
    removeShow();

    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
}

// Remove border from previous tab item 
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Remove show class from each tab item
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));