document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector('.faq-accordion');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-dropdown_header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-dropdown_body');
        const icon = groupHeader.querySelector('.faq-icon');

        icon.classList.toggle('open');
        groupBody.classList.toggle('open');

        const otherGroups = faqContainer.querySelectorAll('.faq-dropdown');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup!==group) {
                const otherGroupBody = otherGroup.querySelector('.faq-dropdown_body');
                const otherGroupIcon = otherGroup.querySelector('.faq-icon');

                otherGroupBody.classList.remove('open')
                otherGroupIcon.classList.remove('open')
            }
        })

    });
});