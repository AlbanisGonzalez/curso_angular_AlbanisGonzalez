import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit{
  event: IEvent | undefined;
 
 
 constructor(private eventService: EventService){}
 
  ngOnInit(): void {
    this.eventService.findById(180).subscribe(data=> this.event = data);
  }

  

}
