import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { ToastController } from '@ionic/angular';

interface ShortifyResponse {
  id: number;
  uri: string;
  original: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: string;
  urlResponse: Observable<ShortifyResponse>;

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController
  ) { }

  generateUrl() {
    this.http.post<ShortifyResponse>(
      'https://shortify.deploy.auto-execute.dev/records',
      {
        url: this.url
      }
    ).pipe(
      tap(
        (response: ShortifyResponse) => {
          this.toastCtrl.create(
            {
              message: "URL shortened and copied to your clipboard",
              duration: 3000,
              position: 'top',
              color: 'success',
              buttons: [
                {
                  text: 'Dismiss',
                  role: 'cancel'
                }
              ]
            }
          ).then((toast) => toast.present());

          navigator.clipboard.writeText(`https://shortify.deploy.auto-execute.dev/r/${response.uri}`);
        }
      ),
      catchError(
        _ => this.toastCtrl.create(
          {
            message: 'Unable to shortify URL',
            duration: 3000,
            position: 'top',
            color: 'danger',
            buttons: [
              {
                text: 'Dismiss',
                role: 'cancel'
              }
            ]
          }
        ).then((toast) => toast.present())
      )
    ).subscribe();
  }

}
