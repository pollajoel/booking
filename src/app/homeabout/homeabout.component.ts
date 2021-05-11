import { Component, OnInit } from '@angular/core';
import { faCar} from '@fortawesome/free-solid-svg-icons';
import { faPaste} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homeabout',
  templateUrl: './homeabout.component.html',
  styleUrls: ['./homeabout.component.scss']
})
export class HomeaboutComponent implements OnInit {
  facar = faCar;
  fapaste = faPaste;
  famoneybill = faMoneyBill;

  constructor() { }

  ngOnInit(): void {
  }

}
