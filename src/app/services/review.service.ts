import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { Review } from "../model/review.model";


@Injectable() 

export class ReviewService {
    
    constructor(private http: Http) {

    }
    getReviewsByModel(modelName: string){
        return this.http.get('http://localhost:8060/AutomatiServer/reviews?model=' + modelName).toPromise();
    }

    getReviewsByPerson(email: string) {
        return this.http.get('http://localhost:8060/AutomatiServer/reviewsPeople?email=' + email).toPromise();
    }

    addReview(review: Review) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return  this.http.post('http://localhost:8060/AutomatiServer/review', {
            "rating": review.rating,
            "description": review.description,
            "person": {"email": review.person.email},
            "title": review.title,
            "car": {"id": review.car.id},
            "model": {"name": review.car.model.name},
            }, options).toPromise();
    }
}