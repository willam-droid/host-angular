import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { AfterViewInit, Component , Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import { formatDate } from '@angular/common';

declare const $ : any;

@Component({
  selector: 'app-forex',
  standalone: true,
  imports: [Footer, Header, Sidebar],
  templateUrl: './forex.html',
  styleUrl: './forex.css',
})
export class Forex implements AfterViewInit {
  private _table1 : any;

  constructor(private renderer: Renderer2, private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapsed");

    this._table1 = $("#table1").DataTable({
      "columnDefs": [
        {
          "targets" : 3,
          "className" : "text-right"
        }
      ]
    });

    this.bindTable1();
  }



  bindTable1(): void {
    console.log("bindTable1()");

    // URL to fetch exchange rates
    const ratesUrl = "https://api.frankfurter.app/latest";
    // URL to fetch currency names
    const currenciesUrl = "https://openexchangerates.org/api/currencies.json";

    // Fetch the currency names
    this.httpClient.get(currenciesUrl).subscribe((currencies: any) => {
      // Fetch the exchange rates
      this.httpClient.get(ratesUrl).subscribe((data: any) => {
         console.log("Rates API Response:");
          console.log(data);
        $("#tanggal").html("Data per tanggal " + formatDate( new Date(data.timestamp * 1000), 'dd MMMM yyyy', 'id-ID'));
        const rates = data.rates;
        let index = 1;

        // Iterate over the rates and add the rows to the Table
        this._table1.clear();
        for (const currency in rates) {
          // Get the currency name from the API
          const currencyName = currencies[currency];

          // Calculate the rate for specific currency
          const rate = rates.IDR / rates[currency];
          const formatRate = formatCurrency(rate, "en-US", "", currency);

          console.log(`${currency}: ${currencyName} - ${formatRate}`);

          // Add the row with the index, symbol, currency name, and formated rate
          const row = [index++, currency, currencyName, formatRate];
          this._table1.row.add(row);
        }

        this._table1.draw(false);
      });
    });
  }
}
