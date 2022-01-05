// import { Component, OnInit } from '@angular/core';
// import { Package } from 'src/app/core/models/package.model';
// import { PackageService } from 'src/app/core/services/packages.service';

// @Component({
//   selector: 'app-package-list',
//   templateUrl: './package-list.component.html',
//   styleUrls: ['./package-list.component.scss']
// })
// export class PackageListComponent {

//   constructor( private packageService: PackageService) { }

//   @Input() limit: number;
//   @Input()
//   set config(config: ArticleListConfig) {
//     if (config) {
//       this.query = config;
//       this.currentPage = 1;
//       this.runQuery();
//     }
//   }

//   query: ArticleListConfig;
//   results: Package[];
//   loading = false;
//   currentPage = 1;
//   totalPages: Array<number> = [1];

//   setPageTo(pageNumber) {
//     this.currentPage = pageNumber;
//     this.runQuery();
//   }

//   runQuery() {
//     this.loading = true;
//     this.results = [];

//     // Create limit and offset filter (if necessary)
//     if (this.limit) {
//       this.query.filters.limit = this.limit;
//       this.query.filters.offset =  (this.limit * (this.currentPage - 1));
//     }

//     this.packageService.query(this.query)
//     .subscribe(data => {
//       this.loading = false;
//       this.results = data.articles;

//       this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
//     });
//   }
// }



