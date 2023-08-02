import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './MyComponents/Pipe/currency-converter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyConverterPipe],
})
export class AppComponent {
  fromCurrency?: string;
  toCurrency?: string;
  amount?: number;
  resValue?: string;
  result?: string;

  exchangeRates: Record<string, number> = {
    1.126735: 1.126735,
    0.876893: 0.876893,
    79.677056: 79.677056,
  };

  convertCurrency() {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      let convertedAmount = Math.round(
        (this.amount * this.exchangeRates[this.toCurrency]) /
          this.exchangeRates[this.fromCurrency]
      ).toFixed(2);
      this.resValue = convertedAmount;
    }
    if (this.fromCurrency && this.toCurrency && this.amount) {
      let convertedAmount = Math.round(
        (this.amount * this.exchangeRates[this.toCurrency]) /
          this.exchangeRates[this.fromCurrency]
      ).toFixed(2);
      this.result = convertedAmount;
    }
  }
}