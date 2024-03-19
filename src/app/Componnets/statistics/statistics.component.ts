import { DatePipe, NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StatisticService } from 'src/app/Services/statistic.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']

})
export class StatisticsComponent {
  constructor(private _service: StatisticService) {}

  views$: Observable<number>;
  loves$: Observable<number>;
  private mySub1 = new Subscription();
  private mySub2 = new Subscription();

  // views: number;
  // loves: number;
  curDate: Date;

  ngOnInit() {
    this.curDate = new Date();
    this.views$ = this._service.views$;
    this.loves$ = this._service.loves$;
    this.mySub1 = this._service.views$.subscribe();
    this.mySub2 = this._service.loves$.subscribe();
  }
}
