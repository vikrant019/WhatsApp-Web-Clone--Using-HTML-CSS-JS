var chatMenu = document.getElementById('chatMenu');
var chatSection = document.getElementById('chatSection')

function a2zfun() {
    document.getElementById('a2z').style = "display:inline-block;"
    document.getElementById('mukeshAmbani').style = "none;"
    document.getElementById('sunderp').style = "none;"
    document.getElementById('bcs').style = "display:none;"
    var msgCount = document.getElementById('msga2z').style = "display:none";
    document.getElementById('elon').style = "display:none"
    document.getElementById('iln').style = "display:none"
    document.getElementById('amavle').style = "display:none";
    document.getElementById('karale').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('akshayw').style = "display:none";

    responsive();



}

function responsive() {

    if (window.innerWidth <= 530) {
        // var ContactInfo = document.getElementById('contact-info');
        // contactInfo.style.width = "100%";
        chatSection.style = "display:inline;widht:100%"
        chatMenu.style = "display:none";
    }
}


function closeChatSection() {
    if (window.innerWidth <= 530) {

        chatSection.style = "display:none;widht:100%"
        chatMenu.style = "display:inline";
    }
}

function mukeshAmbani() {
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('sunderp').style = "none;"
    document.getElementById('bcs').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:inline-block;"
    document.getElementById('elon').style = "display:none"
    document.getElementById('iln').style = "display:none"
    document.getElementById('amavle').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('karale').style = "display:none";

    document.getElementById('akshayw').style = "display:none";
    responsive();
}

function SunderFun() {
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('bcs').style = "display:none;"
    document.getElementById('sunderp').style = "display:inline-block;"
    document.getElementById('elon').style = "display:none"
    document.getElementById('iln').style = "display:none"
    document.getElementById('amavle').style = "display:none";
    document.getElementById('karale').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('akshayw').style = "display:none";
    responsive();
}

function bcsFun() {
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:nonenone;"
    document.getElementById('bcs').style = "display:inline-block;"
    document.getElementById('elon').style = "display:none"
    document.getElementById('bcsmsg').style = "display:none";
    document.getElementById('iln').style = "display:none"
    document.getElementById('amavle').style = "display:none";
    document.getElementById('karale').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('akshayw').style = "display:none";
    responsive();
}

function elonFun() {
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:none;"
    document.getElementById('bcs').style = "none;"
    document.getElementById('bcsmsg').style = "display:none";
    document.getElementById('elon').style = "display:inline"
    document.getElementById('iln').style = "display:none"
    document.getElementById('karale').style = "display:none";
    document.getElementById('amavle').style = "display:none";

    document.getElementById('cthathe').style = "display:none";
    document.getElementById('akshayw').style = "display:none";
    responsive();
}

function ilnFun() {
    document.getElementById('iln').style = 'display:inline';
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:none;"
    document.getElementById('bcs').style = "none";
    document.getElementById('bcsmsg').style = "display:none";
    document.getElementById('elon').style = "display:none";
    document.getElementById('ilnmsg').style = "display:none";
    document.getElementById('amavle').style = "display:none";
    document.getElementById('karale').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('amavle').style = "display:none";
    responsive();
}

function amavle() {
    document.getElementById('iln').style = 'display:none';
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:none;"
    document.getElementById('bcs').style = "none";
    document.getElementById('bcsmsg').style = "display:none";
    document.getElementById('elon').style = "display:none";
    document.getElementById('karale').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('akshayw').style = "display:none";
    document.getElementById('amavle').style = "display:inline";
    document.getElementById('amavlemsg').style = "display:none";
    responsive();
}

function akshayw() {
    document.getElementById('iln').style = 'display:none';
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:none;"
    document.getElementById('bcs').style = "none";
    document.getElementById('elon').style = "display:none";
    document.getElementById('akshayw').style = "display:inline";
    document.getElementById('karale').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('amavle').style = "display:none";
    responsive();
}

function cthathe() {
    document.getElementById('iln').style = 'display:none';
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:none;"
    document.getElementById('bcs').style = "none";
    document.getElementById('elon').style = "display:none";
    document.getElementById('akshayw').style = "display:none";
    document.getElementById('cthathe').style = "display:inline";
    document.getElementById('karale').style = "display:none";
    document.getElementById('amavle').style = "display:none";
    responsive();
}

function karale() {
    document.getElementById('iln').style = 'display:none';
    document.getElementById('a2z').style = "display:none;"
    document.getElementById('mukeshAmbani').style = "display:none;"
    document.getElementById('sunderp').style = "display:none;"
    document.getElementById('bcs').style = "none";
    document.getElementById('elon').style = "display:none";
    document.getElementById('akshayw').style = "display:none";
    document.getElementById('cthathe').style = "display:none";
    document.getElementById('karale').style = "display:inline";
    document.getElementById('amavle').style = "display:none";
    responsive();
}

function Readmore() {
    var Readmore = document.getElementById('readMore');
    Readmore.style = "display:inline-block";

    document.getElementById('reamM').style = "display:none";
}

function Readmore1() {
    var Readmore1 = document.getElementById('readMore1');
    Readmore1.style = "display:inline-block";

    document.getElementById('reamM1').style = "display:none";
}

function imgFun() {
    var img = document.getElementById('popupp');
    img.style = "display:inline;";
    var popimg1 = document.getElementById('popimg1');
    popimg1.setAttribute("src", "./img/sample2.jpeg");
}

function imgFun2() {
    var img = document.getElementById('popupp');
    img.style = "display:inline";
    var popimg1 = document.getElementById('popimg1');
    popimg1.setAttribute("src", "./img/sample1.jpeg");
}

function close1() {
    var img = document.getElementById('popupp').style = "display:none"



}

function settingmenu() {


    var menuBox = document.getElementById('settingmenu1');
    if (menuBox.style.display == "block") {
        menuBox.style.display = "none";
    } else {
        menuBox.style.display = "block";

    }
}

function ShowDp() {
    var myProfile = document.querySelector('.my-profile');
    myProfile.style = "left:0;";
    if (window.innerWidth <= 530) {
        myProfile.style = "width:100%;left:0";
    }




}

function closeDp() {
    var myProfile = document.querySelector('.my-profile');
    myProfile.style = "left:-30%;;";


}


const SearchFun = () => {
    var searchChat1 = document.getElementById('searchChat').value.toUpperCase();

    let chat1 = document.getElementsByClassName('chat1');

    var name = document.getElementsByClassName('contact-name');

    for (var i = 0; i < 10; i++) {

        var textvalue = name[i];
        console.log(textvalue);

        if (textvalue) {

            let innerValue = textvalue.innerHTML || textvalue.textContent;
            // console.log(innerValue.toUpperCase().indexOf(searchChat1))
            if (innerValue.toUpperCase().indexOf(searchChat1) > -1) {
                chat1[i].style.display = "";
            } else {
                chat1[i].style = "display:none";
            }

        }

    }

}

var ContactImage = document.getElementById('Contact-image');
var contactName = document.getElementById('contact-name');
var grpDiscussion = document.getElementById('grp-discussion');
var grpAbout = document.getElementById('grp-about');
var grpParticipant = document.getElementById('grp-participant');

var contactInfo = document.getElementById('contact-info');
var chatSection = document.getElementById('chatSection');
var chating = document.getElementsByClassName('chating');


function a2zcontact() {
    ContactImage.setAttribute('src', './img/a2z2.jpg');
    contactName.innerHTML = 'A2Z-T-B-17';
    grpParticipant.innerHTML = 'Group. 148 Participants';
    grpAbout.innerHTML = 'Add Group description';
    grpDiscussion.innerHTML = 'Group created by A2Z Infotechs, on 03/03/20022 at 10:00 am';
    contactInfo.style = "right:0%";

    chating[0].style = "width:45%";

    if (window.innerWidth <= 530) {
        chatSection.style = "display:none";
        contactInfo.style.width = "100%"
        document.getElementById('a2z').style = "display:none";
        // chatSection.style = "display:inline;widht:100%";
        chatMenu.style = "display:none";
        chating[0].style = "width:0";
    }


}

function contactClose() {
    contactInfo.style = "right:-25%";
    chatSection.style = "width:70%";

    for (var i = 0; i < 10; i++) {
        chating[i].style = "width:70%";
    }
    if (window.innerWidth <= 530) {
        chatMenu.style = "display:inline";
    }
}

function mukeshContact() {

    ContactImage.setAttribute('src', './img/ambani.jpg');
    contactName.innerHTML = 'Mukesh Ambani';
    grpParticipant.innerHTML = '+91 88966 27112';
    grpAbout.innerHTML = 'About';
    grpDiscussion.innerHTML = 'Available';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[1].style = "width:45%";
    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }


}

function sunderContact() {
    ContactImage.setAttribute('src', 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg');
    contactName.innerHTML = 'Sundar Pichai';
    grpParticipant.innerHTML = '+91 93221 23512';
    grpAbout.innerHTML = 'About';
    grpDiscussion.innerHTML = 'Available';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[2].style = "width:45%";
    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}

function tyContact() {
    ContactImage.setAttribute('src', './img/clg.png');
    contactName.innerHTML = 'TYBSc(C.S.)Div-A 21-22';
    grpParticipant.innerHTML = 'Group · 129 participants';
    grpAbout.innerHTML = 'Add Group description';
    grpDiscussion.innerHTML = 'Group created by +91 70381 29328, on 20/07/2019 at 8:06 am';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[3].style = "width:45%";
    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}

function elonContact() {
    ContactImage.setAttribute('src', 'https://media.wired.com/photos/5bae7a3f6278de2d2123479b/master/pass/ElonMusk_18261092524731.jpg');
    ContactImage.style = "height:200px; width:60%"
    contactName.innerHTML = 'Elon Musk';
    grpParticipant.innerHTML = '+91 99992 21101';
    grpAbout.innerHTML = 'About';
    grpDiscussion.innerHTML = 'Busy';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[4].style = "width:45%";
    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}

function ilnContanct() {
    ContactImage.setAttribute('src', './img/iln.png');
    // ContactImage.style = "height:200px; width:60%"
    contactName.innerHTML = 'I ❤️ NGR';
    grpParticipant.innerHTML = '+91 89560 76417';
    grpAbout.innerHTML = 'About';
    grpDiscussion.innerHTML = 'Hey there! I am using WhatsApp.';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[5].style = "width:45%";

    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}



function mavleContact() {
    ContactImage.setAttribute('src', './img/maharaj1.png');
    // ContactImage.style = "height:200px; width:60%"
    contactName.innerHTML = '⛳आम्ही मावळे शिवरायांचे⛳🏇';
    grpParticipant.innerHTML = 'Group: 95 participants';
    grpAbout.innerHTML = 'About';
    grpDiscussion.innerHTML = '';

    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[6].style = "width:45%";

    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}

function akshayContact() {
    ContactImage.setAttribute('src', './img/single.jpg');
    // ContactImage.style = "height:200px; width:60%"
    contactName.innerHTML = 'Akshay Waykar';
    grpParticipant.innerHTML = '+91 78342 90875';
    grpAbout.innerHTML = 'About';

    grpDiscussion.innerHTML = 'Busy';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[7].style = "width:45%";

    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}

function chaityanContact() {
    ContactImage.setAttribute('src', './img/single.jpg');
    // ContactImage.style = "height:200px; width:60%"
    contactName.innerHTML = 'Chaitanya Tathe';
    grpParticipant.innerHTML = '+91 88342 70875';
    grpAbout.innerHTML = 'About';

    grpDiscussion.innerHTML = 'Available';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[8].style = "width:45%";

    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}

function karaleContact() {
    ContactImage.setAttribute('src', './img/single.jpg');
    // ContactImage.style = "height:200px; width:60%"
    contactName.innerHTML = 'Avdhut Karale';
    grpParticipant.innerHTML = '+91 89842 10875';
    grpAbout.innerHTML = 'About';

    grpDiscussion.innerHTML = 'Available';
    contactInfo.style = "right:0%";
    chatSection.style = "width:45%";
    chating[9].style = "width:45%";

    if (window.innerWidth <= 530) {
        var ContactInfo = document.getElementById('contact-info');
        contactInfo.style.width = "100%"
    }
}