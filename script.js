function toggleImage() {
    const image = document.getElementById('toggleImage');
    setTimeout(() => {
        if (image.src.includes('filter-1.png')) {
            image.src = 'icons/filter-2.png';
        } else {
            image.src = 'icons/filter-1.png';
        }
    }, 200);
    const box = document.getElementById('toggleBox');
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
    } else {
        box.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const choiceButtons = document.querySelectorAll('.choice-btn');

    dropdownToggle.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    window.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownToggle.classList.remove('active');
        }
    });

    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            choiceButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            console.log(`Selected: ${this.dataset.choice}`);
        });
    });
});
