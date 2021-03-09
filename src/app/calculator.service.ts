import { Injectable } from '@angular/core';
import { CalcData} from './calc-data';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculate(calcData: CalcData): string {
    switch (calcData.Operator) {
      case '+':
        calcData.Result = calcData.Operand1 + calcData.Operand2;
        break;
      case '-':
        calcData.Result = calcData.Operand1 - calcData.Operand2;
        break;
      case 'X':
        calcData.Result = calcData.Operand1 * calcData.Operand2;
        break;
      case '/':
        if (calcData.Operand2 === 0) {
          return 'Err: DIV / 0';
          return;
        }
        calcData.Result = calcData.Operand1 / calcData.Operand2;
        break;
    }
    return calcData.Result.toString();
  }

}
