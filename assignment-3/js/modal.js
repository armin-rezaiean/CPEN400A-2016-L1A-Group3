/**
 * The Modal class represents a Modal window.
 * Currently, this only supports 1 model window at a time.
 */

/** PUBLIC METHODS **/

/**
 * The constructor.
 * It creates the modal window in the DOM, but is not active at this time.
 */
var Modal = function() {
	// Instance variables:
	this.height = 300; // TODO: Do not hard code
	this.width = 700; // TODO: Do not hard code

	// Create the main DOM elements:
	this.backgroundDiv = this.createBackgroundDiv();
	this.windowDiv = this.createWindowDiv();
	this.closeButton = this.createCloseButton();

	// Hide them before we add them to the DOM:
	this.hide();

	// Add everything to the DOM:
	$('body').append(this.backgroundDiv);
	$('body').append(this.windowDiv);
	this.windowDiv.append(this.closeButton);
};

/**
 * Shows the modal window.
 */
Modal.prototype.show = function() {
	this.backgroundDiv.css('display', 'block');
	this.windowDiv.css('display', 'block');
};

/**
 * Hides the modal window.
 */
Modal.prototype.hide = function() {
	this.backgroundDiv.css('display', 'none');
	this.windowDiv.css('display', 'none');
};

/**
 * Sets the given jQuery div as the content of the window.
 */
Modal.prototype.setContents = function() {
};

/** PRIVATE METHODS **/

Modal.prototype.createBackgroundDiv = function() {
	var backgroundDiv = $('<div>');
	backgroundDiv.css('background-color', 'grey');
	backgroundDiv.css('opacity', 0.5);
	backgroundDiv.css('position', 'fixed');
	backgroundDiv.css('z-index', 1000);
	backgroundDiv.css('top', 0);
	backgroundDiv.css('bottom', 0);
	backgroundDiv.css('left', 0);
	backgroundDiv.css('right', 0);

	return backgroundDiv;
};

Modal.prototype.createWindowDiv = function() {
	var windowDiv = $('<div>');
	windowDiv.height(this.height);
	windowDiv.width(this.width);
	windowDiv.css('position', 'fixed');
	windowDiv.css('top', '50%');
	windowDiv.css('left', '50%');
	windowDiv.css('transform', 'translate(-50%, -50%)');
	windowDiv.css('background-color', 'white');
	windowDiv.css('z-index', 1001);
	windowDiv.css('box-shadow', '6px 7px 30px 5px rgba(0,0,0,0.7)');
	windowDiv.css('border-radius', 10);

	return windowDiv;
};

Modal.prototype.createCloseButton = function() {
	var closeButton = $('<button>');
	closeButton.css('position', 'fixed');
	closeButton.css('right', -15);
	closeButton.css('top', -15);
	closeButton.css('height', 30);
	closeButton.css('width', 30);
	closeButton.css('background-color', 'black');
	closeButton.css('border-style', 'solid');
	closeButton.css('border-color', 'white');
	closeButton.css('border-radius', 15);
	closeButton.css('box-shadow', '0 4px 8px 0 rgba(0,0,0,0.2)');
	closeButton.css('color', 'white');
	closeButton.css('font-weight', 'bold');
	closeButton.css('outline', 'none');

	closeButton.text('X');

	var _this = this;
	closeButton.click(function() {
		_this.hide();
	});

	return closeButton;
};
