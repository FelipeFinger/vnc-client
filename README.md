# VNC Client

Client VNC simples feito em angular. Utiliza as bibliotecas noVNC e websockify para realizar um acesso remoto.

## Utilização

### Clonar o projeto e instalar as dependências
`git clone https://github.com/FelipeFinger/vnc-client.git`  
`cd vnc-client`  
`npm install`  

### Ajustar configurações
Ajustar a senha do VNC na const password, arquivo `\src\app\app-routing.module.ts`.  
Ajustar o IP e porta da máquina que deseja realizar o acesso na const target, arquivo `\src\assets\websockify.js`.  

### Executar o servidor websockify
`cd \src\assets`  
`node websockify.js`

### Executar o projeto angular
`ng serve`  

Navegar até `http://localhost:4200/`
