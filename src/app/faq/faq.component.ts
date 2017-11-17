import { Component, OnInit } from '@angular/core';
import { FaqService } from '../services/faq.service';
import { Faq } from '../model/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Faq[];
  constructor(private faqService: FaqService) { }

  ngOnInit() {
   this.faqService.getFaqs().then(res => {
      this.faqs = res.json();
    })
  }

}
