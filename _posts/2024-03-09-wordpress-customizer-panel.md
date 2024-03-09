---
layout: posts
permalink: /wordpress-customizer-panel/
---

<h1>How to add featured images support in wordpress</h1>
<p class="date">Posted On {{ page.date | date: '%-d %B %Y' }}</p>

The value of a particular setting is stored inside the <b>wp_options</b> table inside the WordPress database.

The Theme Customization API is the only way to interact with the Customize Panel.

The Theme Customization API allows us to:

<ul>
<li>Modify existing default Customize Panel Sections by allowing us to modify the section properties like Title, description, etc.</li>
<li>Create new sections</li>
<li>Create new panels and put sections inside them</li>
<li>Create a new set of setting and their controls using default HTML5 form fields</li>
<li>Create custom and advanced controls that are a mash-up of default HTML5 form fields</li>
</ul>

The only way we can make use of the Theme Customization API is with the help of <b>customize_register</b> Action Hook.

First of all, go ahead and create a new directory called <b>customize</b> at the root level of our theme and then create a new file inside it called <b>customize.php.</b>

You can name the directory and the file whatever you want. Naming them <b>customize</b> is just a naming convention followed by some popular developers of the WordPress community.

Next, open up the newly created <b>customize.php</b> file and put the following code in it:


<xmp></xmp>