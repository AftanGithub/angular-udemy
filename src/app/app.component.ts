import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password="";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick(){
    let numbers = '1234567890';
    let letters = 'qwertyuiopasdfghjklzxcvbnm';
    let symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars+=letters
    }

    if(this.includeNumbers){
      validChars+=numbers
    }

    if(this.includeSymbols){
      validChars+=symbols
    }
    let generatedPassword = ''
    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password = generatedPassword;
  }

  handlePasswordLength(event:Event){
    let target = event.target as HTMLInputElement
    const parsedVal = parseInt(target.value);

    if(!isNaN(parsedVal)){
      this.length = parsedVal;
    }
  }

  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

 
}
