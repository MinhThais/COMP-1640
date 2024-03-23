import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-detail-articles',
  templateUrl: './detail-articles.component.html',
  styleUrls: ['./detail-articles.component.css'],
})
export class DetailArticlesComponent implements OnInit{
  fileWord : any = [];
  articleID : number = 0;
  pathDoc : string = "";
  a : any;

  urlDoc: string = `https://view.officeapps.live.com/op/embed.aspx?src=https://localhost:7195/Articles/file-sample_1MB.doc`;
  urlSafe: SafeResourceUrl | undefined

  constructor(
    private articleAPI:ArticleService,
    private ActivatedRoute:ActivatedRoute,
    private santizer : DomSanitizer
  ){}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.articleID = +params['id'];
      this.getArticleContent(this.articleID);
    });

    this.urlSafe = this.santizer.bypassSecurityTrustResourceUrl(this.urlDoc);
  }

  getArticleContent(article_id: number){
    this.articleAPI.getArticleContent(article_id).subscribe(data => {
      this.fileWord = data;
      this.pathDoc = this.articleAPI.doc;
      this.a = this.santizer.bypassSecurityTrustResourceUrl("https://localhost:7195/Articles/Report.docx");
    });
  }

  // wordContent: string | undefined;

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     this.readFileContent(file);
  //   }
  // }

  // private readFileContent(file: File) {
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     if (event.target && event.target.result) {
  //       const result: any = event.target.result;
  //       // Here 'result' contains the file content as a data URL
  //       // You can now handle the data as needed
  //       this.wordContent = result;
  //     }
  //   };

  //   // Read the file as binary data
  //   reader.readAsBinaryString(file);
  // }


}


