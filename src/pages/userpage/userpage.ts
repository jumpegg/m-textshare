import { Component, ViewChild } from '@angular/core';
import { 
	IonicPage, 
	NavController, 
	NavParams,
	Platform,
	MenuController,
	Nav
 } from 'ionic-angular';
import { UserStdAdminPage } from '../user-std-admin/user-std-admin';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Generated class for the UserpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserpagePage {
	@ViewChild(Nav) nav: Nav;

	rootPage = UserStdAdminPage;
	pages: Array<{title: string, component: any}>;

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public menu: MenuController,
		public platform: Platform,
		public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
			this.initializeApp();
			
			this.pages = [
				{title: 'stdAdmin', component: UserStdAdminPage},
				{title: 'stdAdmin', component: UserStdAdminPage}
			];
  }

	initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

	openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
