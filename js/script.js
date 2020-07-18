window.addEventListener('load',start);

function start(){
    rodaperender();
}


function rodaperender(){
    var rodapediv = document.querySelector('#rodape');
    rodapediv.innerHTML = `<div class="categories-section">
    <div class="container">
        <div class="footer-grids">
            <div class="col-md-4 up wow bounceInLeft animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                <h3>upcome events</h3>
                <div class="up1">
                    <div class="up-img">
                        <img src="images/im1.jpg">
                    </div>
                    <div class="up-text">
                        <a href="#">sagittis magna</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="up1">
                    <div class="up-img">
                        <img src="images/im2.jpg">
                    </div>
                    <div class="up-text">
                        <a href="#">Integer molest</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="up1">
                    <div class="up-img">
                        <img src="images/im3.jpg">
                    </div>
                    <div class="up-text">
                        <a href="#">Fusce suscipit</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="col-md-4 cat wow bounceIn animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                <h3>Categories</h3>
                <ul>
                    <li>Praesent vestim molestie lacus.</li>
                    <li>Cras consequat iaculis lorem</li>
                    <li>Consectetur adipiscing iaculis</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Cum sociis natoque penatibus et magnis </li>
                    <li>Integer molestie lorem</li>
                    <li>lorem,Cras consequat iaculis id vehicula</li>
                </ul>
            </div>
            <div class="col-md-4 cont wow bounceInRight animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                <h3>contact</h3>
                <ul>
                    <li><i class="phone"></i></li>
                    <li><p>1-000-000-0000</p>
                    <p>1-000-000-0000</p></li>
                </ul>
                <ul>
                    <li><i class="smartphone"></i></li>
                    <li><p>Seventh Avenue</p>
                    <p> Chelsea, Manhattan</p></li>
                </ul>
                <ul>
                    <li><i class="message"></i></li>
                    <li><a href="mailto:example@mail.com">bcdefg@hijs.dfh</a>
                    <a href="mailto:example@mail.com">fjashfaf@jkfs.ckd</a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<div class="footer-section">
    <div class="container">
        <div class="footer-top">
            <div class="social-icons wow bounceInLeft animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                <a href="https://www.facebook.com/leaves.eng/" target="_blank"><i class="icon1"></i></a>
                <a href="https://www.instagram.com/leaves.eng/" target="_blank"><i class="icon5"></i></a>
                <a href="https://www.linkedin.com/company/leaveseng/" target="_blank"><i class="icon6"></i></a>
            </div>
        </div>
        <div class="footer-middle wow fadeInDown Big animated animated" data-wow-delay="0.4s">
            <div class="bottom-menu">
                <ul>
                       <li><a href="index.php">Home</a></li><label>|</label>
                    <li><a href="about.php">Quem Somos</a></li><label>|</label>
                      <li><a href="services.php">Serviços</a></li><label>|</label>
                       <li><a href="contact.php">Entre em contato</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom wow bounceInRight animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
            <p> Copyright &copy;2020 - Todos os direitos reservados </p>
            <p>Por<a href="https://linktr.ee/tuliohds" target="target_blank">Tulio Henrique</a> baseado no design de <a href="http://w3layouts.com" target="target_blank">W3Layouts</a> 
            </p>
        </div>
        <script type="text/javascript">
            $(document).ready(function() {
                /*
                var defaults = {
                containerID: 'toTop', // fading element id
                containerHoverID: 'toTopHover', // fading element hover id
                scrollSpeed: 1200,
                easingType: 'linear' 
                };
                */

                $().UItoTop({ easingType: 'easeOutQuart' });

            });
        </script>
        <a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
    </div>
</div`;
}

