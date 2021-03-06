import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Properties: Array<any> = [
    {
      Id: 1,
      Type: "House 1",
      Price: 42000,
    },

    {
      Id: 2,
      Type: "House 2",
      Price: 65000,
    },

    {
      Id: 3,
      Type: "House 3",
      Price: 12000,
    },

    {
      Id: 4,
      Type: "House 4",
      Price: 78600,
    },

    {
      Id: 5,
      Type: "House 5",
      Price: 55000,
    },

    {
      Id: 6,
      Type: "House 6",
      Price: 98000,
    },
  ];
}
