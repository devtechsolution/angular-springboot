import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'some Welcome Message';
  welcomeMessageFromService: string;
  name = '';

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {

    // console.log(this.route.snapshot.params['name']);

    this.name = this.route.snapshot.params['name'];
  }

  getWelomemessage() {
    // console.log('Get Welcome Message');
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulRessponse(response),
      error => this.handleErrorRessponse(error)
      //response=> console.log(response.message)
    );
    //console.log(this.service.executeHelloWorldBeanService());
  }

  handleSuccessfulRessponse(response){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorRessponse(error) {
    this.welcomeMessageFromService = error.error.message;
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    // console.log(response);
    // console.log(response.message);
  }

}
