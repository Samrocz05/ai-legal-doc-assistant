# AI Legal Documentation Assistant

## Overview

The AI Legal Documentation Assistant is a web application designed to help users analyze and summarize legal documents. Users can upload documents or scan them using their camera, and the application will provide a summary of the document. Additionally, users can ask questions about the document, and the application will provide answers based on the document's content.

## Features

- **Document Upload**: Users can upload PDF or image files.
- **Document Scanning**: Users can scan documents using their camera.
- **Document Analysis**: Extracts text from uploaded or scanned documents.
- **Summary Generation**: Provides a summary of the document using OpenAI's GPT-3.5-turbo.
- **Question Answering**: Allows users to ask questions about the document and get responses based on the document's summary.
- **Directory Information**: Provides links to legal resources.

## Requirements

- Python 3.12+
- Flask
- pdfminer.six
- Pillow
- pytesseract
- openai
- werkzeug

## Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/ai-legal-assistant.git
    cd ai-legal-assistant
    ```

2. **Install Dependencies**

    Create a virtual environment and install the required packages:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. **Set Up OpenAI API Key**

    Replace `YOUR_OPENAI_API_KEY` in `app.py` with your actual OpenAI API key:

    ```python
    openai.api_key = 'YOUR_OPENAI_API_KEY'
    ```

4. **Run the Application**

    Start the Flask development server:

    ```bash
    python app.py
    ```

    Open your browser and navigate to `http://127.0.0.1:5000` to use the application.

## Directory Structure

- `app.py`: Main application script with Flask routes and logic.
- `static/css/styles.css`: CSS styles for the web application.
- `static/images/logo.png`: Logo image displayed at the top of the page.
- `templates/index.html`: HTML template for the user interface.
- `uploads/`: Directory where uploaded and scanned documents are stored.

## Usage

1. **Upload Document**: Click on the "Upload Document" button, select a file, and click "Upload".
2. **Scan Document**: Click on the "Scan Document (using Camera)" button, capture an image, and click "Scan".
3. **View Summary**: After uploading or scanning, the document summary will be displayed.
4. **Ask a Question**: Type your question in the input field and click "Ask" to get a response based on the document summary.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- OpenAI GPT-3.5-turbo for text summarization and question answering.
- Flask for creating the web application.
- pdfminer.six and pytesseract for document text extraction.

## Contact

For any questions or inquiries, please reach out to [Sam D](mailto:dsam5238@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/sam-d-220501245/).
