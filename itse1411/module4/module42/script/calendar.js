/**
 * Created by Roy on 7/18/2014.
 */
// This is step 3 on page 326 (I am adding the parameter whichMonth here rather than later when the author tells you to do it.)
function displayCalendar(whichMonth) {
    calendarWin = window.open("", "CalWindow", "status=no,resizable=yes,width=400,height=220,left=200,top=200");
    calendarWin.focus();
    calendarWin.document.write("<!DOCTYPE html PUBLIC '-\/\/W3C\/\/DTD XHTML 1.0 Strict\/\/EN' ");
    calendarWin.document.write("'http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-strict.dtd'>");
    calendarWin.document.write("<html xmlns='http:\/\/www.w3.org\/1999\/xhtml'>");
    calendarWin.document.write("<head><title>Coast City Windsurfing<\/title>");
    calendarWin.document.write("<meta http-equiv='content-type' content='text\/html;charset=iso-8859-1' \/>");
    calendarWin.document.write("<link rel='stylesheet' href='js_styles.css' type='text\/css' \/><\/head><body>");
    calendarWin.document.write("<table cellspacing='0' border='1' width='100%'>");
    // This ends step 3 on page 326 -- the closing brace goes at the end of the function

    // This is step 4 on page 326
    calendarWin.document.write("<colgroup span='7' width='50' \/>");
    calendarWin.document.write("<tr><td colspan='7' align='center'><strong>" + monthArray[month] + " " + dateObject.getFullYear() + "<\/strong><\/td></tr>");
    calendarWin.document.write("<tr align='center'><td>Sun<\/td><td>Mon<\/td><td>Tue<\/td><td>Wed<\/td><td>Thu<\/td><td>Fri<\/td><td>Sat<\/td><\/tr>");
    calendarWin.document.write("<tr align='center'>");
    // This ends step 4 on page 326

    // This is step 5 on page 327
    dateObject.setDate(1);
    var dayOfWeek = dateObject.getDay();
    for (var i=0; i<dayOfWeek; ++i) {
        calendarWin.document.write("<td>&nbsp;<\/td>");
    }
    // This ends step 5 on page 327

    // This is step 6 on page 327
    var daysWithDates = 7 - dayOfWeek;
    var dateCounter = 1;
    for (var i=0; i<daysWithDates; ++i) {
        var curDate = monthArray[month] + " " + dateCounter + ", " + dateObject.getFullYear();
        calendarWin.document.write("<td><a href='' onclick='self.opener.document.forms[0].reservationDate.value=\"" + curDate + "\";self.close()'>" + dateCounter + "<\/a><\/td>");
        ++dateCounter;
    }
    // This ends step 6 on page 327


    // This is step 7 on page 328
    var numDays = 0;
    // January, March, May, July, August, October, December
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)
        numDays = 31;
    // February
    if (month == 1)
        numDays = 28;
    // April, June, September, November
    else if (month == 3 || month == 5 || month == 8 || month == 10)
        numDays = 30;
    // This ends step 7 on page 328

    //This is step 8 on page 328
    for (var rowCounter = 0; rowCounter < 5; ++rowCounter) {
        var weekDayCounter = 0;
        calendarWin.document.write("<tr align='center'>");
        // This ends step 8 on page 328  -- the last line and closing brace are now below step 9.

        // This is step 9 on pages 328 - 329.  After the href looks like a double quote on the monitor, but it is 2 single quotes.
        while (weekDayCounter < 7) {
            var curDate = monthArray[month] + " " + dateCounter + ", " + dateObject.getFullYear();
            if (dateCounter <= numDays)
                calendarWin.document.write("<td><a href='' onclick='self.opener.document.forms[0].reservationDate.value=\"" + curDate + "\";self.close()'>" + dateCounter + "<\/a><\/td>");
            else
                calendarWin.document.write("<td>&nbsp;<\/td>");
            ++weekDayCounter;
            ++dateCounter;
        }
        // This ends step 9 on pages 328 - 329

        // The next 2 lines of code was given in step 8 but is to be moved below the code in step 9
        calendarWin.document.write("<\/tr>");
    }

    // This is step 10 on page 329
    calendarWin.document.write("<\/table><\/body><\/html>");
    calendarWin.document.close();
    // This ends step 10 on page 329

    // This closes the function which was originally given in step 3 on page 326
}
