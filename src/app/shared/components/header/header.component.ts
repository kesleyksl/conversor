import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'conversor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleEvent.emit();
  }
}
