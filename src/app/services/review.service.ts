import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { Review } from "../model/review.model";
import {environment} from "../../environments/environment.prod";


@Injectable() 

export class ReviewService {
    
    constructor(private http: Http) {

    }
    getReviewsByModel(modelName: string){
        return this.http.get(environment.apiUrl + 'reviews?model=' + modelName).toPromise();
    }

    getReviewsByPerson(email: string) {
        return this.http.get(environment.apiUrl + 'reviewsPeople?email=' + email).toPromise();
    }

    addReview(review: Review) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return  this.http.post(environment.apiUrl + 'review', {
            "rating": review.rating,
            "description": review.description,
            "person": {"email": review.person.email},
            "title": review.title,
            "car": {"id": review.car.id},
            "model": {"name": review.car.model.name},
            }, options).toPromise();
    }
}