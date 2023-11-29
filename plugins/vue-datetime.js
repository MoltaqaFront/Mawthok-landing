import Vue from 'vue';

if (process.browser) {
  import('vue-datetime-js')
  .then((VueDatetimeJs) => {
    Vue.component('date-picker', VueDatetimeJs);

    // Vue.use(VueDatetimeJs, {
    //   name: 'date-picker',
    //   props: {
    //     inputFormat: 'YYYY-MM-DD HH:mm',
    //     format: 'jYYYY-jMM-jDD HH:mm',
    //     editable: false,
    //     inputClass: 'form-control my-custom-class-name',
    //     placeholder: 'Please select a date',
    //     altFormat: 'YYYY-MM-DD HH:mm',
    //     color: '#00acc1',
    //     autoSubmit: true,
    //   }
    // });
  });
}