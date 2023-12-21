import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'community-detail',
    loadChildren: () => import('./pages/community-detail/community-detail.module').then( m => m.CommunityDetailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'trainers',
    loadChildren: () => import('./pages/trainers/trainers.module').then( m => m.TrainersPageModule)
  },
  {
    path: 'trainer-profile/:id',
    loadChildren: () => import('./pages/trainer-profile/trainer-profile.module').then( m => m.TrainerProfilePageModule)
  },
  {
    path: 'course-detail/:id',
    loadChildren: () => import('./pages/course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
  },
  {
    path: 'workout-tips',
    loadChildren: () => import('./pages/workout-tips/workout-tips.module').then( m => m.WorkoutTipsPageModule)
  },
  {
    path: 'workouttip-detail/:id',
    loadChildren: () => import('./pages/workouttip-detail/workouttip-detail.module').then( m => m.WorkouttipDetailPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./pages/new-account/new-account.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
