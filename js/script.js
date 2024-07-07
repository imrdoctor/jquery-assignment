$(document).ready(function () {
    // Start Side Bar
    $(".sidebar .icon-open").on("click", function () {
        if ($(".sidebar").css("left") !== "0px") {
            $(".sidebar").animate({ left: `0px` }, 500);
        }
    });
    $(".sidebar .icon-close").on("click", function () {
        let sidebarWidth = $(".sidebar").innerWidth();
        if ($(".sidebar").css("left") == "0px") {
            $(".sidebar").animate({ left: `-${sidebarWidth}px` }, 500);
        }
    });
    //End Side Bar

    // Start FAQ
    $(".faq .item").each(function () {
        let $data = $(this).find(".data");
        if ($(this).hasClass("active")) {
            $data.slideDown(600);
        } else {
            $data.slideUp(500);
        }
    });
    $(".faq .item").on("click", function () {
        let $data = $(this).find(".data");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".data").slideUp(500);
        } else {
            $(".faq .item.active").removeClass("active").find(".data").slideUp(500);
            $(this).addClass("active").find(".data").slideDown(600);
        }
    });
    // End FAQ

    // Start counter
    let countdateObj = new Date("October 5, 2024 00:20:05");
    let countdate = countdateObj.getTime();
    let day = countdateObj.getDate();
    let month = countdateObj.getMonth() + 1;
    let year = countdateObj.getFullYear();
    let formattedDate = `${day}-${month}-${year}`;
    $(".time").text("The event will start at " + formattedDate);
    let counter = setInterval(() => {
        let now = new Date().getTime();
        let distance = countdate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            console.log("hi");
            $(".endtime").removeClass("d-none");
            $(".endtime").addClass("d-block");
        }
    });
    // End counter

    // Start Footer max chars
    let maxChars = 100;
    $('#message').on('input', function () {
        let charCount = $(this).val().length;
        let remainingChars = maxChars - charCount;

        if (remainingChars >= 0) {
            $('#charCount').html(`<span class="text-danger">${remainingChars}</span> Character Remaining`);
        } else {
            $('#charCount').html(`<span class="text-danger">your available character finished </span>Characyer Reamining`);
        }
    })
    // End Footer max chars

    // Start Nav Slide To section
    $(".sidebar a").on('click', function(e) {
        let targetId = $(e.target).attr("href"); 
        let sectionTop = $(targetId).offset().top; 
        $("html, body").animate({scrollTop: sectionTop}, 500); 
    });
    // End Nav Slide To section
});