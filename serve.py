#!/usr/bin/env python3
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

class CORSHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def log_message(self, fmt, *args):
        print(f"  {self.address_string()} - {fmt % args}")

port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
print(f"Serving at http://127.0.0.1:{port}  (Ctrl+C to stop)")
try:
    HTTPServer(("", port), CORSHandler).serve_forever()
except KeyboardInterrupt:
    print("\nStopped.")
