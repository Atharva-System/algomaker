import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { indexReducer } from './shared/stores/index.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// headlessui
import { MenuModule } from 'headlessui-angular';

// tippy
import { NgxTippyModule } from 'ngx-tippy-wrapper';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

// perfect-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

// highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { Title } from '@angular/platform-browser';

// sortable
import { SortablejsModule } from '@dustfoundation/ngx-sortablejs';

// modal
import { ModalModule } from 'angular-custom-modal';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideStore({index: indexReducer}),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    })),
  importProvidersFrom(HttpClientModule),
  importProvidersFrom(BrowserAnimationsModule),
  importProvidersFrom(MenuModule),
  importProvidersFrom(NgxTippyModule),
  importProvidersFrom(NgApexchartsModule),
  importProvidersFrom(
    NgScrollbarModule
  ),
  importProvidersFrom(SortablejsModule),
  importProvidersFrom(ModalModule),
  importProvidersFrom(HighlightModule),
  Title,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    json: () => import('highlight.js/lib/languages/json'),
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
  ]
};

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}