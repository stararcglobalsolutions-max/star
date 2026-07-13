import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

url = "https://docs.google.com/uc?export=download&id=13g8wkA430XvRitmJbv5Q5AHawq3g_9CY"
output_path = r"c:\react project\sv2\scratch\hub2_4g_8in.pdf"

print(f"Downloading Hub2 4G (8IN) PDF from {url}...")
try:
    urllib.request.urlretrieve(url, output_path)
    print(f"Success! Saved to {output_path}")
except Exception as e:
    print(f"Error downloading: {e}")
