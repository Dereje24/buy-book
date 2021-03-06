$(document).ready(function(){
  let all;
  $('.carousel').carousel({
    padding: 200
  });

  $('#searchSubmit').on('click', function(e){
    e.preventDefault();
    if(sessionStorage.getItem('status') !== true){
      window.location='/login';
    } else if (sessionStorage.getItem('status') === true){
      window.location='/profile';
    }
  });

  $.ajax({
    url: '/api/allSchoolCourse',
    method: 'GET',
    success:handleSuccess,
    error: console.log('err')
  });
  $('#schools').on('change',function(){
    let school = $(this).val().toString();
    handleSuccess2(school)
  })
});
function handleSuccess(data){
  all = data.all;
  let selecter = $('#schools');
  let schools = Object.keys(data.all);
  schools.forEach(function(school){
  selecter.append(`<option value="${school}"> ${school} </option>`)
  })
  $('select').formSelect();
}
function handleSuccess2(cors){
  let courses=$('#courses');
  // console.log(all[x]);
  courses.empty();
  all[cors].courses.forEach(function(course){
    //console.log(course.course);
    courses.append(`<option value="${course.id}"> ${course.course.title} </option>`)
  })
  courses.formSelect();
}
