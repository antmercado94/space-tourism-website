document.addEventListener('astro:page-load', () => {
	const sidebar = document.querySelector('#sidebar'),
		sidebarOpen = document.querySelector('#sidebar-open'),
		sidebarClose = document.querySelector('#sidebar-close');

	// open sidebar menu
	sidebarOpen?.addEventListener('click', () => {
		sidebar?.classList.toggle('translate-x-full');
		sidebar?.classList.toggle('translate-x-0');
	});
	// close sidebar menu
	sidebarClose?.addEventListener('click', () => {
		sidebar?.classList.toggle('translate-x-0');
		sidebar?.classList.toggle('translate-x-full');
	});
});
