$(document).ready(function(){
  $('.modalButton').on('click', function(){
    $('.modal').css('display', 'block');
  })
  $('#postBook').on('submit', function(e) {
    e.preventDefault();
    window.location = '/profile';
  })

  $.ajax({
<<<<<<< HEAD
    url: '/api/allSchoolCourse',
=======
    url: 'https://buy-it-here.herokuapp.com/api/allSchoolCourse',
>>>>>>> 15935f3a89a85d9e3c943b209f5709162975a386
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
function handleSuccess2(x){
  let courses=$('#courses');
  // console.log(all[x]);
  courses.empty();
  all[x].courses.forEach(function(course){
    //console.log(course.course);
    courses.append(`<option value="${course.id}"> ${course.course.title} </option>`)
  })
  courses.formSelect();
}



});
