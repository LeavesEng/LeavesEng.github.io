window.addEventListener('load',start);

function start(){
    rodaperender();
}


function rodaperender(){
    var rodapediv = document.querySelector('#rodape');
    rodapediv.innerHTML = `<div class="categories-section">
                            <div class="container text-center">
                                <div class="footer-grids">
                                    <div class="col-md-12 text-center">
                                        <img class="responsive" src="images/logorodape.png" style="max-width: 280px;padding-bottom: 35px;" alt="Tecnologia e Inovação no campo" title="Tecnologia e Inovação no campo">
                                    </div>
                                    <div class="col-md-4 cont wow bounceInLeft animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                                        <h3>Localização</h3>
                                            <ul>
                                                <li><i class="smartphone"></i></li>
                                                <li>
                                                    <a href="https://www.google.com/maps/place/Leaves+Engenharia+-+Laborat%C3%B3rio+de+An%C3%A1lise+de+Solos+e+Ambientais/@-18.963255,-49.437693,16z/data=!4m5!3m4!1s0x0:0xa6bfa3b0187deca!8m2!3d-18.9632546!4d-49.4376929?hl=pt-BR" target="_blank">
                                                        <p>Rua RD 14, Numero 50 - I</p>
                                                        <p> Res. Drummond, Ituiutaba</p>
                                                        <p> Minas Gerais, 38302-294</p>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 cont wow bounceIn animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                                        <h3>Emails</h3>
                                        <ul>
                                            <li><i class="message"></i></li>
                                            <li>
                                                <a href="leaves_engenharia@yahoo.com">leaves_engenharia@yahoo.com</a>
                                                <a href="eng.leaves@gmail.com">eng.leaves@gmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 cont wow bounceInRight animated" data-wow-delay="0.4s" style="visibility: visible; -webkit-animation-delay: 0.4s;">
                                        <h3>Telefones</h3>
                                        <ul>
                                            <li><i class="phone"></i></li>
                                            <li><p>(34) 3262-4557</p>
                                            <p>(34) 99878-4557</p></li>
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
                                            <li><a href="index.html">Home</a></li><label>|</label>
                                            <li><a href="about.html">Quem Somos</a></li><label>|</label>
                                            <li><a href="services.html">Serviços</a></li><label>|</label>
                                            <li><a href="laboratorio.html">Laboratório</a></li><label>|</label>
                                            <li><a href="contact.html">Entre em contato</a></li>
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

