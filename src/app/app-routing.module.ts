import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "bpegm",
    loadChildren: () =>
      import("./pages/bpegm/bpegm.module").then((m) => m.BpegmPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: 'bpegm-details',
    loadChildren: () => import('./pages/bpegm-details/bpegm-details.module').then( m => m.BpegmDetailsPageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./pages/youtube/youtube.module').then( m => m.YoutubePageModule)
  },
  {
    path: 'gr',
    loadChildren: () => import('./pages/gr/gr.module').then( m => m.GrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
