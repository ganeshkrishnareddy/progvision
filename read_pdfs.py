import os
from pypdf import PdfReader

folder = "INVOICE_17489_25.03.2026"
for filename in os.listdir(folder):
    if filename.endswith(".pdf"):
        filepath = os.path.join(folder, filename)
        try:
            reader = PdfReader(filepath)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            print(f"--- {filename} ---")
            lines = [line.strip() for line in text.split('\n') if line.strip()]
            print('\n'.join(lines[:15]))
        except Exception as e:
            pass
