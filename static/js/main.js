document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.querySelector('#file-upload-section form');
    const fileDisplayList = document.querySelector('#file-display-section ul');

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(uploadForm);
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Reload the page to update the file list (you can use AJAX to update without reloading)
            location.reload();
        } else {
            console.error('File upload failed.');
        }
    });
});
