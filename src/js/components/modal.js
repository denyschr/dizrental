function modal() {
	const body = document?.querySelector('body');
	const menu = document?.querySelector('.nav');
	const modalBtns = document?.querySelectorAll('.modal-button');
	const lockOffset = document?.querySelectorAll('.lock-offset');

	modalBtns.forEach(modalBtn => {
		modalBtn.addEventListener('click', e => {
			const path = e.currentTarget.dataset.path;
			const target = document.querySelector(`[data-target=${path}]`);
			const modalClose = document.querySelector(`[data-target=${path}] .modal__close`);
			if (!menu.classList.contains('_active')) {
				bodyLock();
			}
			target.classList.add('_active');
			target.addEventListener('click', e => {
				if (!e.target.closest('.modal__content')) {
					if (!menu.classList.contains('_active')) {
						bodyUnlock();
					}
					target.classList.remove('_active');
				}
			});
			modalClose.addEventListener('click', () => {
				if (!menu.classList.contains('_active')) {
					bodyUnlock();
				}
				target.classList.remove('_active');
			});
		});
	});

	function bodyLock() {
		const lockOffsetValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		lockOffset.forEach(item => {
			item.style.paddingRight = lockOffsetValue;
		});
		body.style.paddingRight = lockOffsetValue;
		body.classList.add('locked');
	}

	function bodyUnlock() {
		setTimeout(() => {
			lockOffset.forEach(item => {
				item.style.paddingRight = '0px';
			});
			body.style.paddingRight = '0px';
			body.classList.remove('locked');
		}, 0);
	}
}

module.exports = modal();