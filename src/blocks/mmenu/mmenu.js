var mobileMenu = function(){
    var animateSpeed = 300
        menuIcon = $(".mmenu-trigger"),
        menuPanel = $(".mmenu"),
        menuPanelWidth = "100%";

    var mobileMenuToggle = function(){
        if (menuPanel.hasClass("opened")){
            menuPanel.animate({
                right: "-" + menuPanelWidth
            }, animateSpeed);
            menuPanel.removeClass("opened");
        } else {
            menuPanel.animate({
                right: "0"
            }, animateSpeed);
            menuPanel.addClass("opened");
        };
    };

    menuIcon.click(function(e){
        e.preventDefault();
        mobileMenuToggle();
        return false;
    });

    $(".mmenu .menu__link").click(function(){
        mobileMenuToggle();
        return true;
    });

    $(document).click(function(e){
        var result = true;
        if (menuPanel.hasClass("opened")){
            e.preventDefault();
            mobileMenuToggle();
            result = false;
        };
        return result;
    });

};

$(document).ready(mobileMenu);
