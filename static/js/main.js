document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.querySelector('#file-upload-section form');
    const fileDisplayList = document.querySelector('#file-display-section ul');
    const fileInput = uploadForm.querySelector('input[type="file"]');

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate file input
        if (!fileInput.files.length) {
            console.error('No file selected.');
            return;
        }

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
