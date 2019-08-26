import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from 'app/services/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(public loaderService:LoaderService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = localStorage.getItem('token');
        if (currentUser!=null) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.toString()}`
                }
            });
        }
        this.loaderService.show();

        return next.handle(request).pipe(
            finalize(()=>this.loaderService.hide())
        );
    }
}