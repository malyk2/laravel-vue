import './bootstrap.js';
import App from './App';
import BootstrapVue from 'bootstrap-vue'
import router from './routes';

Vue.use(BootstrapVue);

let publicPages = ['/pages/login'];

router.beforeEach((to, from, next) => {
    next();
    //test editor1

    
//    if (authUser) {
//        next();
//    } else {
//        //$http.get('auth.user').then('response' => ());
//        /*$.ajax({
//           url: 'test'
//        })*/;
//        router.push('/pages/login');
//    }
//    //console.log(JSON.parse(sessionStorage.getItem('user')));
//    //console.log(sessionStorage.user);
//    if(publicPages.includes(to.fullPath)) {
//        /*sessionStorage.setItem('user', JSON.stringify({
//            asd: 'zxczxc'
//        }));*/
//        next();
//    } else {
//        router.push('/pages/login');
//    }
});

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: {
        App
    }
});