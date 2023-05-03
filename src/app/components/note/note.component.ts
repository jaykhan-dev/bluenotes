import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Meta } from '@angular/platform-browser';
import { mockNoteData } from 'src/app/models/mock-note-data';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  //@Input() note: Note;
  notes: Note[] = [];

  constructor() {
    this.notes = mockNoteData;
  }
}
