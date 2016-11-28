// jQuery 讀取 json檔
// var testRun = function ()
//     {
//         $.getJSON ("data.json", function (data)
//         {
//             $.each (data, function (i, item)
//             {
//                 $ ("#disp").append ("<p>" + item.name + "<p>" );
//                 $ ("#disp1").append ("<p>" + item.sex + "</p>");
//                 $ ("#disp2").append ("<p>" + item.email+ "</p>");
//                 $ ("#disp3").append ("<p>" + item.birthday+ "</p>");
//                 $ ("#disp4").append ("<p>" + item.tel + "</p>");
//
//             });
//         });
//     }
var myRun = document.getElementById('runTime');

myRun.addEventListener('click', function() {
  $.getJSON ("data.json", function (data)
          {
              $.each (data, function (i, item)
              {
                  $ ("#disp").append ("<p>" + item.name + "<p>" );
                  $ ("#disp1").append ("<p>" + item.sex + "</p>");
                  $ ("#disp2").append ("<p>" + item.email+ "</p>");
                  $ ("#disp3").append ("<p>" + item.birthday+ "</p>");
                  $ ("#disp4").append ("<p>" + item.tel + "</p>");

              });
          });
}, false);
