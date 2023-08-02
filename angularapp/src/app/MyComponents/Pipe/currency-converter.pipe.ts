import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  exchangeRates: { [key: string]: number } = {
    USD: 1.126735,
    GBP: 0.876893,
    INR: 79.677056,
  };

  transform(
    value: any,
    fromCurrency: string = 'USD',
    toCurrency: string = 'USD',
    amount: number = 0
  ): any {
    if (!this.exchangeRates[fromCurrency] || !this.exchangeRates[toCurrency]) {
      throw new Error(`Invalid currency ${fromCurrency} or ${toCurrency}`);
    }

    const fromRate = this.exchangeRates[fromCurrency];
    const toRate = this.exchangeRates[toCurrency];
    const convertedAmount = (amount * toRate) / fromRate;
    return convertedAmount;
  }
}