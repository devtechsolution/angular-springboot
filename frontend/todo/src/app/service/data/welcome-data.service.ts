import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    // console.log('Execute Hello World Bean Service');
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.createBasicAuthenticaationHttpHeader();
    // let passheaders = 
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    // return this.http.get<HelloWorldBean>(`http://localhost:8081//hello-world/path-variable/${name}`,
    // {headers: passheaders});
    return this.http.get<HelloWorldBean>(`http://localhost:8081//hello-world/path-variable/${name}`,
     {headers});
  }

  createBasicAuthenticaationHttpHeader() {
    let username = 'devtechsoution';
    let password = 'Rama';
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  // Access to XMLHttpRequest at
  //  'http://localhost:8081//hello-world/path-variable/devtechsolution' from origin 
  // 'http://localhost:4200' has been blocked by CORS policy:
  //  No 'Access-Control-Allow-Origin' header is present on the requested resource.


  // Access to XMLHttpRequest at 'http://localhost:8081//hello-world/path-variable/devtechsolution' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // Response to preflight request doesn't pass access control check:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
