import sys
import os

base = os.path.join(sys.prefix, "lib", "libcurl-impersonate-chrome.so")

with open(base, "rb") as inp, open("/usr/lib/libcurl-impersonate-chrome.so.4", "wb") as out:
    data = inp.read()
    out.write(data)
