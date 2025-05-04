document.querySelectorAll('.type_options').forEach(radio => {
    radio.addEventListener('change', function () {
        // Remove the class from all parent labels
        document.querySelectorAll('.type_options').forEach(r => {
            r.closest('label')?.classList.remove('selected_option');
        });

        // Add the class to the selected radio's parent label
        if (this.checked) {
            this.closest('label')?.classList.add('selected_option');
        }
    });
});