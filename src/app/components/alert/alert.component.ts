import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition} from '@angular/animations';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('showAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('200ms'),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0, transform: 'translateY(-50px)' })),
      ])
    ]),
  ]
})
export class AlertComponent implements OnInit {
  isShown = false;
  message: string;
  type: string;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.alertObs.subscribe(alert => {
      if (alert){
        this.message = alert.message;
        this.type = alert.type;
        this.showAlert();
      }
    });
  }

  private showAlert(){
    this.isShown = true;
    setTimeout(() => {
      this.isShown = false;
    }, 1700);
  }

}
