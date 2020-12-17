import socket

HOST = ""
PORT = 8888

listening_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
listening_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
listening_socket.bind((HOST, PORT))
listening_socket.listen(1)
print(f'Serving HTTP on port {PORT} ...')
while True:
    client_connection, client_address = listening_socket.accept()
    data = client_connection.recv(1024)
    print(data.decode('utf-8'))

    response = b"""\
HTTP/1.1 200 OK

Hello, World!
"""
    client_connection.sendall(response)
    client_connection.close()
