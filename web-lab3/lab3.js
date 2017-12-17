
    var img = document.getElementsByClassName('img')[0];
    var commant = img.getElementsByTagName('div');
    var star = img.getElementsByTagName('img');
    var con = false;


    function starPic(num){
        for(var i = 0;i < num;i++)
        {   
            commant[num -1].style.display = 'block';
            if(num < 3)
                star[i].src = "images/star1.png";
            else
                star[i].src = "images/star2.png";
        }
    }

     function hide(num){
        if(con == true)
        {
            con = false;
            return;
        }
        else
        {
           for(var i = 0;i < num;i++)
             {   
                commant[num - 1].style.display = 'none';
                star[i].src = "images/star0.png";
            }     
        }
    }

    function qd(num){
        con = true;
        for(var i = num;i < 5;i++)
        {
        star[i].src = "images/star0.png";
        
        }
        commant[num - 1].style.display = 'none';  
 }
