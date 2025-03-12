import { computed, inject, Injectable, signal } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthStatus, LoginResponse, User } from '../interfaces';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { CheckTokenResponse } from '../interfaces/check-token.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environments.baseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  //Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean{
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);

    if (typeof window === 'undefined') {
      return false; //si no estamos en el navegador, devolvemos false.
    }

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  login(nombreUsuario: string, password: string): Observable<boolean> {
    const url = `${ this.baseUrl }/usuarios/login`;
    const body = { nombreUsuario, password };

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token)),
        //Todos los errores
        catchError( err => throwError( () => err))
      )
  }

  register(formData: FormData, ): Observable<boolean> {
    const url = `${ this.baseUrl }/usuarios/registro`;
    const body = formData;

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token)),
        //todos los errores
        catchError( err => throwError( () => err ))
      )
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/usuarios/check-token`;

    if (typeof window === 'undefined') {
      return of(false);
    }

    const token = localStorage.getItem('token')?.trim();

    if (!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<CheckTokenResponse>(url, {}, { headers }).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)), //Devuelve 'true' si la autenticación fue exitosa
      catchError(() => {
        this._authStatus.set(AuthStatus.notAuthenticated)
        return of(false);
      })
    );

  }

  logout(): Observable<boolean>{

    if (typeof window === 'undefined') {
      //si no estamos en navegador, devolvemos false
      return of(false);
    }

   localStorage.removeItem('token');
   localStorage.removeItem('user');
   this._currentUser.set( null );   
   this._authStatus.set( AuthStatus.notAuthenticated );
   return of(true);
  }

}
