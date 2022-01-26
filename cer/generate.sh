#!/bin/bash
openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout RootCA.key -out RootCA.pem -subj "/C=US/CN=Vietswiss-Dev-CA"
openssl x509 -outform pem -in RootCA.pem -out RootCA.crt
openssl req -new -nodes -newkey rsa:2048 -keyout localhost.key -out localhost.csr -subj "/C=VN/ST=HCM/L=HCM/O=DEV-Certificates/CN=localhost.local"
openssl x509 -req -sha256 -days 365 -in localhost.csr -CA RootCA.pem -CAkey RootCA.key -CAcreateserial -extfile domains.ext -out localhost.crt
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./RootCA.crt