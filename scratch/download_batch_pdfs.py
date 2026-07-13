import urllib.request
import ssl
import os

ssl._create_default_https_context = ssl._create_unverified_context

pdfs = {
    "hub2_plus_8in.pdf": "1EhxGvZxVyo8iLMyX99QjrpWk_zIJ6wAP",
    "rex_8in.pdf": "1VZ5i4qmAV5tc65_hikinV7PTJdL1nJSH",
    "rex2_8in.pdf": "1LXyTdCdJmx8y5spcQUAWBYs7IErWL9uo",
    "door_protect_8in.pdf": "1nV1c2uTK_2KMXkgh6SmhkFZBTQQF36a1",
    "door_protect_plus_8in.pdf": "1heULEjvumgR67oqqeycz_wMhQ4xXHPJZ"
}

output_dir = r"c:\react project\sv2\scratch"
os.makedirs(output_dir, exist_ok=True)

for filename, doc_id in pdfs.items():
    url = f"https://docs.google.com/uc?export=download&id={doc_id}"
    output_path = os.path.join(output_dir, filename)
    print(f"Downloading {filename} from {url}...")
    try:
        urllib.request.urlretrieve(url, output_path)
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
