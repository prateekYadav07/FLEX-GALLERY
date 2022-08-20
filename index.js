const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', () => {
    const active = document.querySelectorAll('.open');

    active.forEach(act => {
        act.classList.remove('open')
        act.classList.remove('open-active')
    });

    panel.classList.toggle('open');
    panel.classList.toggle('open-active')

}));


