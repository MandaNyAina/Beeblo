import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  homeInfo1: string;
  homeInfo2: string;
  homeInfo3: string;
  constructor() { }

  ngOnInit() {
    this.getInfoSite();
  }

  getInfoSite() {
    let teste = {
      homeInfo1: `<p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque
                    repellat pariatur sed aspernatur delectus odit est, qui veritatis accusantium
                    voluptatibus minus molestiae debitis obcaecati eligendi ad esse quaerat laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque
                    repellat pariatur sed aspernatur delectus odit est, qui veritatis accusantium
                    voluptatibus minus molestiae debitis obcaecati eligendi ad esse quaerat laborum.
                  </p>`,
      homeInfo2: `<p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque
                    repellat pariatur sed aspernatur delectus odit est, qui veritatis accusantium
                    voluptatibus minus molestiae debitis obcaecati eligendi ad esse quaerat laborum.
                  </p>`,
      homeInfo3: `<p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque
                    repellat pariatur sed aspernatur delectus odit est, qui veritatis accusantium
                    voluptatibus minus molestiae debitis obcaecati eligendi ad esse quaerat laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque
                    repellat pariatur sed aspernatur delectus odit est, qui veritatis accusantium
                    voluptatibus minus molestiae debitis obcaecati eligendi ad esse quaerat laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque
                    repellat pariatur sed aspernatur delectus odit est, qui veritatis accusantium
                    voluptatibus minus molestiae debitis obcaecati eligendi ad esse quaerat laborum.
                  </p>`
    }

    this.title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vero deserunt eius fugiat officia vitae facilis id eum repudiandae,
    dolores non doloremque doloribus ullam labore officiis voluptatem ab veritatis unde.`
    this.homeInfo1 = teste.homeInfo1;
    this.homeInfo2 = teste.homeInfo2;
    this.homeInfo3 = teste.homeInfo3;
  }

}
