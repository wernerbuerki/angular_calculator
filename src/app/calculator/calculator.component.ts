import { CompileFactoryMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CalcData } from '../calc-data';
import { CalculatorService } from '../calculator.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calcData: CalcData = {Operand1: 0, Operand2: 0, Operator: '', Result: 0};
  isOperand2: boolean;
  viewString: string;
  
  
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  setDefaultValues(): void {
  }

  addNumber(number: string): void {
    if (!this.isOperand2) {
      this.calcData.Operand1 = +(this.calcData.Operand1.toString() + number.toString()); 
      this.viewString =  this.calcData.Operand1.toString();
    }
    else {
      this.calcData.Operand2 = +(this.calcData.Operand2.toString() + number.toString()); 
      this.viewString =  this.calcData.Operand2.toString();
    }
    console.log(this.calcData);
  }

  addOperation(operator: string): void{
    this.calcData.Operator = operator;
    this.viewString = operator
    this.isOperand2 = true;
  }

  reset(inclView: boolean=true): void {
    this.calcData = {Operand1: 0, Operand2: 0, Operator: '', Result: 0};
    if (inclView) this.viewString = '';
    this.isOperand2 = false;
  }

  calculate(): void {
    this.viewString = this.calculatorService.calculate(this.calcData);
    this.reset(false);
  }

}
