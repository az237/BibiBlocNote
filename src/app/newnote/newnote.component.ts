import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {
  noteForm!: FormGroup

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.noteForm = this.formbuilder.group(
      {
        title: [null, Validators.required],
        desciption : [null, Validators.required]
      }
    )
  }

  onSubmit(): void{
       this.noteForm.value;
  }

}
