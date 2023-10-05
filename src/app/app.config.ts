import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { indexReducer } from './shared/stores/index.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// headlessui
import { MenuModule } from 'headlessui-angular';

// perfect-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

import { Title } from '@angular/platform-browser';

// modal
import { ModalModule } from 'angular-custom-modal';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: environment.socketUrl, // socket server url;
  options: {},
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ index: indexReducer }),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(MenuModule),

    importProvidersFrom(NgScrollbarModule),
    importProvidersFrom(SocketIoModule.forRoot(config)),
    importProvidersFrom(ModalModule),
    Title,
  ],
};
