import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { IconComponent } from './shared/icon/icon.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarbonComponent } from './shared/carbon/carbon.component';
import { BannerComponent } from './shared/banner/banner.component';
import { IconViewerComponent } from './shared/iconViewer/iconViewer.component';

import { HomePageComponent } from './homePage/homePage.component';
import { ContributorPageComponent } from './contributorPage/contributorPage.component';
import { ContributorsPageComponent } from './contributorsPage/contributorsPage.component';
import { IconPageComponent } from './iconPage/iconPage.component';
import { IconsPageComponent } from './iconsPage/iconsPage.component';
import { DownloadPageComponent } from './downloadPage/downloadPage.component';
import { ViewerPageComponent } from './viewerPage/viewerPage.component';
import { ResourcesPageComponent } from './resourcesPage/resourcesPage.component';
import { NotFoundPageComponent } from './notFoundPage/notFoundPage.component';
import { MarkdownComponent } from "app/shared/markdown/markdown.component";
import { IssuesPageComponent } from 'app/issuesPage/issuesPage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from 'app/shared/interceptor/mock.interceptor';
import { UserComponent } from 'app/shared/userPhoto/userPhoto.component';
import { IconSearchComponent } from 'app/shared/iconSearch/iconSearch.component';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { GithubPageComponent } from 'app/githubPage/githubPage.component';
import { SidebarComponent } from 'app/viewerPage/sidebar/sidebar.component';
import { ContributorBadgeComponent } from 'app/contributorsPage/contributorBadge/contributorBadge.component';
import { ModificationTableComponent } from 'app/shared/modificationTable/modificationTable.component';
import { IconPreviewComponent } from 'app/shared/iconPreview/iconPreview.component';
import { AssignUserModal } from 'app/shared/assignUserModal/assignUserModal.component';
import { AssignTagModal } from 'app/shared/assignTagModal/assignTagModal.component';
import { AssignAliasModal } from 'app/shared/assignAliasModal/assignAliasModal.component';
import { ConfirmModal } from './shared/confirmModal/confirmModal.component';
import { SelectIconModal } from './shared/selectIconModal/selectIconModal.component';

import { AdminComponent } from './admin/admin.component';
import { AdminLoginPageComponent } from './admin/loginPage/loginPage.component';
import { AdminUserBarComponent } from './admin/userBar/userBar.component';
import { AdminIconsPageComponent } from './admin/iconsPage/iconsPage.component';
import { AdminIndexPageComponent } from './admin/indexPage/indexPage.component';
import { AdminAliasPageComponent } from 'app/admin/aliasPage/aliasPage.component';
import { AdminProfilePageComponent } from 'app/admin/profilePage/profilePage.component';
import { AdminUsersPageComponent } from 'app/admin/usersPage/usersPage.component';
import { AdminSheetPageComponent } from 'app/admin/sheetPage/sheetPage.component';
import { AdminBasePageComponent } from 'app/admin/basePage/basePage.component';
import { AdminTagPageComponent } from 'app/admin/tagPage/tagPage.component';
import { AdminHistoryPageComponent } from 'app/admin/historyPage/historyPage.component';
import { AdminIndexeddbPageComponent } from 'app/admin/indexeddbPage/indexeddbPage.component';
import { AdminReleasePageComponent } from './admin/releasePage/releasePage.component';
import { AdminAssignIssueModal } from './admin/historyPage/assignIssueModal/assignIssueModal.component';

import { PackageType } from './shared/enums/packageType.enum';

const appRoutes: Routes = [
  {
    path: 'getting-started',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started.md'
    }
  },
  {
    path: 'getting-started/android',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-android.md'
    }
  },
  {
    path: 'getting-started/angular',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-angular.md'
    }
  },
  {
    path: 'getting-started/angularjs',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-angularjs.md'
    }
  },
  {
    path: 'getting-started/bootstrap',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-bootstrap.md',
      stylesheets: [
        '//cdn.jsdelivr.net/npm/@mdi/font@6.6.96/css/materialdesignicons.min.css',
        '/assets/docs/bootstrap/helper.css'
      ]
    }
  },
  {
    path: 'getting-started/bootstrap-3',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-bootstrap-v3.md'
    }
  },
  {
    path: 'getting-started/ember',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-ember.md'
    }
  },
  {
    path: 'getting-started/php',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-php.md'
    }
  },
  {
    path: 'getting-started/polymer',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-polymer.md'
    }
  },
  {
    path: 'getting-started/react',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-react.md'
    }
  },
  {
    path: 'getting-started/rollupjs',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-rollupjs.md'
    }
  },
  {
    path: 'getting-started/ruby-on-rails',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-ruby-on-rails.md'
    }
  },
  {
    path: 'getting-started/svg',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-svg.md'
    }
  },
  {
    path: 'getting-started/vuejs',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-vuejs.md'
    }
  },
  {
    path: 'getting-started/webpack',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-webpack.md'
    }
  },
  {
    path: 'getting-started/webfont',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-webfont.md'
    }
  },
  {
    path: 'getting-started/windows',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-windows.md'
    }
  },
  {
    path: 'getting-started/xamarin',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-xamarin.md'
    }
  },
  {
    path: 'getting-started/visual-studio-code',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-visual-studio-code.md'
    }
  },
  {
    path: 'contribute',
    component: ViewerPageComponent,
    data: {
      file: 'content/contribute.md'
    }
  },
  {
    path: 'contribute/icon-naming',
    component: ViewerPageComponent,
    data: {
      file: 'content/contribute-naming.md'
    }
  },
  {
    path: 'contribute/site',
    component: ViewerPageComponent,
    data: {
      file: 'content/contribute-site.md'
    }
  },
  {
    path: 'contribute/site/api',
    component: ViewerPageComponent,
    data: {
      file: 'content/api.md'
    }
  },
  {
    path: 'contribute/site/api/data',
    component: ViewerPageComponent,
    data: {
      file: 'content/data.md'
    }
  },
  {
    path: 'guides',
    component: ViewerPageComponent,
    data: {
      file: 'content/guides.md'
    }
  },
  {
    path: 'guide/home-assistant',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-home-assistant.md'
    }
  },
  {
    path: 'guide/accessiblility',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-wcag.md'
    }
  },
  {
    path: 'guide/webfont-alternatives',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-webfont-alternative.md'
    }
  },
  {
    path: 'guide/nodejs-scripting',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-nodejs.md'
    }
  },
  {
    path: 'guide/iconify',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-iconify.md'
    }
  },
  {
    path: 'contribute/third-party',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-third-party.md'
    }
  },
  {
    path: 'contribute/first-party',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-first-party.md'
    }
  },
  {
    path: 'code-of-conduct',
    component: ViewerPageComponent,
    data: {
      file: 'content/code-of-conduct.md'
    }
  },
  {
    path: 'build/site',
    component: ViewerPageComponent,
    data: {
      file: 'content/build.md'
    }
  },
  {
    path: 'changelog',
    component: ViewerPageComponent,
    data: {
      file: 'content/changelog.md'
    }
  },
  {
    path: 'upgrade',
    component: ViewerPageComponent,
    data: {
      file: 'content/upgrade.md'
    }
  },
  {
    path: 'about',
    component: ViewerPageComponent,
    data: {
      file: 'content/about.md'
    }
  },
  {
    path: 'license',
    component: ViewerPageComponent,
    data: {
      file: 'content/license.md'
    }
  },
  {
    path: 'contact',
    component: ViewerPageComponent,
    data: {
      file: 'content/contact.md'
    }
  },
  {
    path: 'roadmap',
    component: ViewerPageComponent,
    data: {
      file: 'content/roadmap.md'
    }
  },
  {
    path: 'roadmap/brand-icons',
    component: ViewerPageComponent,
    data: {
      file: 'content/brand-icons.md'
    }
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'icons',
    component: IconsPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'icons/light',
    component: IconsPageComponent,
    data: {
      package: PackageType.MaterialDesignIconsLight
    }
  },
  {
    path: 'icons/:tagUrl/light',
    component: IconsPageComponent,
    data: {
      package: PackageType.MaterialDesignIconsLight
    }
  },
  {
    path: 'icons/:tagUrl',
    component: IconsPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'icon/:iconName',
    component: IconPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'icon/:iconName/light',
    component: IconPageComponent,
    data: {
      package: '531A9B44-1962-11E5-89CC-842B2B6CFE1B'
    }
  },
  {
    path: 'contributors',
    component: ContributorsPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'contributor/:name',
    component: ContributorPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'download',
    component: DownloadPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'issues',
    component: IssuesPageComponent,
    data: {
      package: PackageType.MaterialDesignIcons
    }
  },
  {
    path: 'resources',
    component: ResourcesPageComponent
  },
  {
    path: 'contribute/github',
    component: GithubPageComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminLoginPageComponent
      },
      {
        path: 'index',
        component: AdminIndexPageComponent
      },
      {
        path: 'icons',
        component: AdminIconsPageComponent
      },
      {
        path: 'alias',
        component: AdminAliasPageComponent
      },
      {
        path: 'profile',
        component: AdminProfilePageComponent
      },
      {
        path: 'tag',
        component: AdminTagPageComponent
      },
      {
        path: 'history',
        component: AdminHistoryPageComponent
      },
      {
        path: 'indexeddb',
        component: AdminIndexeddbPageComponent
      },
      {
        path: 'release',
        component: AdminReleasePageComponent
      },
      {
        path: 'sheet',
        component: AdminSheetPageComponent
      },
      {
        path: 'base',
        component: AdminBasePageComponent
      },
      {
        path: 'users',
        component: AdminUsersPageComponent
      },
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarbonComponent,
    ContributorBadgeComponent,
    ContributorPageComponent,
    ContributorsPageComponent,
    IconViewerComponent,
    IconPageComponent,
    IconsPageComponent,
    ViewerPageComponent,
    ResourcesPageComponent,
    DownloadPageComponent,
    IssuesPageComponent,
    GithubPageComponent,
    AdminComponent,
    AdminUserBarComponent,
    AdminSheetPageComponent,
    AdminBasePageComponent,
    AdminLoginPageComponent,
    AdminIconsPageComponent,
    AdminIndexPageComponent,
    AdminAliasPageComponent,
    AdminProfilePageComponent,
    AdminUsersPageComponent,
    AdminTagPageComponent,
    AdminHistoryPageComponent,
    AdminIndexeddbPageComponent,
    AdminReleasePageComponent,
    NotFoundPageComponent,
    ModificationTableComponent,
    IconPreviewComponent,
    IconComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
    MarkdownComponent,
    IconSearchComponent,
    AdminAssignIssueModal,
    AssignUserModal,
    AssignTagModal,
    AssignAliasModal,
    ConfirmModal,
    SelectIconModal
  ],
  entryComponents: [
    AdminAssignIssueModal,
    AssignUserModal,
    AssignTagModal,
    AssignAliasModal,
    ConfirmModal,
    SelectIconModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockInterceptor,
    multi: true,
  }, PromiseCacheService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
