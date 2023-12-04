document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {

        try {
            var navBtns = document.getElementsByClassName('MenuLink');
            for (var i = 0; i < navBtns.length; i++) {
                if (navBtns[i].getAttribute('href') === 'isolated.html') {
                    navBtns[i].style.display = "none";
                }
                if (navBtns[i].getAttribute('href') === '#/dashboard') {
                    // navBtns[i].style.display="none";
                    navBtns[i].style.marginLeft = '0';
                }
            }
        } catch (error) {
            console.log("error");
        }
        try{
            document.getElementsByClassName('Menu__logo-link')[0].getElementsByTagName('img')[0].setAttribute('alt','Grux');
        }catch(error){

        }
        try {
            var navBtnsInner = document.getElementsByClassName('Menu__link-inner');

            for (var i = 0; i < navBtnsInner.length; i++) {

                if (navBtnsInner[i].getElementsByTagName('a')[0].getAttribute('href') === '#/dashboard') {
                    // navBtns[i].style.display="none";
                    navBtnsInner[i].style.marginLeft = '0px';

                }
            }
        } catch (error) {
            console.log("error");
        }
        try {
            var backBtn = document.getElementsByClassName('Menu__back-button')[0];
            var Imgsrc = backBtn.getElementsByTagName('img')[0];
            Imgsrc.setAttribute('src', 'img/logo.png');
            Imgsrc.style.width = "40px";
            Imgsrc.style.height = "auto";
            Imgsrc.style.marginTop = "8px";
            Imgsrc.style.marginBottom = "5px";
            Imgsrc.style.pointerEvents = "none";
            backBtn.style.pointerEvents = "none";
            backBtn.style.display = "block";
            Imgsrc.style.display = "block";

            // console.log(backBtn)
        } catch (error) {

        }

        try {
            var mobNavBtns = document.getElementsByClassName('MobileContent__link');
            for (var i = 0; i < mobNavBtns.length; i++) {
                if (mobNavBtns[i].getAttribute('href') === 'isolated.html') {
                    mobNavBtns[i].style.display = "none";
                }
            }
        } catch (error) {
            console.log("error")
        }


        try {
            var bottomLink = document.getElementsByClassName('DepositBorrowMainWrapper__changeMarket-inner')[0];
            bottomLink.style.display = 'none';
        } catch (error) {

        }

        try {
            var tableItems = document.getElementsByClassName('TableItemWrapper');
            for (var i = 0; i < tableItems.length; i++) {
                if (tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') === 'sAVAX') {
                    tableItems[i].style.display = 'none';
                } else if (tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') === 'AVAX') {
                    tableItems[i].style.display = 'none';
                } else if (tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') != 'AVAX' && tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') != 'sAVAX') {
                    tableItems[i].style.display = 'flex';

                }
            }
            // document.getElementsByClassName('TableItemWrapper')[4].style.display='none';

        } catch (error) {

        }
        try {
            var tableItems = document.getElementsByClassName('MobileCardWrapper');
            for (var i = 0; i < tableItems.length; i++) {
                if (tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') === 'sAVAX') {
                    tableItems[i].style.display = 'none';
                } else if (tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') === 'AVAX') {
                    tableItems[i].style.display = 'none';
                } else if (tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') != 'AVAX' && tableItems[i].getElementsByClassName('TokenIcon__image')[0].getAttribute('alt') != 'sAVAX') {
                    tableItems[i].style.display = 'block';

                }
            }
            // document.getElementsByClassName()[0].style.display='none';
            // document.getElementsByClassName('MobileCardWrapper')[4].style.display='none';

        } catch (error) {

        }


        try {
            var currencyOverview = document.getElementsByClassName('CurrencyOverview__captionLink');
            for (var i = 0; i < currencyOverview.length; i++) {
                if (currencyOverview[i].getElementsByTagName('p')[0].innerText === 'DAI (DAI.e) Reserve Overview') {
                    currencyOverview[i].getElementsByTagName('p')[0].innerText = 'DAI.e Reserve Overview'
                }
            }

        } catch (error) {

        }


        try {
            var tokenItem = document.getElementsByClassName('TokenIconWithFullName');
          
            for (var i = 0; i < tokenItem.length; i++) {
                if (tokenItem[i].getElementsByTagName('img')[0].getAttribute('alt') === 'DAI.e') {
                    tokenItem[i].getElementsByTagName('p')[0].innerHTML = '<b>DAI.e</b>'
                }
            }
        } catch (error) {

        }



        var logo = document.getElementsByClassName('Menu__logo-inner')[0];












        



        try {
            document.getElementsByClassName('Row__title-inner')[0].getElementsByClassName('Row__title')[0].innerText = "Your Balance in Grux"
        } catch (error) {
            
        }
        try {
            document.getElementsByClassName('CurrencyScreenWrapper__mobileInner')[0].getElementsByClassName('Row__title-inner')[0].getElementsByClassName('Row__title')[0].innerText = "Your Balance in Grux"
            
        } catch (error) {
            
        }








    }, 1)

});



















