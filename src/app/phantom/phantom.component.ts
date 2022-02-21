import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phantom',
  templateUrl: './phantom.component.html',
  styleUrls: ['./phantom.component.css']
})
export class PhantomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitFormToTSFile(theForm : any){
    var genre = theForm.genre;
    var language = theForm.language
    var aval_langs = ['Tamil','English','Sindhi','Telugu']
    console.log(genre);
    if(aval_langs.includes(language)){
      alert("Your language is available")
    }else{
      alert("The specified Language is unavailable. Please use subtitles.");
    }
  }

  fullName: string = "Hello JavaTpoint"; 

}
