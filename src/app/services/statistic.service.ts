import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticService {
  private baseUrl: string = 'https://localhost:7195/statisticals/';
  constructor(private http: HttpClient) {}

  guestStatistic(academic_year_id: number) {
    return this.http.get<any>(this.baseUrl + 'guest-statistic', {
      params: { academic_year_id },
    });
  }

  coordinatorStatistic(academic_year_id: number) {
    return this.http.get<any>(this.baseUrl + 'coordinator-statistic', {
      params: { academic_year_id },
    });
  }

  adminStatistic(academic_year_id: number) {
    return this.http.get<any>(this.baseUrl + 'admin-statistic', {
      params: { academic_year_id },
    });
  }

  beforeStatistic(academic_year_id: number) {
    return this.http.get<any>(this.baseUrl + 'before-statistic', {
      params: { academic_year_id },
    });
  }

  afterStatistic(academic_year_id: number) {
    return this.http.get<any>(this.baseUrl + 'after-statistic', {
      params: { academic_year_id },
    });
  }

  statisticalContributionApprovedRejected(academic_id:number, faculty_id:number) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}statistical_approve_reject`, {params: {academic_id, faculty_id}});
  }

  statisticalContributionApprovedRejectedChart(academic_id:number) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}statistical_approve_reject_chart`, {params: {academic_id}});
  }
}
