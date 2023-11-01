from flask import Flask, render_template, request
import os

app = Flask(__name__)

# Define the directory where uploaded files will be saved
UPLOAD_FOLDER = 'static/uploads'  # Change this path as needed
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file:
        # Handle the file (e.g., save it to the uploads directory)
        # You should also check the file type, handle duplicates, and more
        # Here's a basic example to save the file:
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        return 'File uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)
