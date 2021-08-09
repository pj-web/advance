//<![CDATA[
    var remain_bv   = 549668;
    function parseTime_bv(timestamp){
        if (timestamp < 0) timestamp = 0;
     
        var day = Math.floor( (timestamp/60/60) / 24);
        var hour = Math.floor(timestamp/60/60);
        var mins = Math.floor((timestamp - hour*60*60)/60);
        var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
        var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
     
        $('span.countdown__item-day').text(day);
        $('span.countdown__item-hour').text(left_hour);
     
        if(String(mins).length > 1)
            $('span.countdown__item-minute').text(mins);
        else
            $('span.countdown__item-minute').text("0" + mins);
        if(String(secs).length > 1)
            $('span.countdown__item-second').text(secs);
        else
            $('span.countdown__item-second').text("0" + secs);
         
    }
     
    jQuery(function() {
        setInterval(function(){
            remain_bv = remain_bv - 1;
            parseTime_bv(remain_bv);
            if(remain_bv <= 0){
                alert('Hello');
            }
        }, 1000);
    });
    //]]>