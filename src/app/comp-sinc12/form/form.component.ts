import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form!:FormGroup;

  constructor(private fb:FormBuilder) { }
    
  ngOnInit(): void {
    this.form=this.fb.group({
      name:[' ',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      age:['',
        [
          Validators.required,
          Validators.min(1)
        ]
      ],
      phone:['',
        [
          Validators.required
        ]
      ],
      asunto:['',
        [
          Validators.required
        ]
      ],
      mensaje:['',
        [
          Validators.required
        ]
      ]
    })
  }

}
