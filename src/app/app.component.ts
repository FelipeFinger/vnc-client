import { Component } from '@angular/core';
// @ts-ignore
import RFB from '../../node_modules/@novnc/novnc/core/rfb.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vnc-client';

  public rfb: RFB;

  startClient() {
    console.log('Iniciando conexão..');

    // Parâmetros para conexão com o websockify
    const host = window.location.hostname;
    const port = '8080';
    const path = 'websockify';
    // Senha do servidor VNC
    const password = 'pass';

    const url = this.generateURL(port, host, path);

    // Criando um objeto RFB para iniciar a nova conexão
    this.rfb = new RFB(document.getElementById('screen'), url, {
      credentials: { password: password },
    });
  }

  generateURL(port: string, host: string, path: string) {
    let url = 'ws';
    url = window.location.protocol === 'https:' ? 'wss' : 'ws';
    url += '://' + host;

    if (port) {
      url += ':' + port;
    }
    url += '/' + path;

    console.log('URL: ', url);

    return url;
  }
}
