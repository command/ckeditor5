/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Autoformat,
	Essentials,
	BlockQuote,
	Bold,
	Heading,
	Italic,
	Link,
	List,
	Code,
	CodeBlock,
	Strikethrough,
	Superscript,
	Subscript,
	Underline,
	Paragraph,
	Image,
	ImageCaption,
	ImageUpload,
	FileRepository,
	MediaEmbed
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'blockQuote',
			'code',
			'link',
			'bulletedList',
			'numberedList',
			'codeBlock',
			'imageUpload',
			'mediaEmbed'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
