import http.server
import socketserver
import os

PORT = 8080

try:
    Handler = http.server.SimpleHTTPRequestHandler

    httpd = socketserver.TCPServer(("", PORT), Handler)

    print("serving sab management FE at port: "+ str(PORT))
    httpd.serve_forever()
except OSError:
    print(f"PORT '{PORT}' ALREADY IN USE")
    print(f"killing process using port '{PORT}' ...")
    os.system(f"fuser -k {PORT}/tcp")
    print("killing process finished. please run the program again")
