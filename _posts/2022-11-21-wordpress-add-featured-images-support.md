---
layout: posts
permalink: /wordpress-add-featured-images-support/
---

<h2>How to add featured images support in wordpress</h2>

<p>To add featured images support in your Wordpress theme, paste the following code in your functions.php</p>

<xmp>	
add_action( 'after_setup_theme', 'mytheme_setup' );
function mytheme_setup() {
	add_theme_support( 'post-thumbnails' );
}
</xmp>

<p>And, now paste this code in your theme file where you want the featured image to appear.</p>

<xmp>
<?php the_post_thumbnail(); ?>
</xmp>

<p>Alternatively, you can also use this code in your theme file.</p>

<xmp>
<?php
if( has_post_thumbnail() ):
echo get_the_post_thumbnail();
endif;
?>
</xmp>

<h2>Disabling auto-resizing of uploaded images</h2>

<p>Wordpress generally resizes uploaded images (featured images or images uploaded in posts) into different sizes. This creates multiple copies of the same image which makes your server take more space due to duplicate data or image files. Today, when most websites are responsive there is no need to create different sizes of same image. To prevent that paste the following code in your functions.php file.</p>

<xmp>
function remove_image_sizes( $sizes, $metadata ) {
    return [];
}
add_filter( 'intermediate_image_sizes_advanced', 'remove_image_sizes', 10, 2 );
</xmp>

<p>That's all folks.</p>

<p>Shoot me a meesage if the above mentioned codes are not working and I will update my blog post.</p>