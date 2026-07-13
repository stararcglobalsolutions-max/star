import urllib.request
import ssl

# Bypass SSL verification if needed
ssl._create_default_https_context = ssl._create_unverified_context

url = "https://docs.google.com/uc?export=download&id=1-IYFPynAgvAS-bJGgHzGBJgy1eWAo5Wg"
output_path = r"c:\react project\sv2\scratch\hub_8in.pdf"

print(f"Downloading Hub (8IN) PDF from {url}...")
try:
    urllib.request.urlretrieve(url, output_path)
    print(f"Success! Saved to {output_path}")
except Exception as e:
    print(f"Error downloading: {e}")
