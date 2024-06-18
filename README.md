# Serviço de Envio de E-mail

Este projeto é um serviço simples de envio de e-mails construido com Node.js, onde realiza-se o uso da biblioteca Nodemailer para envio de E-mails. Ele está configurado para usar o serviço de e-mail do Gmail e é protegido por HTTPS para garantir a segurança no envio das mensagens.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)

## Instalação

Para começar, clone o repositório e instale as dependências:

```bash
git clone repositorio
cd repositorio
npm install
```

## Configuração

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

env
```
HTTPS_PORT=3443;
GMAIL_FROM=email-origem
GMAIL_TO=destino
GMAIL_PASS_APP=senha-do-app
```

**Certifique-se de gerar uma senha de aplicativo nas configurações de segurança da sua conta Google.**

## Configuração Certificado Autoassinado
Se faz necessário a criação de um certificado autoassinado, isso por meio do OpenSSL. Após criado os arquivos(cert e key), mova para o diretório certs.
```bash
$ openssl req -x509 -sha256 -newkey rsa:2048 -keyout certificate.key -out certificate.crt -days 1024 -nodes
```

## Uso

Para iniciar o serviço, execute o comando:

```bash
npm start
```
Para enviar um e-mail, faça uma requisição POST para https://localhost:{porta}/app/sendmails informando porta configurada, introduzir o seguinte formato JSON no corpo da requisição:
```json
{
  "to": "destinatario@example.com",
  "subject": "Assunto do E-mail",
  "text": "Conteúdo do E-mail"
}
```

## Tecnologias Utilizadas
+ JavaScript;
+ Node.js;
+ Nodemailer;
+ Express;
+ HTTPS;
+ API Rest;
+ Openssl;
