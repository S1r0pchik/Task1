import { Component, OnInit } from '@angular/core';

export interface Text {
  text: string
}

var Arr: any[] = [], size = 0;

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
  element: any;
  constructor() { }

  texts: Text[] = []

  ngOnInit(): void {
    for (let i = 0; i < size; ++i) {
      this.texts.push({'text': Arr[i]});
    }
  }

  AddNote(): void {
    this.element = document.getElementById("input");
    if (this.element.value != "") {
      this.texts.push({'text': this.element.value})
      Arr.push(this.element.value);
      size++;
      this.element.value = "";
    }
  }
}
