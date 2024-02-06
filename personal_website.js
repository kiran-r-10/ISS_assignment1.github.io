var flag=1;
function toggle()
{
    flag=!flag;
    toggleMode();
}

function toggleMode()
{
    if(flag==1)
    {
        document.body.style.backgroundImage= "url('bg2.jpeg')";
        document.getElementById("abtme").style.color= "rgb(235, 198, 33)";
        document.getElementById("eduh").style.color= "rgb(235, 198, 33)";
        document.getElementById("achimnth").style.color= "rgb(235, 198, 33)";
        document.getElementById("skillh").style.color= "rgb(235, 198, 33)";
        document.getElementById("edup").style.color="white"
        document.getElementById("achimntp").style.color="white"
        document.getElementById("skillp").style.color="white"
        document.getElementById("abtmep").style.color="white"
        document.getElementById("toggle").innerHTML="Light Mode"
        document.getElementById("toggle").style.color="rgb(235, 198, 33)";
        // document.getElementById("toggle").style.borderColor="rgb(235, 198, 33)"
        var navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach(function(link) {
            link.style.color = "rgb(235, 198, 33)";
            link.style.borderBottomColor = "rgb(235, 198, 33)";
        });
    }
    else if(flag==0)
    {
        document.body.style.backgroundImage= "url('bg.jpeg')";
        document.getElementById("abtme").style.color= "rgb(235, 198, 33)";
        document.getElementById("eduh").style.color= "rgb(235, 198, 33)";
        document.getElementById("achimnth").style.color= "rgb(235, 198, 33)";
        document.getElementById("skillh").style.color= "rgb(235, 198, 33)";
        document.getElementById("edup").style.color="black"
        document.getElementById("achimntp").style.color="black"
        document.getElementById("skillp").style.color="black"
        document.getElementById("abtmep").style.color="black"
        document.getElementById("toggle").innerHTML="Dark Mode"
        document.getElementById("toggle").style.color="rgb(235, 198, 33)";
        // document.getElementById("toggle").style.borderColor="#0496C7"
        var navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach(function(link) {
            link.style.color = "rgb(235, 198, 33)";
            link.style.borderBottomColor = "rgb(235, 198, 33)";
        });
    }
}
toggleMode()