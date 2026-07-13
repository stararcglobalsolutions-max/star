import sys

try:
    import fitz # PyMuPDF
    print("PyMuPDF (fitz) is installed!")
except ImportError:
    print("PyMuPDF is NOT installed.")

try:
    import pdf2image
    print("pdf2image is installed!")
except ImportError:
    print("pdf2image is NOT installed.")
