$(document).ready(function(){
  $('.btn').on('click', function(e){
    $('.modalContainer').addClass('modalopen');
  });
  $('#xClose').on('click', function(e) {
      $('.modalContainer').removeClass('modalopen')
  })

  $('#postBook').on('submit', function(e) {
    e.preventDefault();
    window.location = '/profile';
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
function handleSuccess2(sc){
  let courses=$('#courses');
  // console.log(all[x]);
  courses.empty();
  all[sc].courses.forEach(function(course){
    //console.log(course.course);
    courses.append(`<option value="${course.id}"> ${course.course.title} </option>`)
  })
  courses.formSelect();
}
