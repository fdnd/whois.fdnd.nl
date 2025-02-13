<script>
	import { env } from '$env/dynamic/public';
	import { null_to_empty } from 'svelte/internal';
	const directus = env.PUBLIC_DIRECTUS_URL;
	export let form;

	let id = form?.id || null;

	let hidden = id ? false : true;

	let name = form?.name || 'Onbekend';

	let nickname = form?.nickname || null;
	let github_handle = form?.github_handle || null;
	let website = form?.website || null;
	let bio = form?.bio || null;
	let avatar = form?.avatar || null;
	let birthdate = form?.birthdate || null;
	let custom = form?.custom || null;
	let fav_color = form?.fav_color || null;
	let fav_property = form?.fav_property || null;
	let fav_tag = form?.fav_tag || null;
	let fav_attribute = form?.fav_attribute || null;
	let fav_feature = form?.fav_feature || null;
	let fav_kitchen = form?.fav_kitchen || null;
	let fav_book_genre = form?.fav_book_genre || null;
	let fav_country = form?.fav_country || null;
	let most_energy = form?.most_energy || '';
	let fav_coffee = form?.fav_coffee || null;
	let fav_emoji = form?.fav_emoji || null;
	let fav_hobby = form?.fav_hobby || null;
	let fav_animal = form?.fav_animal || null;

	function populate() {
		hidden = true;
		// trigger loading animation
		if (id != 'null') {
			fetch(`${directus}/person/${id}`)
				.then(res => res.json())
				.then(({ data }) => {
					if (data !== null && !data.errors) {
						hidden = false;
						name = data.name;
						nickname = data.nickname;
						github_handle = data.github_handle;
						website = data.website;
						bio = data.bio;
						avatar = data.avatar;
						birthdate = data.birthdate;
						custom = data.custom;
						fav_color = data.fav_color;
						fav_property = data.fav_property;
						fav_tag = data.fav_tag;
						fav_attribute = data.fav_attribute;
						fav_feature = data.fav_feature;
						fav_kitchen = data.fav_kitchen;
						fav_book_genre = data.fav_book_genre;
						fav_country = data.fav_country;
						most_energy = data.most_energy || '';
						fav_coffee = data.fav_coffee;
						fav_emoji = data.fav_emoji;
						fav_hobby = data.fav_hobby;
						fav_animal = data.fav_animal || '';
					}
				});
		}
	}
</script>

<section>
	<h2>Gegevens van persoon aanpassen</h2>

	<p>Begin met het invoeren van <em>jouw</em> <code>id</code> om <em>jouw</em> gegevens in te laden.</p>
	
	<p>Pas daarna je gegevens aan in het formulier eronder.</p>

	<p><small>Ja, je kunt in dit geval van iedereen de gegevens aanpassen, maar dat is dus <em>niet</em> de bedoeling :)</small></p>

	<form method="get" on:submit={populate}>
		<label for="id">id:</label>
		<input type="text" inputmode="numeric" name="id" id="id" bind:value={id} autocomplete="off" autofocus>
		<input type="submit" value="Gegevens inladen">
	</form>

	<form method="post" hidden={hidden}>

		<h2>{name}</h2>

		<input type="hidden" name="id" id="id" bind:value={id}>
		<input type="hidden" name="name" id="name" bind:value={name}>

		<label for="nickname">Bijnaam:</label>
		<input type="text" name="nickname" id="nickname" bind:value={nickname}>

		<label for="github_handle">GitHub handle:</label>
		<input type="text" name="github_handle" id="github_handle" bind:value={github_handle}>

		<label for="website">Website (geldige URL):</label>
		<input type="url" name="website" id="website" bind:value={website}>

		<label for="bio">Bio:</label>
		<textarea name="bio" id="bio" cols="30" rows="10" bind:value={bio}></textarea>

		<label for="avatar">Avatar (geldige URL, bijvoorbeeld je GitHub avatar):</label>
		<input type="url" name="avatar" id="avatar" bind:value={avatar}>

		<label for="birthdate">Geboortedatum:</label>
		<input type="date" name="birthdate" id="birthdate" bind:value={birthdate}>

		<label for="custom">Eigen velden (geldige JSON):</label>
		<textarea name="custom" id="custom" cols="30" rows="10" bind:value={custom} onblur="checkJSON()"></textarea>

		<fieldset>
			<legend>Extra's</legend>

			<label for="fav_color">Favoriete kleur:</label>
			<input type="color" name="fav_color" id="fav_color" bind:value={fav_color}>

			<label for="fav_tag">Favoriete HTML tag:</label>
			<input type="text" name="fav_tag" id="fav_tag" bind:value={fav_tag} list="tags">
			<datalist id="tags">
				<option>&lt;a&gt;</option>
				<option>&lt;abbr&gt;</option>
				<option>&lt;address&gt;</option>
				<option>&lt;area&gt;</option>
				<option>&lt;article&gt;</option>
				<option>&lt;aside&gt;</option>
				<option>&lt;audio&gt;</option>
				<option>&lt;b&gt;</option>
				<option>&lt;base&gt;</option>
				<option>&lt;bdi&gt;</option>
				<option>&lt;bdo&gt;</option>
				<option>&lt;blockquote&gt;</option>
				<option>&lt;body&gt;</option>
				<option>&lt;br&gt;</option>
				<option>&lt;button&gt;</option>
				<option>&lt;canvas&gt;</option>
				<option>&lt;caption&gt;</option>
				<option>&lt;cite&gt;</option>
				<option>&lt;code&gt;</option>
				<option>&lt;col&gt;</option>
				<option>&lt;colgroup&gt;</option>
				<option>&lt;data&gt;</option>
				<option>&lt;datalist&gt;</option>
				<option>&lt;dd&gt;</option>
				<option>&lt;del&gt;</option>
				<option>&lt;details&gt;</option>
				<option>&lt;dfn&gt;</option>
				<option>&lt;dialog&gt;</option>
				<option>&lt;div&gt;</option>
				<option>&lt;dl&gt;</option>
				<option>&lt;dt&gt;</option>
				<option>&lt;em&gt;</option>
				<option>&lt;embed&gt;</option>
				<option>&lt;fieldset&gt;</option>
				<option>&lt;figcaption&gt;</option>
				<option>&lt;figure&gt;</option>
				<option>&lt;footer&gt;</option>
				<option>&lt;form&gt;</option>
				<option>&lt;h1&gt;</option>
				<option>&lt;h2&gt;</option>
				<option>&lt;h3&gt;</option>
				<option>&lt;h4&gt;</option>
				<option>&lt;h5&gt;</option>
				<option>&lt;h6&gt;</option>
				<option>&lt;head&gt;</option>
				<option>&lt;header&gt;</option>
				<option>&lt;hgroup&gt;</option>
				<option>&lt;hr&gt;</option>
				<option>&lt;html&gt;</option>
				<option>&lt;i&gt;</option>
				<option>&lt;iframe&gt;</option>
				<option>&lt;img&gt;</option>
				<option>&lt;input&gt;</option>
				<option>&lt;ins&gt;</option>
				<option>&lt;kbd&gt;</option>
				<option>&lt;label&gt;</option>
				<option>&lt;legend&gt;</option>
				<option>&lt;li&gt;</option>
				<option>&lt;link&gt;</option>
				<option>&lt;main&gt;</option>
				<option>&lt;map&gt;</option>
				<option>&lt;mark&gt;</option>
				<option>&lt;math&gt;</option>
				<option>&lt;menu&gt;</option>
				<option>&lt;meta&gt;</option>
				<option>&lt;meter&gt;</option>
				<option>&lt;nav&gt;</option>
				<option>&lt;noscript&gt;</option>
				<option>&lt;object&gt;</option>
				<option>&lt;ol&gt;</option>
				<option>&lt;optgroup&gt;</option>
				<option>&lt;option&gt;</option>
				<option>&lt;output&gt;</option>
				<option>&lt;p&gt;</option>
				<option>&lt;picture&gt;</option>
				<option>&lt;pre&gt;</option>
				<option>&lt;progress&gt;</option>
				<option>&lt;q&gt;</option>
				<option>&lt;rp&gt;</option>
				<option>&lt;rt&gt;</option>
				<option>&lt;ruby&gt;</option>
				<option>&lt;s&gt;</option>
				<option>&lt;samp&gt;</option>
				<option>&lt;script&gt;</option>
				<option>&lt;search&gt;</option>
				<option>&lt;section&gt;</option>
				<option>&lt;select&gt;</option>
				<option>&lt;slot&gt;</option>
				<option>&lt;small&gt;</option>
				<option>&lt;source&gt;</option>
				<option>&lt;span&gt;</option>
				<option>&lt;strong&gt;</option>
				<option>&lt;style&gt;</option>
				<option>&lt;sub&gt;</option>
				<option>&lt;summary&gt;</option>
				<option>&lt;sup&gt;</option>
				<option>&lt;svg&gt;</option>
				<option>&lt;table&gt;</option>
				<option>&lt;tbody&gt;</option>
				<option>&lt;td&gt;</option>
				<option>&lt;template&gt;</option>
				<option>&lt;textarea&gt;</option>
				<option>&lt;tfoot&gt;</option>
				<option>&lt;th&gt;</option>
				<option>&lt;thead&gt;</option>
				<option>&lt;time&gt;</option>
				<option>&lt;title&gt;</option>
				<option>&lt;tr&gt;</option>
				<option>&lt;track&gt;</option>
				<option>&lt;u&gt;</option>
				<option>&lt;ul&gt;</option>
				<option>&lt;var&gt;</option>
				<option>&lt;video&gt;</option>
				<option>&lt;wbr&gt;</option>
			</datalist>

			<label for="fav_attribute">Favoriete HTML attribuut:</label>
			<input type="text" name="fav_attribute" id="fav_attribute" bind:value={fav_attribute} list="attributes">
			<datalist id="attributes">
				<option>abbr</option>
				<option>accept</option>
				<option>accept-charset</option>
				<option>accesskey</option>
				<option>action</option>
				<option>allow</option>
				<option>allowfullscreen</option>
				<option>alpha</option>
				<option>alt</option>
				<option>as</option>
				<option>async</option>
				<option>autocapitalize</option>
				<option>autocomplete</option>
				<option>autocorrect</option>
				<option>autofocus</option>
				<option>autoplay</option>
				<option>blocking</option>
				<option>charset</option>
				<option>checked</option>
				<option>cite</option>
				<option>class</option>
				<option>closedby</option>
				<option>color</option>
				<option>colorspace</option>
				<option>cols</option>
				<option>colspan</option>
				<option>content</option>
				<option>contenteditable</option>
				<option>controls</option>
				<option>coords</option>
				<option>crossorigin</option>
				<option>data</option>
				<option>datetime</option>
				<option>decoding</option>
				<option>default</option>
				<option>defer</option>
				<option>dir</option>
				<option>dirname</option>
				<option>disabled</option>
				<option>download</option>
				<option>draggable</option>
				<option>enctype</option>
				<option>enterkeyhint</option>
				<option>fetchpriority</option>
				<option>for</option>
				<option>form</option>
				<option>formaction</option>
				<option>formenctype</option>
				<option>formmethod</option>
				<option>formnovalidate</option>
				<option>formtarget</option>
				<option>headers</option>
				<option>height</option>
				<option>hidden</option>
				<option>high</option>
				<option>href</option>
				<option>hreflang</option>
				<option>http-equiv</option>
				<option>id</option>
				<option>imagesizes</option>
				<option>imagesrcset</option>
				<option>inert</option>
				<option>inputmode</option>
				<option>integrity</option>
				<option>is</option>
				<option>ismap</option>
				<option>itemid</option>
				<option>itemprop</option>
				<option>itemref</option>
				<option>itemscope</option>
				<option>itemtype</option>
				<option>kind</option>
				<option>label</option>
				<option>lang</option>
				<option>list</option>
				<option>loading</option>
				<option>loop</option>
				<option>low</option>
				<option>max</option>
				<option>maxlength</option>
				<option>media</option>
				<option>method</option>
				<option>min</option>
				<option>minlength</option>
				<option>multiple</option>
				<option>muted</option>
				<option>name</option>
				<option>nomodule</option>
				<option>nonce</option>
				<option>novalidate</option>
				<option>onafterprint</option>
				<option>onauxclick</option>
				<option>onbeforeinput</option>
				<option>onbeforematch</option>
				<option>onbeforeprint</option>
				<option>onbeforetoggle</option>
				<option>onbeforeunload</option>
				<option>onblur</option>
				<option>oncancel</option>
				<option>oncanplay</option>
				<option>oncanplaythrough</option>
				<option>onchange</option>
				<option>onclick</option>
				<option>onclose</option>
				<option>oncontextlost</option>
				<option>oncontextmenu</option>
				<option>oncontextrestored</option>
				<option>oncopy</option>
				<option>oncuechange</option>
				<option>oncut</option>
				<option>ondblclick</option>
				<option>ondrag</option>
				<option>ondragend</option>
				<option>ondragenter</option>
				<option>ondragleave</option>
				<option>ondragover</option>
				<option>ondragstart</option>
				<option>ondrop</option>
				<option>ondurationchange</option>
				<option>onemptied</option>
				<option>onended</option>
				<option>onerror</option>
				<option>onfocus</option>
				<option>onformdata</option>
				<option>onhashchange</option>
				<option>oninput</option>
				<option>oninvalid</option>
				<option>onkeydown</option>
				<option>onkeypress</option>
				<option>onkeyup</option>
				<option>onlanguagechange</option>
				<option>onload</option>
				<option>onloadeddata</option>
				<option>onloadedmetadata</option>
				<option>onloadstart</option>
				<option>onmessage</option>
				<option>onmessageerror</option>
				<option>onmousedown</option>
				<option>onmouseenter</option>
				<option>onmouseleave</option>
				<option>onmousemove</option>
				<option>onmouseout</option>
				<option>onmouseover</option>
				<option>onmouseup</option>
				<option>onoffline</option>
				<option>ononline</option>
				<option>onpagehide</option>
				<option>onpagereveal</option>
				<option>onpageshow</option>
				<option>onpageswap</option>
				<option>onpaste</option>
				<option>onpause</option>
				<option>onplay</option>
				<option>onplaying</option>
				<option>onpopstate</option>
				<option>onprogress</option>
				<option>onratechange</option>
				<option>onrejectionhandled</option>
				<option>onreset</option>
				<option>onresize</option>
				<option>onscroll</option>
				<option>onscrollend</option>
				<option>onsecuritypolicyviolation</option>
				<option>onseeked</option>
				<option>onseeking</option>
				<option>onselect</option>
				<option>onslotchange</option>
				<option>onstalled</option>
				<option>onstorage</option>
				<option>onsubmit</option>
				<option>onsuspend</option>
				<option>ontimeupdate</option>
				<option>ontoggle</option>
				<option>onunhandledrejection</option>
				<option>onunload</option>
				<option>onvolumechange</option>
				<option>onwaiting</option>
				<option>onwheel</option>
				<option>open</option>
				<option>optimum</option>
				<option>pattern</option>
				<option>ping</option>
				<option>placeholder</option>
				<option>playsinline</option>
				<option>popover</option>
				<option>popovertarget</option>
				<option>popovertargetaction</option>
				<option>poster</option>
				<option>preload</option>
				<option>readonly</option>
				<option>referrerpolicy</option>
				<option>rel</option>
				<option>required</option>
				<option>reversed</option>
				<option>rows</option>
				<option>rowspan</option>
				<option>sandbox</option>
				<option>scope</option>
				<option>selected</option>
				<option>shadowrootclonable</option>
				<option>shadowrootdelegatesfocus</option>
				<option>shadowrootmode</option>
				<option>shadowrootserializable</option>
				<option>shape</option>
				<option>size</option>
				<option>sizes</option>
				<option>slot</option>
				<option>span</option>
				<option>spellcheck</option>
				<option>src</option>
				<option>srcdoc</option>
				<option>srclang</option>
				<option>srcset</option>
				<option>start</option>
				<option>step</option>
				<option>style</option>
				<option>tabindex</option>
				<option>target</option>
				<option>title</option>
				<option>translate</option>
				<option>type</option>
				<option>usemap</option>
				<option>value</option>
				<option>width</option>
				<option>wrap</option>
				<option>writingsuggestions</option>
			</datalist>

			<label for="fav_property">Favoriete CSS property:</label>
			<input type="text" name="fav_property" id="fav_property" bind:value={fav_property} list="properties">
			<datalist id="properties">
				<option>accent-color</option>
				<option>align-content</option>
				<option>align-items</option>
				<option>align-self</option>
				<option>alignment-baseline</option>
				<option>all</option>
				<option>anchor-name</option>
				<option>anchor-scope</option>
				<option>animation</option>
				<option>animation-composition</option>
				<option>animation-delay</option>
				<option>animation-direction</option>
				<option>animation-duration</option>
				<option>animation-fill-mode</option>
				<option>animation-iteration-count</option>
				<option>animation-name</option>
				<option>animation-play-state</option>
				<option>animation-range</option>
				<option>animation-range-end</option>
				<option>animation-range-start</option>
				<option>animation-timeline</option>
				<option>animation-timing-function</option>
				<option>animation-trigger</option>
				<option>animation-trigger-exit-range</option>
				<option>animation-trigger-exit-range-end</option>
				<option>animation-trigger-exit-range-start</option>
				<option>animation-trigger-range</option>
				<option>animation-trigger-range-end</option>
				<option>animation-trigger-range-start</option>
				<option>animation-trigger-timeline</option>
				<option>animation-trigger-type</option>
				<option>appearance</option>
				<option>aspect-ratio</option>
				<option>azimuth</option>
				<option>backface-visibility</option>
				<option>background</option>
				<option>background-attachment</option>
				<option>background-blend-mode</option>
				<option>background-clip</option>
				<option>background-color</option>
				<option>background-image</option>
				<option>background-origin</option>
				<option>background-position</option>
				<option>background-repeat</option>
				<option>background-size</option>
				<option>baseline-shift</option>
				<option>baseline-source</option>
				<option>block-ellipsis</option>
				<option>block-size</option>
				<option>block-step</option>
				<option>block-step-align</option>
				<option>block-step-insert</option>
				<option>block-step-round</option>
				<option>block-step-size</option>
				<option>bookmark-label</option>
				<option>bookmark-level</option>
				<option>bookmark-state</option>
				<option>border</option>
				<option>border-block</option>
				<option>border-block-color</option>
				<option>border-block-end</option>
				<option>border-block-end-color</option>
				<option>border-block-end-style</option>
				<option>border-block-end-width</option>
				<option>border-block-start</option>
				<option>border-block-start-color</option>
				<option>border-block-start-style</option>
				<option>border-block-start-width</option>
				<option>border-block-style</option>
				<option>border-block-width</option>
				<option>border-bottom</option>
				<option>border-bottom-color</option>
				<option>border-bottom-left-radius</option>
				<option>border-bottom-right-radius</option>
				<option>border-bottom-style</option>
				<option>border-bottom-width</option>
				<option>border-boundary</option>
				<option>border-collapse</option>
				<option>border-color</option>
				<option>border-end-end-radius</option>
				<option>border-end-start-radius</option>
				<option>border-image</option>
				<option>border-image-outset</option>
				<option>border-image-repeat</option>
				<option>border-image-slice</option>
				<option>border-image-source</option>
				<option>border-image-width</option>
				<option>border-inline</option>
				<option>border-inline-color</option>
				<option>border-inline-end</option>
				<option>border-inline-end-color</option>
				<option>border-inline-end-style</option>
				<option>border-inline-end-width</option>
				<option>border-inline-start</option>
				<option>border-inline-start-color</option>
				<option>border-inline-start-style</option>
				<option>border-inline-start-width</option>
				<option>border-inline-style</option>
				<option>border-inline-width</option>
				<option>border-left</option>
				<option>border-left-color</option>
				<option>border-left-style</option>
				<option>border-left-width</option>
				<option>border-radius</option>
				<option>border-right</option>
				<option>border-right-color</option>
				<option>border-right-style</option>
				<option>border-right-width</option>
				<option>border-spacing</option>
				<option>border-start-end-radius</option>
				<option>border-start-start-radius</option>
				<option>border-style</option>
				<option>border-top</option>
				<option>border-top-color</option>
				<option>border-top-left-radius</option>
				<option>border-top-right-radius</option>
				<option>border-top-style</option>
				<option>border-top-width</option>
				<option>border-width</option>
				<option>bottom</option>
				<option>box-decoration-break</option>
				<option>box-shadow</option>
				<option>box-sizing</option>
				<option>box-snap</option>
				<option>break-after</option>
				<option>break-before</option>
				<option>break-inside</option>
				<option>caption-side</option>
				<option>caret</option>
				<option>caret-animation</option>
				<option>caret-color</option>
				<option>caret-shape</option>
				<option>chains</option>
				<option>clear</option>
				<option>clip</option>
				<option>clip-path</option>
				<option>clip-rule</option>
				<option>color</option>
				<option>color-adjust</option>
				<option>color-interpolation-filters</option>
				<option>color-scheme</option>
				<option>column-count</option>
				<option>column-fill</option>
				<option>column-gap</option>
				<option>column-rule</option>
				<option>column-rule-color</option>
				<option>column-rule-style</option>
				<option>column-rule-width</option>
				<option>column-span</option>
				<option>column-width</option>
				<option>columns</option>
				<option>contain</option>
				<option>contain-intrinsic-block-size</option>
				<option>contain-intrinsic-height</option>
				<option>contain-intrinsic-inline-size</option>
				<option>contain-intrinsic-size</option>
				<option>contain-intrinsic-width</option>
				<option>container</option>
				<option>container-name</option>
				<option>container-type</option>
				<option>content</option>
				<option>content-visibility</option>
				<option>continue</option>
				<option>counter-increment</option>
				<option>counter-reset</option>
				<option>counter-set</option>
				<option>cue</option>
				<option>cue-after</option>
				<option>cue-before</option>
				<option>cursor</option>
				<option>direction</option>
				<option>display</option>
				<option>dominant-baseline</option>
				<option>dynamic-range-limit</option>
				<option>elevation</option>
				<option>empty-cells</option>
				<option>field-sizing</option>
				<option>fill</option>
				<option>fill-break</option>
				<option>fill-color</option>
				<option>fill-image</option>
				<option>fill-opacity</option>
				<option>fill-origin</option>
				<option>fill-position</option>
				<option>fill-repeat</option>
				<option>fill-rule</option>
				<option>fill-size</option>
				<option>filter</option>
				<option>flex</option>
				<option>flex-basis</option>
				<option>flex-direction</option>
				<option>flex-flow</option>
				<option>flex-grow</option>
				<option>flex-shrink</option>
				<option>flex-wrap</option>
				<option>float</option>
				<option>float-defer</option>
				<option>float-offset</option>
				<option>float-reference</option>
				<option>flood-color</option>
				<option>flood-opacity</option>
				<option>flow</option>
				<option>flow-from</option>
				<option>flow-into</option>
				<option>font</option>
				<option>font-family</option>
				<option>font-feature-settings</option>
				<option>font-kerning</option>
				<option>font-language-override</option>
				<option>font-optical-sizing</option>
				<option>font-palette</option>
				<option>font-size</option>
				<option>font-size-adjust</option>
				<option>font-stretch</option>
				<option>font-style</option>
				<option>font-synthesis</option>
				<option>font-synthesis-position</option>
				<option>font-synthesis-small-caps</option>
				<option>font-synthesis-style</option>
				<option>font-synthesis-weight</option>
				<option>font-variant</option>
				<option>font-variant-alternates</option>
				<option>font-variant-caps</option>
				<option>font-variant-east-asian</option>
				<option>font-variant-emoji</option>
				<option>font-variant-ligatures</option>
				<option>font-variant-numeric</option>
				<option>font-variant-position</option>
				<option>font-variation-settings</option>
				<option>font-weight</option>
				<option>font-width</option>
				<option>footnote-display</option>
				<option>footnote-policy</option>
				<option>forced-color-adjust</option>
				<option>gap</option>
				<option>glyph-orientation-vertical</option>
				<option>grid</option>
				<option>grid-area</option>
				<option>grid-auto-columns</option>
				<option>grid-auto-flow</option>
				<option>grid-auto-rows</option>
				<option>grid-column</option>
				<option>grid-column-end</option>
				<option>grid-column-start</option>
				<option>grid-row</option>
				<option>grid-row-end</option>
				<option>grid-row-start</option>
				<option>grid-template</option>
				<option>grid-template-areas</option>
				<option>grid-template-columns</option>
				<option>grid-template-rows</option>
				<option>hanging-punctuation</option>
				<option>height</option>
				<option>hyphenate-character</option>
				<option>hyphenate-limit-chars</option>
				<option>hyphenate-limit-last</option>
				<option>hyphenate-limit-lines</option>
				<option>hyphenate-limit-zone</option>
				<option>hyphens</option>
				<option>image-orientation</option>
				<option>image-rendering</option>
				<option>image-resolution</option>
				<option>initial-letter</option>
				<option>initial-letter-align</option>
				<option>initial-letter-wrap</option>
				<option>inline-size</option>
				<option>inline-sizing</option>
				<option>input-security</option>
				<option>inset</option>
				<option>inset-block</option>
				<option>inset-block-end</option>
				<option>inset-block-start</option>
				<option>inset-inline</option>
				<option>inset-inline-end</option>
				<option>inset-inline-start</option>
				<option>interactivity</option>
				<option>interpolate-size</option>
				<option>isolation</option>
				<option>justify-content</option>
				<option>justify-items</option>
				<option>justify-self</option>
				<option>left</option>
				<option>letter-spacing</option>
				<option>lighting-color</option>
				<option>line-break</option>
				<option>line-clamp</option>
				<option>line-fit-edge</option>
				<option>line-grid</option>
				<option>line-height</option>
				<option>line-height-step</option>
				<option>line-padding</option>
				<option>line-snap</option>
				<option>list-style</option>
				<option>list-style-image</option>
				<option>list-style-position</option>
				<option>list-style-type</option>
				<option>margin</option>
				<option>margin-block</option>
				<option>margin-block-end</option>
				<option>margin-block-start</option>
				<option>margin-bottom</option>
				<option>margin-break</option>
				<option>margin-inline</option>
				<option>margin-inline-end</option>
				<option>margin-inline-start</option>
				<option>margin-left</option>
				<option>margin-right</option>
				<option>margin-top</option>
				<option>margin-trim</option>
				<option>marker</option>
				<option>marker-end</option>
				<option>marker-knockout-left</option>
				<option>marker-knockout-right</option>
				<option>marker-mid</option>
				<option>marker-pattern</option>
				<option>marker-segment</option>
				<option>marker-side</option>
				<option>marker-start</option>
				<option>mask</option>
				<option>mask-border</option>
				<option>mask-border-mode</option>
				<option>mask-border-outset</option>
				<option>mask-border-repeat</option>
				<option>mask-border-slice</option>
				<option>mask-border-source</option>
				<option>mask-border-width</option>
				<option>mask-clip</option>
				<option>mask-composite</option>
				<option>mask-image</option>
				<option>mask-mode</option>
				<option>mask-origin</option>
				<option>mask-position</option>
				<option>mask-repeat</option>
				<option>mask-size</option>
				<option>mask-type</option>
				<option>masonry</option>
				<option>masonry-auto-tracks</option>
				<option>masonry-direction</option>
				<option>masonry-fill</option>
				<option>masonry-flow</option>
				<option>masonry-slack</option>
				<option>masonry-template-areas</option>
				<option>masonry-template-tracks</option>
				<option>max-block-size</option>
				<option>max-height</option>
				<option>max-inline-size</option>
				<option>max-lines</option>
				<option>max-width</option>
				<option>min-block-size</option>
				<option>min-height</option>
				<option>min-inline-size</option>
				<option>min-intrinsic-sizing</option>
				<option>min-width</option>
				<option>mix-blend-mode</option>
				<option>nav-down</option>
				<option>nav-left</option>
				<option>nav-right</option>
				<option>nav-up</option>
				<option>object-fit</option>
				<option>object-position</option>
				<option>offset</option>
				<option>offset-anchor</option>
				<option>offset-distance</option>
				<option>offset-path</option>
				<option>offset-position</option>
				<option>offset-rotate</option>
				<option>opacity</option>
				<option>order</option>
				<option>orphans</option>
				<option>outline</option>
				<option>outline-color</option>
				<option>outline-offset</option>
				<option>outline-style</option>
				<option>outline-width</option>
				<option>overflow</option>
				<option>overflow-anchor</option>
				<option>overflow-block</option>
				<option>overflow-clip-margin</option>
				<option>overflow-clip-margin-block</option>
				<option>overflow-clip-margin-block-end</option>
				<option>overflow-clip-margin-block-start</option>
				<option>overflow-clip-margin-bottom</option>
				<option>overflow-clip-margin-inline</option>
				<option>overflow-clip-margin-inline-end</option>
				<option>overflow-clip-margin-inline-start</option>
				<option>overflow-clip-margin-left</option>
				<option>overflow-clip-margin-right</option>
				<option>overflow-clip-margin-top</option>
				<option>overflow-inline</option>
				<option>overflow-wrap</option>
				<option>overflow-x</option>
				<option>overflow-y</option>
				<option>overscroll-behavior</option>
				<option>overscroll-behavior-block</option>
				<option>overscroll-behavior-inline</option>
				<option>overscroll-behavior-x</option>
				<option>overscroll-behavior-y</option>
				<option>padding</option>
				<option>padding-block</option>
				<option>padding-block-end</option>
				<option>padding-block-start</option>
				<option>padding-bottom</option>
				<option>padding-inline</option>
				<option>padding-inline-end</option>
				<option>padding-inline-start</option>
				<option>padding-left</option>
				<option>padding-right</option>
				<option>padding-top</option>
				<option>page</option>
				<option>page-break-after</option>
				<option>page-break-before</option>
				<option>page-break-inside</option>
				<option>pause</option>
				<option>pause-after</option>
				<option>pause-before</option>
				<option>perspective</option>
				<option>perspective-origin</option>
				<option>pitch</option>
				<option>pitch-range</option>
				<option>place-content</option>
				<option>place-items</option>
				<option>place-self</option>
				<option>play-during</option>
				<option>pointer-events</option>
				<option>position</option>
				<option>position-anchor</option>
				<option>position-area</option>
				<option>position-try</option>
				<option>position-try-fallbacks</option>
				<option>position-try-order</option>
				<option>position-visibility</option>
				<option>print-color-adjust</option>
				<option>property-name</option>
				<option>quotes</option>
				<option>reading-flow</option>
				<option>region-fragment</option>
				<option>resize</option>
				<option>rest</option>
				<option>rest-after</option>
				<option>rest-before</option>
				<option>richness</option>
				<option>right</option>
				<option>rotate</option>
				<option>row-gap</option>
				<option>ruby-align</option>
				<option>ruby-merge</option>
				<option>ruby-overhang</option>
				<option>ruby-position</option>
				<option>running</option>
				<option>scale</option>
				<option>scroll-behavior</option>
				<option>scroll-initial-target</option>
				<option>scroll-margin</option>
				<option>scroll-margin-block</option>
				<option>scroll-margin-block-end</option>
				<option>scroll-margin-block-start</option>
				<option>scroll-margin-bottom</option>
				<option>scroll-margin-inline</option>
				<option>scroll-margin-inline-end</option>
				<option>scroll-margin-inline-start</option>
				<option>scroll-margin-left</option>
				<option>scroll-margin-right</option>
				<option>scroll-margin-top</option>
				<option>scroll-marker-group</option>
				<option>scroll-padding</option>
				<option>scroll-padding-block</option>
				<option>scroll-padding-block-end</option>
				<option>scroll-padding-block-start</option>
				<option>scroll-padding-bottom</option>
				<option>scroll-padding-inline</option>
				<option>scroll-padding-inline-end</option>
				<option>scroll-padding-inline-start</option>
				<option>scroll-padding-left</option>
				<option>scroll-padding-right</option>
				<option>scroll-padding-top</option>
				<option>scroll-snap-align</option>
				<option>scroll-snap-stop</option>
				<option>scroll-snap-type</option>
				<option>scroll-start-target</option>
				<option>scroll-timeline</option>
				<option>scroll-timeline-axis</option>
				<option>scroll-timeline-name</option>
				<option>scrollbar-color</option>
				<option>scrollbar-gutter</option>
				<option>scrollbar-width</option>
				<option>shape-image-threshold</option>
				<option>shape-inside</option>
				<option>shape-margin</option>
				<option>shape-outside</option>
				<option>spatial-navigation-action</option>
				<option>spatial-navigation-contain</option>
				<option>spatial-navigation-function</option>
				<option>speak</option>
				<option>speak-as</option>
				<option>speak-header</option>
				<option>speak-numeral</option>
				<option>speak-punctuation</option>
				<option>speech-rate</option>
				<option>stress</option>
				<option>string-set</option>
				<option>stroke</option>
				<option>stroke-align</option>
				<option>stroke-alignment</option>
				<option>stroke-break</option>
				<option>stroke-color</option>
				<option>stroke-dash-corner</option>
				<option>stroke-dash-justify</option>
				<option>stroke-dashadjust</option>
				<option>stroke-dasharray</option>
				<option>stroke-dashcorner</option>
				<option>stroke-dashoffset</option>
				<option>stroke-image</option>
				<option>stroke-linecap</option>
				<option>stroke-linejoin</option>
				<option>stroke-miterlimit</option>
				<option>stroke-opacity</option>
				<option>stroke-origin</option>
				<option>stroke-position</option>
				<option>stroke-repeat</option>
				<option>stroke-size</option>
				<option>stroke-width</option>
				<option>tab-size</option>
				<option>table-layout</option>
				<option>text-align</option>
				<option>text-align-all</option>
				<option>text-align-last</option>
				<option>text-autospace</option>
				<option>text-box</option>
				<option>text-box-edge</option>
				<option>text-box-trim</option>
				<option>text-combine-upright</option>
				<option>text-decoration</option>
				<option>text-decoration-color</option>
				<option>text-decoration-line</option>
				<option>text-decoration-skip</option>
				<option>text-decoration-skip-box</option>
				<option>text-decoration-skip-ink</option>
				<option>text-decoration-skip-inset</option>
				<option>text-decoration-skip-self</option>
				<option>text-decoration-skip-spaces</option>
				<option>text-decoration-style</option>
				<option>text-decoration-thickness</option>
				<option>text-decoration-trim</option>
				<option>text-emphasis</option>
				<option>text-emphasis-color</option>
				<option>text-emphasis-position</option>
				<option>text-emphasis-skip</option>
				<option>text-emphasis-style</option>
				<option>text-group-align</option>
				<option>text-indent</option>
				<option>text-justify</option>
				<option>text-orientation</option>
				<option>text-overflow</option>
				<option>text-shadow</option>
				<option>text-spacing</option>
				<option>text-spacing-trim</option>
				<option>text-transform</option>
				<option>text-underline-offset</option>
				<option>text-underline-position</option>
				<option>text-wrap</option>
				<option>text-wrap-mode</option>
				<option>text-wrap-style</option>
				<option>timeline-scope</option>
				<option>top</option>
				<option>transform</option>
				<option>transform-box</option>
				<option>transform-origin</option>
				<option>transform-style</option>
				<option>transition</option>
				<option>transition-behavior</option>
				<option>transition-delay</option>
				<option>transition-duration</option>
				<option>transition-property</option>
				<option>transition-timing-function</option>
				<option>translate</option>
				<option>unicode-bidi</option>
				<option>user-select</option>
				<option>vertical-align</option>
				<option>view-timeline</option>
				<option>view-timeline-axis</option>
				<option>view-timeline-inset</option>
				<option>view-timeline-name</option>
				<option>view-transition-class</option>
				<option>view-transition-group</option>
				<option>view-transition-name</option>
				<option>visibility</option>
				<option>voice-balance</option>
				<option>voice-duration</option>
				<option>voice-family</option>
				<option>voice-pitch</option>
				<option>voice-range</option>
				<option>voice-rate</option>
				<option>voice-stress</option>
				<option>voice-volume</option>
				<option>volume</option>
				<option>white-space</option>
				<option>white-space-collapse</option>
				<option>white-space-trim</option>
				<option>widows</option>
				<option>width</option>
				<option>will-change</option>
				<option>word-break</option>
				<option>word-space-transform</option>
				<option>word-spacing</option>
				<option>word-wrap</option>
				<option>wrap-after</option>
				<option>wrap-before</option>
				<option>wrap-flow</option>
				<option>wrap-inside</option>
				<option>wrap-through</option>
				<option>writing-mode</option>
				<option>z-index</option>
				<option>zoom</option>
			</datalist>

			<label for="fav_feature">Favoriete JS feature:</label>
			<input type="text" name="fav_feature" id="fav_feature" bind:value={fav_feature} list="features">
			<datalist id="features">
				<option>Attribution Reporting</option>
				<option>Audio Output Devices</option>
				<option>Background Fetch</option>
				<option>Background Synchronization</option>
				<option>Background Tasks</option>
				<option>Badging</option>
				<option>Barcode Detection</option>
				<option>Battery Status</option>
				<option>Beacon</option>
				<option>Web Bluetooth</option>
				<option>Broadcast Channel</option>
				<option>CSS Custom Highlight</option>
				<option>CSS Font Loading</option>
				<option>CSS Painting</option>
				<option>CSS Properties and Values</option>
				<option>CSS Typed Object Model</option>
				<option>CSS Object Model (CSSOM)</option>
				<option>Canvas</option>
				<option>Channel Messaging</option>
				<option>Clipboard</option>
				<option>Compression Streams</option>
				<option>Compute Pressure</option>
				<option>Console</option>
				<option>Contact Picker</option>
				<option>Content Index</option>
				<option>Cookie Store</option>
				<option>Credential Management</option>
				<option>Document Object Model (DOM)</option>
				<option>Device Memory</option>
				<option>Device orientation events</option>
				<option>Device Posture</option>
				<option>Document Picture-in-Picture</option>
				<option>EditContext</option>
				<option>Encoding</option>
				<option>Encrypted Media Extensions</option>
				<option>EyeDropper</option>
				<option>Federated Credential Management (FedCM)</option>
				<option>Fenced Frame</option>
				<option>Fetch</option>
				<option>File</option>
				<option>File System</option>
				<option>File and Directory Entries</option>
				<option>Force Touch events Non-standard</option>
				<option>Fullscreen</option>
				<option>Gamepad</option>
				<option>Geolocation</option>
				<option>Geometry interfaces</option>
				<option>The HTML DOM</option>
				<option>HTML Drag and Drop</option>
				<option>History</option>
				<option>Houdinis</option>
				<option>Idle Detection</option>
				<option>MediaStream Image Capture</option>
				<option>IndexedDB</option>
				<option>Ink</option>
				<option>InputDeviceCapabilities</option>
				<option>Insertable Streams for MediaStreamTrack</option>
				<option>Intersection Observer</option>
				<option>Invoker Commands</option>
				<option>Keyboard</option>
				<option>Launch Handler</option>
				<option>Local Font Access</option>
				<option>Media Capabilities</option>
				<option>Media Capture and Streams (Media Stream)</option>
				<option>Media Session</option>
				<option>Media Source</option>
				<option>MediaStream Recording</option>
				<option>Navigation</option>
				<option>Network Information</option>
				<option>Page Visibility</option>
				<option>Payment Handler</option>
				<option>Payment Request</option>
				<option>Performances</option>
				<option>Web Periodic Background Synchronization</option>
				<option>Permissions</option>
				<option>Picture-in-Picture</option>
				<option>Pointer events</option>
				<option>Pointer Lock</option>
				<option>Popover</option>
				<option>Presentation</option>
				<option>Prioritized Task Scheduling</option>
				<option>Push</option>
				<option>Remote Playback</option>
				<option>Reporting</option>
				<option>Resize Observer</option>
				<option>SVG</option>
				<option>Screen Capture</option>
				<option>Screen Orientation</option>
				<option>Screen Wake Lock</option>
				<option>Selection</option>
				<option>Sensors</option>
				<option>Server-sent events</option>
				<option>Service Worker</option>
				<option>Shared Storage</option>
				<option>Speculation Rules</option>
				<option>Storage</option>
				<option>Storage Access</option>
				<option>Streams</option>
				<option>Topics Non-standard</option>
				<option>Touch events</option>
				<option>Trusted Types</option>
				<option>UI Events</option>
				<option>URL</option>
				<option>URL Fragment Text Directives</option>
				<option>URL Pattern</option>
				<option>User-Agent Client Hints</option>
				<option>Vibration</option>
				<option>View Transition</option>
				<option>VirtualKeyboard</option>
				<option>Visual Viewport</option>
				<option>Web Animations</option>
				<option>Web Audio</option>
				<option>Web Authentication</option>
				<option>Web Components</option>
				<option>Web Crypto</option>
				<option>Web Locks</option>
				<option>Web MIDI</option>
				<option>Web NFC</option>
				<option>Notifications</option>
				<option>Web Serial</option>
				<option>Web Share</option>
				<option>Web Speech</option>
				<option>Web Storage</option>
				<option>Web Workers</option>
				<option>WebCodecs</option>
				<option>WebGL</option>
				<option>WebGPU</option>
				<option>WebHID</option>
				<option>WebOTP</option>
				<option>WebRTC</option>
				<option>WebSockets</option>
				<option>WebTransport</option>
				<option>WebUSB</option>
				<option>WebVTT</option>
				<option>WebXR Device</option>
				<option>Window Controls Overlay</option>
				<option>Window Management</option>
				<option>XMLHttpRequest</option>
			</datalist>

			<label for="fav_kitchen">Favoriete gerecht:</label>
			<select name="fav_kitchen" id="fav_kitchen" bind:value={fav_kitchen}>
				<option></option>
				<option>Abgoosht</option>
				<option>AVG'tje</option>
				<option>Bami</option>
				<option>Barbeque</option>
				<option>Burrito's</option>
				<option>Couscous</option>
				<option>Erwtensoep</option>
				<option>Hamburger</option>
				<option>Indische rijsttafel</option>
				<option>Kippensoep</option>
				<option>Köfte</option>
				<option>Lasagne</option>
				<option>Nasi</option>
				<option>Pannenkoeken</option>
				<option>Pasta</option>
				<option>Patat</option>
				<option>Pizza</option>
				<option>Quiche</option>
				<option>Shoarma</option>
				<option>Souvlaki</option>
				<option>Sushi</option>
				<option>Taco's</option>
				<option>Tomatensoep</option>
				<option>Tonijn</option>
				<option>Zalm</option>
			</select>

			<label for="fav_book_genre">Favoriete boekengenre:</label>
			<select name="fav_book_genre" id="fav_book_genre" bind:value={fav_book_genre}>
				<option></option>
				<option>Action</option>
				<option>Comedy</option>
				<option>Drama</option>
				<option>Thriller</option>
			</select>

			<label for="fav_country">Favoriete vakantiebestemming:</label>
			<select name="fav_country" id="fav_country" bind:value={fav_country}>
				<option></option>
				<option value="AFG">Afghanistan</option>
				<option value="ALB">Albania</option>
				<option value="DZA">Algeria</option>
				<option value="AGO">Angola</option>
				<option value="ATA">Antarctica</option>
				<option value="ARG">Argentina</option>
				<option value="ARM">Armenia</option>
				<option value="AUS">Australia</option>
				<option value="AUT">Austria</option>
				<option value="AZE">Azerbaijan</option>
				<option value="BGD">Bangladesh</option>
				<option value="BLR">Belarus</option>
				<option value="BEL">Belgium</option>
				<option value="BLZ">Belize</option>
				<option value="BEN">Benin</option>
				<option value="BTN">Bhutan</option>
				<option value="BOL">Bolivia</option>
				<option value="BIH">Bosnia and Herzegovina</option>
				<option value="BWA">Botswana</option>
				<option value="BRA">Brazil</option>
				<option value="BRN">Brunei</option>
				<option value="BGR">Bulgaria</option>
				<option value="BFA">Burkina Faso</option>
				<option value="BDI">Burundi</option>
				<option value="KHM">Cambodia</option>
				<option value="CMR">Cameroon</option>
				<option value="CAN">Canada</option>
				<option value="CAF">Central African Republic</option>
				<option value="TCD">Chad</option>
				<option value="CHL">Chile</option>
				<option value="CHN">China</option>
				<option value="COL">Colombia</option>
				<option value="CRI">Costa Rica</option>
				<option value="HRV">Croatia</option>
				<option value="CUB">Cuba</option>
				<option value="CYP">Cyprus</option>
				<option value="CZE">Czech Republic</option>
				<option value="COD">Democratic Republic of the Congo</option>
				<option value="DNK">Denmark</option>
				<option value="DJI">Djibouti</option>
				<option value="DOM">Dominican Republic</option>
				<option value="TLS">East Timor</option>
				<option value="ECU">Ecuador</option>
				<option value="EGY">Egypt</option>
				<option value="SLV">El Salvador</option>
				<option value="GNQ">Equatorial Guinea</option>
				<option value="ERI">Eritrea</option>
				<option value="EST">Estonia</option>
				<option value="ETH">Ethiopia</option>
				<option value="FLK">Falkland Islands</option>
				<option value="FJI">Fiji</option>
				<option value="FIN">Finland</option>
				<option value="FRA">France</option>
				<option value="GUF">French Guiana</option>
				<option value="ATF">French Southern and Antarctic Lands</option>
				<option value="GAB">Gabon</option>
				<option value="GMB">Gambia</option>
				<option value="GEO">Georgia</option>
				<option value="DEU">Germany</option>
				<option value="GHA">Ghana</option>
				<option value="GRC">Greece</option>
				<option value="GRL">Greenland</option>
				<option value="GTM">Guatemala</option>
				<option value="GNB">Guinea Bissau</option>
				<option value="GIN">Guinea</option>
				<option value="GUY">Guyana</option>
				<option value="HTI">Haiti</option>
				<option value="HND">Honduras</option>
				<option value="HUN">Hungary</option>
				<option value="ISL">Iceland</option>
				<option value="IND">India</option>
				<option value="IDN">Indonesia</option>
				<option value="IRN">Iran</option>
				<option value="IRQ">Iraq</option>
				<option value="IRL">Ireland</option>
				<option value="ISR">Israel</option>
				<option value="ITA">Italy</option>
				<option value="CIV">Ivory Coast</option>
				<option value="JAM">Jamaica</option>
				<option value="JPN">Japan</option>
				<option value="JOR">Jordan</option>
				<option value="KAZ">Kazakhstan</option>
				<option value="KEN">Kenya</option>
				<option value="-99">Kosovo</option>
				<option value="KWT">Kuwait</option>
				<option value="KGZ">Kyrgyzstan</option>
				<option value="LAO">Laos</option>
				<option value="LVA">Latvia</option>
				<option value="LBN">Lebanon</option>
				<option value="LSO">Lesotho</option>
				<option value="LBR">Liberia</option>
				<option value="LBY">Libya</option>
				<option value="LTU">Lithuania</option>
				<option value="LUX">Luxembourg</option>
				<option value="MKD">Macedonia</option>
				<option value="MDG">Madagascar</option>
				<option value="MWI">Malawi</option>
				<option value="MYS">Malaysia</option>
				<option value="MLI">Mali</option>
				<option value="MRT">Mauritania</option>
				<option value="MEX">Mexico</option>
				<option value="MDA">Moldova</option>
				<option value="MNG">Mongolia</option>
				<option value="MNE">Montenegro</option>
				<option value="MAR">Morocco</option>
				<option value="MOZ">Mozambique</option>
				<option value="MMR">Myanmar</option>
				<option value="NAM">Namibia</option>
				<option value="NPL">Nepal</option>
				<option value="NLD">Netherlands</option>
				<option value="NCL">New Caledonia</option>
				<option value="NZL">New Zealand</option>
				<option value="NIC">Nicaragua</option>
				<option value="NER">Niger</option>
				<option value="NGA">Nigeria</option>
				<option value="PRK">North Korea</option>
				<option value="-99">Northern Cyprus</option>
				<option value="NOR">Norway</option>
				<option value="OMN">Oman</option>
				<option value="PAK">Pakistan</option>
				<option value="PAN">Panama</option>
				<option value="PNG">Papua New Guinea</option>
				<option value="PRY">Paraguay</option>
				<option value="PER">Peru</option>
				<option value="PHL">Philippines</option>
				<option value="POL">Poland</option>
				<option value="PRT">Portugal</option>
				<option value="PRI">Puerto Rico</option>
				<option value="QAT">Qatar</option>
				<option value="SRB">Republic of Serbia</option>
				<option value="COG">Republic of the Congo</option>
				<option value="ROU">Romania</option>
				<option value="RUS">Russia</option>
				<option value="RWA">Rwanda</option>
				<option value="SAU">Saudi Arabia</option>
				<option value="SEN">Senegal</option>
				<option value="SLE">Sierra Leone</option>
				<option value="SVK">Slovakia</option>
				<option value="SVN">Slovenia</option>
				<option value="SLB">Solomon Islands</option>
				<option value="SOM">Somalia</option>
				<option value="ZAF">South Africa</option>
				<option value="KOR">South Korea</option>
				<option value="SSD">South Sudan</option>
				<option value="ESP">Spain</option>
				<option value="LKA">Sri Lanka</option>
				<option value="SDN">Sudan</option>
				<option value="SUR">Suriname</option>
				<option value="SWZ">Swaziland</option>
				<option value="SWE">Sweden</option>
				<option value="CHE">Switzerland</option>
				<option value="SYR">Syria</option>
				<option value="TWN">Taiwan</option>
				<option value="TJK">Tajikistan</option>
				<option value="THA">Thailand</option>
				<option value="BHS">The Bahamas</option>
				<option value="TGO">Togo</option>
				<option value="TTO">Trinidad and Tobago</option>
				<option value="TUN">Tunisia</option>
				<option value="TUR">Turkey</option>
				<option value="TKM">Turkmenistan</option>
				<option value="UGA">Uganda</option>
				<option value="UKR">Ukraine</option>
				<option value="ARE">United Arab Emirates</option>
				<option value="GBR">United Kingdom</option>
				<option value="TZA">United Republic of Tanzania</option>
				<option value="USA">United States of America</option>
				<option value="URY">Uruguay</option>
				<option value="UZB">Uzbekistan</option>
				<option value="VUT">Vanuatu</option>
				<option value="VEN">Venezuela</option>
				<option value="VNM">Vietnam</option>
				<option value="PSE">West Bank</option>
				<option value="ESH">Western Sahara</option>
				<option value="YEM">Yemen</option>
				<option value="ZMB">Zambia</option>
				<option value="ZWE">Zimbabwe</option>
			</select>
			<small>Voor gebruik met bijvoorbeeld <a href="https://datamaps.github.io/">DataMaps</a></small>

			<label for="most_energy">Wanneer heb je de meeste energie?</label>
			<select name="most_energy" id="most_energy" bind:value={most_energy}>
				<option value="">Ik ben flexibel</option>
				<option value="morning">Ik ben een ochtendmens</option>
				<option value="evening">Ik ben een avondmens</option>
			</select>

			<label for="fav_coffee">Favoriete koffie:</label>
			<input type="text" name="fav_coffee" id="fav_coffee" bind:value={fav_coffee} list="coffees">
			<datalist id="coffees">
				<option>Cappuccino</option>
				<option>Espresso</option>
				<option>Irish coffee</option>
				<option>Koffie verkeerd</option>
				<option>Latte</option>
			</datalist>

			<label for="fav_emoji">Favoriete emoji:</label>
			<input type="text" name="fav_emoji" id="fav_emoji" bind:value={fav_emoji}>

			<label for="fav_hobby">Hobby:</label>
			<input type="text" name="fav_hobby" id="fav_hobby" bind:value={fav_hobby} list="hobbies">
			<datalist id="hobbies">
				<option>Chillen</option>
				<option>Coden</option>
				<option>Dammen</option>
				<option>Festivals</option>
				<option>Fitness</option>
				<option>Gamen</option>
				<option>Haken</option>
				<option>Lezen</option>
				<option>Muziek</option>
				<option>Schaken</option>
				<option>Sporten</option>
				<option>Uitgaan</option>
			</datalist>

			<label for="fav_animal">Favoriet dier</label>
			<select name="fav_animal" id="fav_animal" bind:value={fav_animal}>
				<option></option>
				<option>Aap</option>
				<option>Cavia</option>
				<option>Dino</option>
				<option>Dolfijn</option>
				<option>Eend</option>
				<option>Eenhoorn</option>
				<option>Egel</option>
				<option>Giraffe</option>
				<option>Haai</option>
				<option>Hamster</option>
				<option>Hond</option>
				<option>Inktvis</option>
				<option>Kat</option>
				<option>Kikker</option>
				<option>Kip</option>
				<option>Koe</option>
				<option>Konijn</option>
				<option>Krokodil</option>
				<option>Leeuw</option>
				<option>Olifant</option>
				<option>Paard</option>
				<option>Panda</option>
				<option>Schaap</option>
				<option>Schildpad</option>
				<option>Tijger</option>
				<option>Vis</option>
				<option>Vlinder</option>
				<option>Vogel</option>
				<option>Zebra</option>
				<option>Zeehond</option>
			</select>

		</fieldset>

		<input type="submit" value="Opslaan">
	</form>
	<script type="module">
		window.checkJSON = function() {
			let custom = document.getElementById('custom');
			let val = custom.value.trim();
			custom.setCustomValidity('');
			if (val != '') {
				try {
					JSON.parse(val);
				} catch(e) {
					custom.setCustomValidity('Gebruik hier geldige JSON');
				}
			}
		}
	</script>
</section>

<style>
	section {
		max-width: 50rem;
		background: var(--c-green);
		color: var(--c-blue);
		padding: var(--component-padding);
		border-radius: var(--rounded);
	}

	form {
		margin-top: 3em;
	}
	fieldset {
		margin-top: 2em;
		border: 1px solid var(--c-blue);
		border-radius: var(--rounded);
	}
	label {
		margin: 2rem 0 0.2rem;
		display: block;
		font-size: 1.6rem;
	}
	legend + label {
		margin-top: 0;
	}
	textarea,
	input[type='text'],
	input[type='number'],
	input[type='url'],
	input[type='date'],
	input[type='submit'],
	select {
		font-family: monospace;
		padding: var(--component-padding);
		font-size: 1.4rem;
		background-color: #fff4;
		border: 1px solid currentColor;
		border-radius: var(--rounded);
		color: var(--c-blue);
	}
	textarea,
	input[type='text'],
	input[type='number'],
	input[type='url'],
	select {
		width: 100%;
	}
	input[type='number'] {
		width: auto;
	}
	textarea {
		height: 8em;
		resize: vertical;
	}
	textarea#custom {
		font-family: monospace;
	}
	textarea:focus,
	input[type='url']:focus,
	input[type='date']:focus,
	input[type='text']:focus,
	select:focus {
		outline: none !important;
		border-color: var(--c-blue);
		background: #fff;
	}
	input[type='text'],
	input[type='url'] {
		height: 2em;
	}
	input[type='submit'] {
		margin-top: 1rem;
		background: var(--c-blue);
		color: var(--c-green);
		border-radius: var(--pilled);
		transition: 0.15s;
		width: auto;
		cursor: pointer;
	}
	input[type='submit']:focus, input[type='submit']:hover {
		background: var(--c-green);
		color: var(--c-blue);
	}
</style>
