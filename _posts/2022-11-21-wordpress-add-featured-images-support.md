---
layout: posts
permalink: /wordpress-add-featured-images-support/
auto_ids: false
---

# How to add featured images support in wordpress
<span>Posted On {{ page.date | date: '%-d %B %Y' }}</span>

To add featured images support in your Wordpress theme, paste the following code in your functions.php

<xmp>	
add_action( 'after_setup_theme', 'mytheme_setup' );
function mytheme_setup() {
	add_theme_support( 'post-thumbnails' );
}
</xmp>

And, now paste this code in your theme file where you want the featured image to appear.

<xmp>
<?php the_post_thumbnail(); ?>
</xmp>

Alternatively, you can also use this code in your theme file.

<xmp>
<?php
if( has_post_thumbnail() ):
echo get_the_post_thumbnail();
endif;
?>
</xmp>

## Disabling auto-resizing of uploaded images

Wordpress generally resizes uploaded images (featured images or images uploaded in posts) into different sizes. This creates multiple copies of the same image which makes your server take more space due to duplicate data or image files. Today, when most websites are responsive there is no need to create different sizes of same image. To prevent that paste the following code in your functions.php file.

<xmp>
function remove_image_sizes( $sizes, $metadata ) {
    return [];
}
add_filter( 'intermediate_image_sizes_advanced', 'remove_image_sizes', 10, 2 );
</xmp>

That's all folks.

Shoot me a meesage if the above mentioned codes are not working and I will update my blog post.