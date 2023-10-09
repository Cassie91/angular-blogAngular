import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png";
  @Input()
  cardTitle:string ="Inedito, Cassie desenvolve uma pokedex!";
  @Input()
  id:string="0";

  constructor() { }

  ngOnInit(): void {
  }

}
