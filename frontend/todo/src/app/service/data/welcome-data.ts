import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeData {
  

  constructor(
    private readonly http: HttpClient
  ) {}

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}