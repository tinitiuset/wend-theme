<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'wend'); ?></a>
    <?php
    /**
     * The header for our Front Page
     * @package WEND
     */
    wp_enqueue_script("jquery");
    wp_enqueue_style('front-page', get_template_directory_uri() . '/front.css', array(), _S_VERSION);
    wp_enqueue_script('front-page-js', get_template_directory_uri() . '/js/front-page.js', array(), _S_VERSION, true);
    ?>
    <main id="primary" class="site-main">
        <header id="header">
            <div class="vert-text">
                <div class="p-img">
                    <img src="https://res.cloudinary.com/pashagord/image/upload/v1468545314/Portfolio/logos/codepen_logo.png"/>
                </div>
                <h1 id="typer-size">
                    <span id="typed"></span>
                    <div id="typed-strings">
                        <p>¿Salimos hoy?</p>
                        <p>¿Hoy? ¿Qué hay?</p>
                        <p>¿A dónde?</p>
                        <p>¿Quien va?</p>
                        <p>"Los mismos 4 gatos haciendo lo mismo de siempre"</p>
                    </div>
                </h1>
                <h3>APP WEND</h3>
                <a href="#contacts" class="scroll-down nav-link"></a>
            </div>
        </header>
        <footer id="contacts">
            <div class="container">
                <div class="row">
                    <div class="text-center">
                        <span class="h3">¡Sé el primero en enterarte!</span>
                        <?php echo do_shortcode('[contact-form-7 id="7" title="Email Sub Form"]'); ?>
                    </div>
                </div>
            </div>
        </footer>
    </main>
    <?php
    //get_sidebar();
    ?>
</div>

<?php wp_footer(); ?>

</body>
</html>
