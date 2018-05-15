import { Component, OnInit } from '@angular/core';
import { FaqService } from '../services/faq.service';
import { Faq } from '../model/faq.model';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Faq[];
  constructor(private faqService: FaqService, private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.setHomeState();

   this.faqService.getFaqs().then(res => {
      this.faqs = res.json();
    })
  }

}
