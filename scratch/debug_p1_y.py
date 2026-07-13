import fitz

pdfs = [
    r"c:\react project\sv2\scratch\door_protect_plus_8in.pdf",
    r"c:\react project\sv2\scratch\rex_8in.pdf",
    r"c:\react project\sv2\scratch\hub2_plus_8in.pdf"
]

for pdf in pdfs:
    print(f"\n================ {pdf} ================")
    doc = fitz.open(pdf)
    page = doc[0]
    
    # get page drawing/text details
    text_page = page.get_text("words") # list of tuples: (x0, y0, x1, y1, "word", block_no, line_no, word_no)
    for word in text_page:
        y0 = word[1]
        text = word[4]
        # Print words that are in the top 600 points of the page
        if y0 < 600:
            print(f"y0: {y0:.2f} | Word: '{text}'")
